const Contact = () => {
    return ( 
        <>
    <div className="content">          
         <div className="container my-4">
        <h2 className="text-center text-dark">Contact Us</h2>
        <hr className="bg-dark"></hr>
        <div className="row">
            <div className="col-md-6">
                <h5>Address</h5>
                <p>123 Shoe Street, Shoe City, SH 12345</p>
                <h5>Email</h5>
                <p><a href="mailto:info@shoestore.com">info@shoestore.com</a></p>
                <h5>Phone</h5>
                <p><a href="tel:+1234567890">+1 234 567 890</a></p>
            </div>
            <div className="col-md-6">
                <h5>Contact Form</h5>
                <form>
                    <div className="form-group">
                        <label HtmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" required/>
                    </div>
                    <div className="form-group">
                        <label HtmlHtmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" required/>
                    </div>
                    <div className="form-group">
                        <label HtmlFor="message">Commnent</label>
                        <textarea className="form-control" id="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        </div>
    </div>
    </div>
        </>
     );
}
 
export default Contact;