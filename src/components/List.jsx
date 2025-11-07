import "./../assets/css/List.css"
import TodoItem from './TodoItem.jsx'
import { useState } from 'react';

const List = ({todos, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((item) => {
            return item.content.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        });
    }

    const filteredTodos = getFilteredData();

    return (
        <>
            <div className={"List"}>
                <h4>Todo List 🌱</h4>
                <input
                    value={search}
                    onChange={onChangeSearch}
                    className={"border-b-2 border-gray-300 p-1"}
                    placeholder={"검색어를 입력하세요"}/>
                <div className={".todos_wrapper"}>
                    {filteredTodos.map((item) => {
                        return <TodoItem key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default List;