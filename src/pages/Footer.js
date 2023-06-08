import "./Footer.css";
const Footer =() => {

    return(
    <div>
            {/* <!-- Footer --> */}


            <div className="footer">
                <div className="containerFooter">
                    <div className="rowFooter">
                        <div className="footer-col-1">
                            <h3>Download our App</h3>
                            <p>Download app for Android and IOs</p>
                            <div className="app-logos">
                                <img src="/ASSETS/images/play-store.png" alt=""/>
                                <img src="/ASSETS/images/app-store.png" alt=""/>
                            </div>

                        </div>

                        <div className="footer-col-2">
                            <img src="/ASSETS/images/logo-white.png" alt=""/>
                            <p>Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the
                                Many. </p>
                        </div>

                        <div className="footer-col-3">
                            <h3>Links</h3>
                            <ul>
                                <li><a href="#">Coupons</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Return Policy</a></li>
                                <li><a href="#">Join Affiliate</a></li>

                            </ul>
                        </div>
                        <div className="footer-col-4">
                            <h3>Follow us on</h3>
                            <ul>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">YouTube</a></li>

                            </ul>
                        </div>



                    </div>
                    <hr/>
                    <p className="copyright">Copyrights reserved by Arfah Ali - 2023</p>
                </div>
            </div>
    </div>
    
    );

}
export default Footer;