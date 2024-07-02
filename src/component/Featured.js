const Featured = () => {
    return ( 
        <>
          <div className="container">
        <h2 className="text-center my-4">Featured Products</h2>
        <div className="row">
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src="./img/shoe1.webp" className="card-img-top" alt="Shoe 1" height="350px" width="300px"/>
                    <div className="card-body">
                        <h5 className="card-title">Running Shoe</h5>
                        <p className="card-text">₹1149</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src="img/shoe2.jpg" className="card-img-top" alt="Shoe 2" height="350px" width="300px"/>
                    <div className="card-body">
                        <h5 className="card-title">Casual Shoe</h5>
                        <p className="card-text">₹1349</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <img src="img/shoe3.webp" className="card-img-top" alt="Shoe 3" height="350px" width="300px"/>
                    <div className="card-body">
                        <h5 className="card-title">Formal Shoe</h5>
                        <p className="card-text">₹1269</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
     );
}
 
export default Featured;