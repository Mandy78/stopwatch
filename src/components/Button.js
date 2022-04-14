import "./Button.css";


const Button = (props)=>{

     
    return(
        <button  className="btn" onClick={props.click}>{ props.title}</button>
    )


}

export default Button;