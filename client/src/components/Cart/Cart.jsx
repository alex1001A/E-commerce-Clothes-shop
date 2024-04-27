//React components
import React from 'react'

//Styles
import './Cart.scss'

//MUI icons
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Cart() {

    const data = [
        {
            id: 1,
            img: 'http://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'http://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Long Sleeve Graphic T-shirt',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, accusantium!1',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: 'http://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Coat',
            desc: 'Lorem ipsum 2',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
    ];

    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {data?.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">1 x ${item.price}</div>

                    </div>
                    <DeleteOutlineIcon className='delete' />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button >PROCEED TO CHECKOUT</button>
            <span className='reset'>Reset Cart</span>
        </div>
    )
}

export default Cart