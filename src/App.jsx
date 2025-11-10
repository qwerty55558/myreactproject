import './App.css'
import { Routes , Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import New from './pages/New.jsx'
import Diary from './pages/Diary.jsx'
import NotFound from './pages/NotFound.jsx'
import Button from './components/Button.jsx'
import Header from './components/Header.jsx'

import getEmotionImage from './utils/get-emotion-image.js'

/**
 * 1. "/" = 모든 일기를 조회하는 Home 페이지
 * 2. "/new" = 새로운 일기를 작성하는 New 페이지
 * 3. "/diary" = 일기를 상세히 조회하는 Diary 페이지
 */
function App() {

    return (
        <>
            <Header
                title={"Header"}
                leftChild={<Button text={"left"} />}
                rightChild={<Button text={"right"} />}
                />

                    <div className={"flex gap-2"}>
                <Button text={"123"} onClick={() => {
                    console.log("123")
                }}/>
                <Button text={"123"} type={"POSITIVE"} onClick={() => {
                    console.log("123")
                }}/>
                <Button text={"123"} type={"NEGATIVE"} onClick={() => {
                    console.log("123")
                }}/>
            </div>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/diary/:id" element={<Diary/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>

    );
}

export default App
