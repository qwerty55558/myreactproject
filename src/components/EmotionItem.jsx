import {getEmotionImage} from "../utils/get-emotion-image.js"
import "../assets/css/EmotionItem.css"

const EmotionItem = ({
                         emotionId,
                         emotionName,
                         isSelected,
                         onClick}) => {
    return (
      <div
        onClick={onClick}
        className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}
      >
          <img className={"emotion_img"} src={getEmotionImage(emotionId)} alt={"img"}/>
          <div className={"emotion_name"}>{emotionName}</div>
      </div>
    );
}

export default EmotionItem;