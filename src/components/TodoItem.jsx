import "./../assets/css/TodoItem.css"

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

    const onChangeChecked = () => {
        onUpdate(id);
    }

    const onClickDelete = () => {
        onDelete(id);
    }

    return (
        <div className={"TodoItem"}>
            <input onChange={onChangeChecked} checked={isDone} type={"checkbox"}/>
            <div className={"content"}>{content}</div>
            <div className={"date"}>{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    );
};

export default TodoItem;
