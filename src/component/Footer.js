const Footer = () => {
    return ( <>
     <footer className="bg-dark text-center mt-4 text-light">
        <div className="container p-4">
            <div className="row">
                <div className="col-md-4 md-0">
                    <h5 className="text-uppercase text-warning ">The Shoe Store</h5>
                    <hr className="bg-light"></hr>
                    <h6 className="text-uppercase">we are on social media</h6>
                    <button className="fa fa-facebook ml-4" ></button>
                    <button className="fa fa-instagram ml-2"></button>
                    <button className="fa fa-youtube ml-2"></button>
                </div>
                <div className="col-md-4 mb-md-0">
                    <h5 className="text-uppercase">Links</h5>
                    <hr className="bg-light"></hr>

                    <ul className="list-unstyled mb-0">
                        <li>
                            <button className="text-warning bg-dark mt-2">Products</button>
                        </li>
                        <li>
                            <button className="text-warning bg-dark mt-2">About Us</button>
                        </li>
                        <li>
                            <button className="text-warning bg-dark mt-2">Contact</button>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Contact</h5>
                    <hr className="bg-light"></hr>
                    <ul className="list-unstyled mb-0">
                        <li>
                            <button className="text-warning bg-dark mt-2">info@shoestore.com</button>
                        </li>
                        <li>
                            <button className="text-warning bg-dark mt-2">+1 234 567 890</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="text-center p-3">
            © 2023 ShoeStore. All Rights Reserved.
        </div>
    </footer>
    </>  );
}
  <>
  </>
export default Footer;