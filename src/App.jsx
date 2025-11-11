import './App.css'

import { useReducer, useRef } from 'react'
import { Routes , Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import New from './pages/New.jsx'
import Diary from './pages/Diary.jsx'
import Edit from './pages/Edit.jsx'
import NotFound from './pages/NotFound.jsx'

const mockData = [
    {
        id: 0,
        createdDate: new Date().getTime(),
        emotionId: 1,
        content: "1번 일기 내용",
    },
    {
        id: 1,
        createdDate: new Date().getTime(),
        emotionId: 2,
        content: "2번 일기 내용",
    },
    {
        id: 2,
        createdDate: new Date().getTime(),
        emotionId: 3,
        content: "3번 일기 내용",
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
    }
}


/**
 * 1. "/" = 모든 일기를 조회하는 Home 페이지
 * 2. "/new" = 새로운 일기를 작성하는 New 페이지
 * 3. "/diary" = 일기를 상세히 조회하는 Diary 페이지
 */
function App() {

    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

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

    return (
        <>
            <button
                onClick={() => onCreate(new Date().getTime(), 1, "content")}
                className={"Button_DEFAULT"}
            >
                일지 추가 테스트
            </button>
            <button
                onClick={() => onUpdate(0, new Date().getTime(), 2, "updated content")}
                className={"Button_DEFAULT"}
            >
                일지 수정 테스트
            </button>


            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/diary/:id" element={<Diary/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path={"/edit/:id"} element={<Edit/>}/>
            </Routes>
        </>

    );
}

export default App
