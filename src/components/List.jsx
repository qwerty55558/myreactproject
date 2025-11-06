import "./../assets/css/List.css"
import TodoItem from './TodoItem.jsx'


const List = () => {
    return (
        <>
            <div className={"List"}>
                <h4>Todo List 🌱</h4>
                <input className={"border-b-2 border-gray-300 p-1"} placeholder={"검색어를 입력하세요"}/>
                <div className={".todos_wrapper"}>
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                </div>
            </div>
        </>
    );
};

export default List;