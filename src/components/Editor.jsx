import "./../assets/css/Editor.css"
import { useState, useRef } from "react";

const Editor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    }

    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };



    return (
        <>
            <div className={"Editor"}>
                <input
                    onKeyDown={onKeyDown}
                    ref={contentRef}
                    onChange={onChangeContent}
                    value={content}
                    placeholder={"새로운 Todo..."}
                    className={"border-2 border-blue-700 rounded-xl p-1 flex-1"}
                />
                <button onClick={onSubmit} className={"border-1 p-1 rounded-xl bg-gray-400 text-white w-[80px]"}>추가</button>
            </div>
        </>
    );
};

export default Editor;