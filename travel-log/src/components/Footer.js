

function Footer() {

    return (
        <>
          <footer className="footer-distributed">
            <div className="footer-left">
                <h3>wanderlog ❤</h3>
               <p className="company-name">Wanderlog © 2020</p>
            </div>
            <div className="footer-center">
                <div>
                    <i class="fa fa-map-marker"></i>
                    <p id="address"><span>444 S.Cedron Ave</span> Salon Beach, California</p>
                </div>
                <div>
                    <i class="fa fa-phone"></i>
                    <p id="phone">+1.555.434.5435</p>
                </div>
                <div>
                    <i class="fa fa-envelope"></i>
                    <p id="email"><a href="mailto:support@wanderlog.com">support@wanderlog.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <p class="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					{/* <a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a> */}
                </div>
            </div>
          </footer>
        </>
    )
}

export default Footer;