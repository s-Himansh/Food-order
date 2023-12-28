import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(foodData) {
    let cartData = useCart();
    let dispatch = useDispatchCart();

    let priceRef = useRef();
    // this is done prices of half and medium pizzas is different and these prices are mapped with their type half, medium etc. so we need key values first so that we can price acc.
    let options = foodData.options;
    let priceOptions = Object.keys(options);

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    const handleToCart = async() => {
        await dispatch({type : "ADD", id : foodData.foodItem._id, name : foodData.foodItem.name, price : finalPrice, qty : qty, size : size });
    }
    // console.log(cartData);

    let finalPrice = qty * parseInt(options[size]);

    useEffect(() => {
        setSize(priceRef.current.value);
    },[]);
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "20rem", "maxHeight": "400px" }}>
                    <img src={foodData.foodItem.img} style={{ maxHeight: '140px', objectFit: 'cover' }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{foodData.foodItem.name}</h5>
                        <p className="card-text">{foodData.foodItem.description}</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                                {/* whatever written in {} is considered to be javascript */}
                                {
                                    Array.from(Array(6), (e, idx) => {
                                        return (
                                            <option key={idx + 1} value={idx + 1}>{idx + 1}</option>
                                        );
                                    })
                                }
                            </select>
                            <select className='m-2 h-100 rounded bg-success rounded' ref = {priceRef} onChange={(e) => setSize(e.target.value)}>
                                {
                                    priceOptions.map((data) => {
                                        return <option key={data} value={data}>{data}</option>
                                    })
                                }
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                Rs.{finalPrice}/-
                            </div>
                        </div>
                        <hr />
                        <button className='btn btn-success justify-center ms-2' onClick={handleToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
