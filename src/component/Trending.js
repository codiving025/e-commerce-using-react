
const Trending = () => {
    return ( <>
    <div className="content">
               <h1 className="text-center mt-4 ">Trending's</h1>
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="3" aria-label="Fourth slide"></li>
            </ol>
            <div className="carousel-inner ml-auto" role="listbox" id="carousel">
                <div className="carousel-item active">
                    <img src='/img/shoe4.png' className="d-block w-100" alt="First slide" height="500px"/>
                </div>
                <div className="carousel-item">
                    <img src="/img/casual5.webp" className="d-block w-100" alt="Second slide" height="500px"/>
                </div>
                <div className="carousel-item">
                    <img src="/img/boot4.webp" className="d-block w-100" alt="Third slide"height="500px" width="40%"/>
                </div>
                <div className="carousel-item">
                    <img src="/img/running4.jpeg" className="d-block w-100" alt="Fourth slide"height="500px" width="40%"/>
                </div>
            </div>
            <span className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </span>
            <span className="carousel-control-next visually-hidden" type="button" data-bs-target="#carouselId" data-bs-slide="next" aria-hidden="true">
                <span className="carousel-control-next-icon visually-hidden"></span>
            </span>
        </div>
      </div>
    </>);
}
 
export default Trending;