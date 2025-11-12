const Button = ({ text, type, onClick }) => {
    if (type === undefined) {
        type = "DEFAULT";
    }
    return (
        <button type="button"
                onClick={onClick}
                className={`text-white cursor-pointer font-medium rounded-lg text-sm px-4 py-2 m-2
                Button_${type}`}>
            {text}
        </button>
    );
}

export default Button;