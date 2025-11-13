import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import {useNavigate} from "react-router-dom";

const New = () => {
    const nav = useNavigate();

    return (
        <div>
            <Header title={"새 일기 쓰기"}
            leftChild={<Button
                    text={"<"}
                    onClick={() => nav(-1)}
                />}
            />
            <Editor />
        </div>
    );
}

export default New;