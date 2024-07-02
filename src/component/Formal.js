import { Link } from "react-router-dom";
const Formal = () => {
    return ( <>
    <div className="content">
     <div className="container">
        <h2 className="text-center my-4">Formal-Wear</h2>
        <hr className="bg-dark"></hr>
        <div className="row">
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src='/img/formal3.jpg' className="card-img-top" alt="Shoe 1" width="300" height="350"/>
                    <div className="card-body">
                        <h5 className="card-title">San Frissco Man's Black Oxford shoe</h5>
                        <p className="card-text">Brand: San Frissco</p>
                        <p className="card-text">₹2649</p>
                        <Link to='' className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src="/img/formal1.avif" className="card-img-top" alt="Shoe 2" width="300" height="350"/>
                    <div className="card-body">
                        <h5 className="card-title">CODE By Life style Men's Sleep On</h5>
                        <p className="card-text">Brand: CODE</p>
                        <p className="card-text">$79.99</p>
                        <Link to='' className="btn btn-primary">Show All</Link>

                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src="/img/formal3.jpg" className="card-img-top" alt="Shoe 3" width="300" height="350"/>
                    <div className="card-body">
                        <h5 className="card-title">Ezok Men Leather Semi-Formal</h5>
                        <p className="card-text">Brand:Ezok-Leather</p>
                        <p className="card-text">₹1149</p>
                        <Link to='' className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
               <div className="row">
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src="/img/formal4.webp" className="card-img-top" alt="Shoe 1" width="300" height="350"/>
                    <div className="card-body">
                        <h5 className="card-title">Toro Blu Men's Lace Up Formal</h5>
                        <p className="card-text">Brand: Toro Blu</p>
                        <p className="card-text">$99.99</p>
      
                        <Link to='' className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src="/img/formal5.jpg" className="card-img-top" alt="Shoe 2" width="300" height="350"/>
                    <div className="card-body">
                        <h5 className="card-title">Ezok Men Brown Leather Semi-Formal</h5>
                        <p className="card-text">Brand: Ezok</p>
                        <p className="card-text">$79.99</p>
                        <Link to='' className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src="/img/shoe3.webp" className="card-img-top" alt="Shoe 3" width="300" height="350"/>
                    <div className="card-body">
                        <h5 className="card-title">Josh Loafer Brown Formal Shoe</h5>
                        <p className="card-text">Brand: Josh</p>
                        <p className="card-text">$119.99</p>
                        <Link to='' className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src="/img/formal6.webp" className="card-img-top" alt="Shoe 1" width="300" height="350"/>
                    <div className="card-body">
                        <h5 className="card-title">Slant Cap Toe Deep Cut Espresso Leather Men's Formal</h5>
                        <p className="card-text">Brand: Slant Cap</p>
                        <p className="card-text">$99.99</p>
                        <Link to='' className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src="/img/formal7.webp" className="card-img-top" alt="Shoe 2" width="300" height="350"/>
                    <div className="card-body">
                        <h5 className="card-title">Vitoria White Lace-Up Formal Shoes.</h5>
                        <p className="card-text">Brand: Vitoria</p>
                        <p className="card-text">$79.99</p>
                        <Link to='' className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src="/img/formal8.avif" className="card-img-top" alt="Shoe 3" width="300" height="350"/>
                    <div className="card-body">
                        <h5 className="card-title">Formal Shoes For Men </h5>
                        <p className="card-text">Brand: Loafer</p>
                        <p className="card-text">$119.99</p>
                        <Link to='' className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
           
        </div>
        </div>
    </> );
}
 
export default Formal;