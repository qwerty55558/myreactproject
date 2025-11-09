const Button = ({ text, type, onClick }) => {
    return (
        <button type="button"
                onClick={onClick}
                className={`text-white font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2
                Button_${type}`}>
            {text}
        </button>
    )
}

export default Button;