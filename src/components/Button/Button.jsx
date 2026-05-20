import "./Button.css";

const Button = ({texto, onClick, nome}) => {
    return(
        <button className={nome} onClick={onClick}>
            {texto}
        </button>
    )
}

export default Button;