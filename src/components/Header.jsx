const Header = () => {
    return (
        <>
            <div className={"Header"}>
                <h3 className={"text-3xl"}>오늘은 🗓️</h3>
                <h1 className={"text-5xl text-blue-400"}>{new Date().toDateString()}</h1>
            </div>
        </>
    );
};

export default Header;