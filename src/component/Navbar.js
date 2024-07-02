import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-dark" id='nav'>
         <Link to='/' >  <img src="/img/file.png" alt=""height="80px" width="300px" id='logo'/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to = '/' className="nav-link text-light" href="index.html">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='products' className="nav-link text-light" href="products.html">Products</Link>
                </li>
                <li className="nav-item">
                    <Link to='about' className="nav-link text-light" href="about.html">About Us</Link>
                </li>
                <li className="nav-item active">
                    <Link  to = 'contact' className="nav-link text-light" href="contact.html">Contact </Link>
                </li>
            </ul>
        </div>
    </nav>
        </>
     );
}
export default Navbar;