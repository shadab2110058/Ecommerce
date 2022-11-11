import './inputBox.css'


function InputBox(props){

return(
    <input type={props.type} className= {props.class} placeholder={props.text} name={props.name}/>
);
}



export default InputBox;