import { useParams } from "react-router-dom";

const Diary = () => {
    const params = useParams();
    console.log(params.id);

    return <div>
        {params.id} 번 일기 페이지
    </div>;
}

export default Diary;