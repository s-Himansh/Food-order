import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://www.sanjanafeasts.co.uk/wp-content/uploads/2023/07/Paneer-Tikka-Kebabs-on-a-platter-with-fresh-naan-bread-720x720.jpg" style={{height : "120px", width : "286px", objectFit : "contain !important"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is some demo text we are using</p>
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
                                <option value="half">Half</option>
                                <option value="full">Full</option>
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
