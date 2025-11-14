import {useParams, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {DiaryDispatchContext, DiaryStateContext} from "../App.jsx";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";

const Edit = () => {
    const param = useParams();
    const nav = useNavigate();
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();

    useEffect(() => {
        const currentDiaryItem = data.find((item) => String(item.id) === String(param.id));
        console.log(currentDiaryItem);

        if (!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.");
            nav(`/`, {replace: true});
        }

        setCurDiaryItem(currentDiaryItem);
    }, [param.id]);

    const onClickDelete = () => {
        if (window.confirm("일기를 정말 삭제하시겠습니까?")) {
            onDelete(param.id);
            nav(`/`, {replace: true});
        }
    };

    const onSubmit = (input) => {
        if (window.confirm("정말 수정하시겠습니까?")) {
            onUpdate(param.id, input.createdDate.getTime(), input.emotionId, input.content);
            nav(`/`, {replace: true});
        }
    }

    return (
        <>
            <Header
                title={"일기 수정하기"}
                leftChild={<Button text={"<"} onClick={() => nav(-1)} />}
                rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />}
            />
            <Editor initData={curDiaryItem} onSubmit={onSubmit} />
        </>
    );
};

export default Edit;