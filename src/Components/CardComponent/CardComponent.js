// Product
// Requirements ---> Name, Description, Picture, Price 
import './CardComponent.css';


function CardComponent({ prodDetails, handleAddToCart }) {
  const { name, description, price, picture } = prodDetails;

  return (
    <div
      className="root"
    >
      <img src={picture} alt={name} className="prod-img"/>
      <div className="content-section" >
        <h3>{name}</h3>
        <h4>{description}</h4>
        <h2>{price}</h2>
        <button onClick={() => handleAddToCart(prodDetails)} >Add To Cart</button> 
      </div>
    </div>
  )
}

export default CardComponent;