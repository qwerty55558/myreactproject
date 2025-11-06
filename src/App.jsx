import './App.css'
import Header from './components/Header'
import List from './components/List'
import Editor from './components/Editor'
import { useState, useRef, useEffect } from 'react'

const mockData = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "빨래하기",
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        date: new Date().getTime(),
    }
];

function App() {
    const [todos, setTodos] = useState(mockData);
    const inputRef = useRef(mockData.length);
    useEffect(() => {
        console.log(todos);
    }, [todos]);

    const onCreate = (content) => {
        const newTodo = {
            id: inputRef.current++,
            isDone: false,
            content: content,
            date : new Date().getTime()
        }

        setTodos([...todos, newTodo]);
    }
  return (
    <div className={"display-flex flex-column m-5 App mx-auto w-100"}>
        <section>
            <Header />
        </section>
        <section>
            <Editor onCreate={onCreate}/>
        </section>
        <section>
            <List />
        </section>
    </div>
  );
}

export default App
