import {useParams} from "react-router-dom";

const Edit = () => {
    const param = useParams();
    return (
        <div>{param.id}번 </div>
    );
};

export default Edit;