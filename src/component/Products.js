import {useNavigate } from "react-router-dom";
const Products = () => {
    let navigate = useNavigate();
    let onclick =()=>
        {
               navigate('running')  
        }
    let casual = ()=>
        {
            navigate('casual')
        }
    let forml =()=>
        {
            navigate('formal')
        }
    let boot =()=>
        {
            navigate('boot')
        }
    return ( <>
    <div className="content">
         <div class="container">
        <h2 class="text-center mb-5">Our Products</h2>
        <hr className="bg-dark"></hr>
        <div class="row">
            <div class="col-md-4">
                <div class="card bg-dark text-light">
                    <img src="img/running5.webp" class="card-img-top" alt="Shoe 1" width="300" height="350"/>
                    <div class="card-body">
                        <h5 class="card-title">Running Shoe</h5>
                        <button  class="btn btn-primary" onClick={onclick}>show all</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card bg-dark text-light">
                    <img src="img/casual8.webp" class="card-img-top" alt="Shoe 2" width="300" height="350"/>
                    <div class="card-body">
                        <h5 class="card-title">Casual Shoe</h5>
                        <button class="btn btn-primary" onClick={casual}>Show All</button>

                    </div>
                </div>
             </div>
             <div class="col-md-4">
                <div class="card bg-dark text-light">
                    <img src="img/formal7.webp" class="card-img-top" alt="Shoe 3" width="300" height="350"/>
                    <div class="card-body">
                        <h5 class="card-title">Formal Shoe</h5>
                        <button class="btn btn-primary" onClick={forml}>Show All</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="card bg-dark text-light">
                    <img src="img/boot2.jpg" class="card-img-top" alt="Shoe 1" width="300" height="350"/>
                    <div class="card-body">
                        <h5 class="card-title">Boots</h5>
                        <button class="btn btn-primary" onClick={boot}>Show All</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </> );
}
export default Products;