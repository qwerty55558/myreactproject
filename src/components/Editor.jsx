import EmotionItem from "./EmotionItem.jsx";
import {useState} from "react";
import Button from "./Button.jsx";
import "../assets/css/Editor.css"

const emotionList = [
    {
        emotionId: 1,
        emotionName: "아주 좋음"
    },
    {
        emotionId: 2,
        emotionName: "좋음"
    },
    {
        emotionId: 3,
        emotionName: "그럭 저럭"
    },
    {
        emotionId: 4,
        emotionName: "나쁨"
    },
    {
        emotionId: 5,
        emotionName: "끔찍함"
    }
]

const getStringedDate = (targetDate) => {
    // 날짜 -> yyyy-mm-dd
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let day = targetDate.getDate();
    if (month < 10) month = `0${month}`;
    if (day < 10) day = `0${day}`;
    return `${year}-${month}-${day}`;
}

const Editor = () => {
    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: "",
    });

    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "createdDate") {
            value = new Date(value);
        }

        setInput({
            ...input,
            [name]: value,
        })
    }

    return (
        <div className={"Editor"}>
            <section className={"date_section"}>
                <h4>오늘의 날짜</h4>
                <input
                    value={getStringedDate(input.createdDate)}
                    type={"date"}
                    name={"createdDate"}
                    onChange={onChangeInput}
                />
            </section>
            <section className={"emotion_section"}>
                <h4>오늘의 감정</h4>
                <div className={"emotion_list_wrapper"}>
                    {emotionList.map((item) =>
                        <EmotionItem
                            onClick={() => onChangeInput({
                                target: {
                                    name: "emotionId",
                                    value: item.emotionId
                                }
                            })}
                            key={item.emotionId} {...item}
                            isSelected={item.emotionId === input.emotionId}/>
                    )}
                </div>
            </section>
            <section className={"content_section"}>
                <h4>오늘의 일기</h4>
                <textarea
                    name={"content"}
                    value={input.content}
                    onChange={onChangeInput}
                    placeholder={"오늘은 어땠나요?"}></textarea>
            </section>
            <section className={"button_section"}>
                <Button text={"취소하기"}/>
                <Button text={"작성완료"} type={"POSITIVE"}/>
            </section>
        </div>
    );
}

export default Editor;