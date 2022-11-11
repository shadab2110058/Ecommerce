import './button.css'


function Button(props){
    const value = props.text;
    return(
        <button type={props.type} className={props.class}>{value}</button>
    );
}


export default Button;