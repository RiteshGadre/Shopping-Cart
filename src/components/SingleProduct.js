import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'

const SingleProduct = ({ prod }) => {
     
     
    const {
        state: { cart },
        dispatch,
      } = CartState();

    console.log("yashhsh",cart)
  return (
    <div className='products'> 
      <Card>
       <Card.Img variant="top" src={prod.image} alt={prod.name} style={{ height: '22rem' }} />
       <Card.Body>
        <Card.Title> {prod.name}</Card.Title>
        <Card.Subtitle style={{paddingBottom : 10}}>
           <span>
           ₹{prod.price.split(".")[0]}
           </span>
           {prod.fastDelivery ? (<div>
            fast Delivery
           </div>) : (<div>4 days Delivery</div>)
           }
           <Rating rating = {prod.ratings} />
        </Card.Subtitle>

        {
            cart.some((p)=>p.id===prod.id)?( <Button onClick={()=>
                dispatch({
                    type : "REMOVE_CART",
                    payload : prod
                })
            } variant="danger"> Remove from Cart</Button>):(<Button onClick={()=>
                dispatch({
                    type : "ADD_TO_CART",
                    payload : prod
                })
            }
                disabled={!prod.instock}> {!prod.instock ? "Out of Stock" : "Add to Cart"} </Button>)
        }
        
         
      </Card.Body>
       
      </Card>
    </div>
  )
}

export default SingleProduct