import './App.css'

import { useReducer, useRef, createContext } from 'react'
import { Routes , Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import New from './pages/New.jsx'
import Diary from './pages/Diary.jsx'
import Edit from './pages/Edit.jsx'
import NotFound from './pages/NotFound.jsx'

const mockData = [
    {
        id: 0,
        createdDate: new Date("2025-11-12").getTime(),
        emotionId: 1,
        content: "1번 일기 내용",
    },
    {
        id: 1,
        createdDate: new Date("2025-10-12").getTime(),
        emotionId: 2,
        content: "2번 일기 내용",
    },
    {
        id: 2,
        createdDate: new Date("2025-09-12").getTime(),
        emotionId: 3,
        content: "3번 일기 내용",
    },
    {
        id: 3,
        createdDate: new Date("2025-11-11").getTime(),
        emotionId: 4,
        content: "4번 일기 내용",
    }
];


function reducer(state, action){
    switch (action.type){
        case 'CREATE': {
            return [action.data, ...state];
        }
        case 'UPDATE': {
            return state.map((item) => {
                return String(item.id) === String(action.data.id) ? action.data : item;
            });
        }
        case 'DELETE': {
            return state.filter((item) => String(item.id) !== String(action.data.id));
        }
        default: {
            return state;
        }
    }
}


export const DiaryDispatchContext = createContext();
export const DiaryStateContext = createContext();


/**
 * 1. "/" = 모든 일기를 조회하는 Home 페이지
 * 2. "/new" = 새로운 일기를 작성하는 New 페이지
 * 3. "/diary" = 일기를 상세히 조회하는 Diary 페이지
 */
function App() {

    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(mockData.length);

    // 새로운 일기 추가
    const onCreate = (createdDate, emotionId, content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current,
                createdDate,
                emotionId,
                content,
            },
        });
        idRef.current++;
        console.log(data);
    };

    // 기존 일기 수정
    const onUpdate = (id, createdDate, emotionId, content) => {
        dispatch({
            type: "UPDATE",
            data: {
                id,
                createdDate,
                emotionId,
                content,
            }
        });
    };
    // 기존 일기 삭제
    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            data: {
                id
            },
        })
    }

    return (
        <>
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/new"} element={<New/>}/>
                        <Route path={"/diary/:id"} element={<Diary/>}/>
                        <Route path={"*"} element={<NotFound/>}/>
                        <Route path={"/edit/:id"} element={<Edit/>}/>
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>

        </>

    );
}

export default App
