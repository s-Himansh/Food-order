import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Home() {

   const [search, setSearch] = useState('');

   const [foodCat, setFoodCat] = useState([]);
   const [foodItem, setFoodItem] = useState([]);

   const loadData = async () => {
      let response = await fetch("http://localhost:5000/api/foodData", { method: "POST", headers: { 'Content-type': 'application/json' } });
      response = await response.json();
      // console.log(response[0]);
      // console.log(response[1]);

      setFoodCat(response[1]);
      setFoodItem(response[0]);
   }
   useEffect(() => {
      loadData();
   }, []);

   return (
      <div>
         <NavBar />
         <div>
            {/* we rewrote the carousel because we want data from carousel that is directly connected to the whole meanu mainly the search bar  */}
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
               <div className="carousel-inner" id='carousel'>
                  <div className='carousel-caption' style={{ zIndex: "10" }}>
                     <div className="d-flex justify-content-center">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
                        {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                     </div>
                  </div>
                  <div className="carousel-item active">
                     <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                  </div>
                  <div className="carousel-item">
                     <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                  </div>
                  <div className="carousel-item">
                     <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                  </div>
               </div>
               <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
               </button>
               <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
               </button>
            </div>
         </div>
         <div className='container'>
            {
               foodCat != []
                  ? foodCat.map((data) => {
                     return (
                        <div className='row mb-3'>
                           <div key={data._id} className='fs-4 m-3'>
                              {data.CategoryName}
                           </div>
                           <hr />
                           {
                              foodItem != []
                                 ? foodItem.filter((item) => item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map((filteredName) => {
                                    return (
                                       <div key={filteredName._id} className='col-12 col-md-6 col-lg-3'>
                                          <Card foodItem = {filteredName} options={filteredName.options[0]} />
                                       </div>
                                    )
                                 }) : <div>No data found</div>
                           }
                        </div>
                     );
                  }) : ""
            }
         </div>
         <Footer />
      </div>
   )
}
