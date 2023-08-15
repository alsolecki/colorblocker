const Header = ({ title, color }) => {

    console.log(color)

    return (
        <header className="title">
            <h1 
                style={{backgroundColor: color }}
                >{title}</h1>
        </header>
    )
}

export default Header;