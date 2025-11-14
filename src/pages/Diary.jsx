import { useParams } from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Viewer from "../components/Viewer.jsx";

const Diary = () => {
    const params = useParams();
    console.log(params.id);

    return (
        <>
            <Header
                title={"yyyy-mm-dd"}
                leftChild={<Button text={"<"}/>}
                rightChild={<Button text={"수정하기"}/>}
            />
            <Viewer />
        </>
    );
}

export default Diary;