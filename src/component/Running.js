
const Running = ({ product, addToCart }) => {
    return ( 
        <>
    <div className="content">

         <div className="container">

        <h2 className="text-center ">Ruuning-Wear</h2>
        <hr className="bg-dark"></hr>
        <div className="row">
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src='/img/shoe1.webp' className="card-img-top" alt="Shoe 1" width="300" height="350"/>
                    <div className="card-body">
                        <h5 className="card-title">Caampus Running Shoe For Man</h5>
                        <p className="card-text">Brand: Adidas</p>
                        <p className="card-text">₹1149</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>

                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src="/img/running1.jpg" className="card-img-top" alt="Shoe 2" width="300" height="350"/>
                    <div className="card-body">
                        <h5 className="card-title">White Comfortable Stylish Look Asian Rafale-01</h5>
                        <p className="card-text">Brand: Asian</p>
                        <p className="card-text">$79.99</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src='/img/running2.jpg' className="card-img-top" alt="Shoe 3" width="300" height="350"/>
                    <div className="card-body">
                        <h5 className="card-title">RED TAPE Running comfortable</h5>
                        <p className="card-text">Brand: RedTape</p>
                        <p className="card-text">₹1149</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src="/img/running4.jpeg" className="card-img-top" alt="Shoe 1" width="300" height="350"/>
                    <div className="card-body">
                        <h5 className="card-title">Black Sports Running Shoes For Men Puma </h5>
                        <p className="card-text">Brand: Puma</p>
                        <p className="card-text">$99.99</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src="/img/shoe2.jpg" className="card-img-top" alt="Shoe 2" width="300" height="350"/>
                    <div className="card-body">
                        <h5 className="card-title">Casual Shoe</h5>
                        <p className="card-text">Brand: Adidas</p>
                        <p className="card-text">$79.99</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src="/img/running3.webp" className="card-img-top" alt="Shoe 3" width="300" height="350"/>
                    <div className="card-body">
                        <h5 className="card-title">RedTape Sports Running Shoes</h5>
                        <p className="card-text">Brand: RedTape</p>
                        <p className="card-text">$119.99</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src="/img/running5.webp" className="card-img-top" alt="Shoe 1" width="300" height="350"/>
                    <div className="card-body">
                        <h5 className="card-title">Puma Men's  Sports Running Shoes</h5>
                        <p className="card-text">Brand: Puma</p>
                        <p className="card-text">$99.99</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src="/img/running6.avif" className="card-img-top" alt="Shoe 2" width="300" height="350"/>
                    <div className="card-body">
                        <h5 className="card-title">Men ANTI Lace-Up Running Shoes</h5>
                        <p className="card-text">Brand: fila</p>
                        <p className="card-text">$79.99</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src="/img/running7.webp" className="card-img-top" alt="Shoe 3" width="300" height="350"/>
                    <div className="card-body">
                        <h5 className="card-title">CAMPUS ALGERIA Running Shoes For Men</h5>
                        <p className="card-text">Brand: Campus</p>
                        <p className="card-text">$119.99</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
            </div>
           <div className="row">
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src="/img/running8.webp" className="card-img-top" alt="Shoe 1" width="300" height="350"/>
                    <div className="card-body">
                        <h5 className="card-title">HRX by Hrithik Roshan Men Grey Road Running Shoes </h5>
                        <p className="card-text">Brand: Hrx</p>
                        <p className="card-text">$99.99</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
           </div>
       </div>
       </div>
        </>
     );
}
export default Running;