import "../assets/css/Viewer.css";
import {getEmotionImage} from "../utils/get-emotion-image.js";
import {emotionList} from "../utils/constants.js";


const Viewer = () => {
    const emotionId = 3;

    const emotionItem = emotionList.find(
        (item) =>
            String(item.emotionId) === String(emotionId)
    );


    return (
        <>
            <section className={"img_section"}>
                <h4>오늘의 감정</h4>
                <img src={getEmotionImage(emotionId)}/>
                <div>{emotionItem.emotionName}</div>
            </section>
            <section className={"content_section"}>asdf</section>
        </>
    );
};

export default Viewer;