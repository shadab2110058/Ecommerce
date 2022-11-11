import './addedCartItem.css'

const AddedCartItem=(props)=>{
    // console.log(props);
    
    return(
        <div className='wrap--cartMolileItem'>
            <img src={props.location} alt={props.name}/>
            <p>{props.MobileName}</p>
            <p>{props.quantity}</p>
            <p>{(props.quantity)*(props.price)}</p>
        </div>
    );
}

export default AddedCartItem