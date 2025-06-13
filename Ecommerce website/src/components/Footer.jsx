const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row text-center text-md-left">
          {/* First Column - Exclusive/Subscribe */}
          <div className="col-md-2 mb-4">
            <h5 className="font-weight-bold">Exclusive</h5>
            <div className="mt-3">
              <h6 className="font-weight-bold">Subscribe</h6>
              <p className="small">Get 10% off your first order</p>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Enter email" />
                <div className="input-group-append">
                  <button className="btn btn-outline-light" type="button">
                   Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Second Column - Support */}
          <div className="col-md-3 mb-4">
            <h6 className="font-weight-bold">Support</h6>
            <p className="mb-1">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className="mb-1">exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          {/* Third Column - Account */}
          <div className="col-md-2 mb-4">
            <h6 className="font-weight-bold">Account</h6>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>

          {/* Fourth Column - Quick Link */}
          <div className="col-md-2 mb-4">
            <h6 className="font-weight-bold">Quick Link</h6>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>

          {/* Fifth Column - Download App */}
          <div className="col-md-3 mb-4">
            <h6 className="font-weight-bold">Download App</h6>
            <p className="small">Save $3 with App New User Only</p>
            <div className="d-flex align-items-center mb-2">
              {/* <img src="https://via.placeholder.com/60" alt="QR Code" className="mr-2" style={{width: '60px', height: '60px'}} /> */}
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{width: '100px', marginBottom: '5px'}} />
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" style={{width: '100px'}} />
              </div>
            </div>
            <div className="mt-3">
              <a href="#" className="text-light mr-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-light mr-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light mr-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-light"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 border-top pt-4">
          <p className="mb-0"><i className="far fa-copyright"></i> Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
