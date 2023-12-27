import React from 'react'

export default function Card(foodData) {

    // this is done prices of half and medium pizzas is different and these prices are mapped with their type half, medium etc. so we need key values first so that we can price acc.
    let options = foodData.options;
    let priceOptions = Object.keys(options);
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "20rem", "maxHeight": "400px" }}>
                    <img src={foodData.imgsrc} style={{ maxHeight: '200px', objectFit: 'cover' }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{foodData.foodName}</h5>
                        <p className="card-text">{foodData.description}</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded'>
                                {/* whatever written in {} is considered to be javascript */}
                                {
                                    Array.from(Array(6), (e, idx) => {
                                        return (
                                            <option key={idx + 1} value={idx + 1}>{idx + 1}</option>
                                        );
                                    })
                                }
                            </select>
                            <select className='m-2 h-100 rounded bg-success rounded'>
                                {
                                    priceOptions.map((data) => {
                                        return <option key={data} value={data}>{data}</option>
                                    })
                                }
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                Total Price
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
