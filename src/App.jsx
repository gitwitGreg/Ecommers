import './App.css'
import logo from '../src/assets/l.png'
function App() {

  return (
    <>
    <section className='nav'>
      <a href='logo'><img src={logo} width={50} height={50}></img></a>
      <h1>G?Shop</h1>
      <div className='nav-options'>
        <ul id='navbar'>
          <li><a href='index.html' className='active'>Home</a></li>
          <li><a href='shop.html'>Shop</a></li>
          <li><a href='blog.html'>Blog</a></li>
          <li><a href='about.html'>About</a></li>
          <li><a href='contact.html'>Contact</a></li>
          <li><a href='cart.html'><i className="fa-solid fa-cart-shopping"></i></a></li>
        </ul>
      </div>
    </section>

    <section className='hero'>
      <h4>Trade-in-offer</h4>
      <h1>Best Value Deals</h1>
      <h1>On all producte</h1>
      <p>Save more with coupons & up to 50% off on select items</p>
      <button>Shop now</button>
    </section>

    <section  className='options'>
      <div className='shipping'>
        <img className='simg' src='../src/assets/s.jpg' />
        <h6>Free Shipping</h6>
      </div>
      <div className='order'>
        <img className='orderimg' src='../src/assets/order.jpg' />
        <h6>Online order</h6>
      </div>
      <div className='saveMoney'>
        <img className='saveimg'src='../src/assets/pig.jpg' />
        <h6>Save Money</h6>
      </div>
      <div className='promotions'>
        <img className='promimg'src='../src/assets/sale.png' />
        <h6>Promotions</h6>
      </div>
      <div className='happysell'>
        <img className='happyimg'src='../src/assets/sell.jpg' />
        <h6>Happy Sale</h6>
      </div>
      <div className='support'>
        <img className='suppimg'src='../src/assets/support.jpg' />
        <h6>24/7 Hour support</h6>
      </div>
    </section>

    <section className='footer'>
      <h1>Featured Products</h1>
      <h3>Summer collections new modern design</h3>
      <div className='product-container'>
        <div className='p1'>
          <img src='../src/assets/t.jpg' className='shirt1'></img>
          <div className='description'>
            <span>Yolo</span>
            <h3>Free-Pk Graphic Tee</h3>
            <div className='star'>
              <i className='fas fa-star' id='s1'></i>
              <i className='fas fa-star' id='s2'></i>
              <i className='fas fa-star' id='s3'></i>
              <i className='fas fa-star' id='s4'></i>
            </div>
            <h4>$40</h4>
          </div>
          <a href='#'><i className='fa-solid fa-cart-shopping'  id='sp'></i></a>
        </div>
        <div className='p1'>
          <img src='../src/assets/f10.jpg' className='shirt1'></img>
          <div className='description'>
            <span>Yolo</span>
            <h3>Free-Pk Graphic Tee</h3>
            <div className='star'>
              <i className='fas fa-star' id='s1'></i>
              <i className='fas fa-star' id='s2'></i>
              <i className='fas fa-star' id='s3'></i>
              <i className='fas fa-star' id='s4'></i>
            </div>
            <h4>$40</h4>
          </div>
          <a href='#'><i className='fa-solid fa-cart-shopping'  id='sp'></i></a>
        </div>
        <div className='p1'>
          <img src='../src/assets/f11.jpg' className='shirt1'></img>
          <div className='description'>
            <span>Yolo</span>
            <h3>Free-Pk Graphic Tee</h3>
            <div className='star'>
              <i className='fas fa-star' id='s1'></i>
              <i className='fas fa-star' id='s2'></i>
              <i className='fas fa-star' id='s3'></i>
              <i className='fas fa-star' id='s4'></i>
            </div>
            <h4>$40</h4>
          </div>
          <a href='#'><i className='fa-solid fa-cart-shopping'  id='sp'></i></a>
        </div>
        <div className='p1'>
          <img src='../src/assets/f12.jpg' className='shirt1'></img>
          <div className='description'>
            <span>Yolo</span>
            <h3>Free-Pk Graphic Tee</h3>
            <div className='star'>
              <i className='fas fa-star' id='s1'></i>
              <i className='fas fa-star' id='s2'></i>
              <i className='fas fa-star' id='s3'></i>
              <i className='fas fa-star' id='s4'></i>
            </div>
            <h4>$40</h4>
          </div>
          <a href='#'><i className='fa-solid fa-cart-shopping'  id='sp'></i></a>
        </div>
        <div className='p1'>
          <img src='../src/assets/f4.jpg' className='shirt1'></img>
          <div className='description'>
            <span>Yolo</span>
            <h3>Free-Pk Graphic Tee</h3>
            <div className='star'>
              <i className='fas fa-star' id='s1'></i>
              <i className='fas fa-star' id='s2'></i>
              <i className='fas fa-star' id='s3'></i>
              <i className='fas fa-star' id='s4'></i>
            </div>
            <h4>$40</h4>
          </div>
          <a href='#'><i className='fa-solid fa-cart-shopping'  id='sp'></i></a>
        </div>
        <div className='p1'>
          <img src='../src/assets/f5.jpg' className='shirt1'></img>
          <div className='description'>
            <span>Yolo</span>
            <h3>Free-Pk Graphic Tee</h3>
            <div className='star'>
              <i className='fas fa-star' id='s1'></i>
              <i className='fas fa-star' id='s2'></i>
              <i className='fas fa-star' id='s3'></i>
              <i className='fas fa-star' id='s4'></i>
            </div>
            <h4>$40</h4>
          </div>
          <a href='#'><i className='fa-solid fa-cart-shopping'  id='sp'></i></a>
        </div>
        <div className='p1'>
          <img src='../src/assets/f6.jpg' className='shirt1'></img>
          <div className='description'>
            <span>Yolo</span>
            <h3>Free-Pk Graphic Tee</h3>
            <div className='star'>
              <i className='fas fa-star' id='s1'></i>
              <i className='fas fa-star' id='s2'></i>
              <i className='fas fa-star' id='s3'></i>
              <i className='fas fa-star' id='s4'></i>
            </div>
            <h4>$40</h4>
          </div>
          <a href='#'><i className='fa-solid fa-cart-shopping'  id='sp'></i></a>
        </div>
        <div className='p1'>
          <img src='../src/assets/f7.jpg' className='shirt1'></img>
          <div className='description'>
            <span>Yolo</span>
            <h3>Free-Pk Graphic Tee</h3>
            <div className='star'>
              <i className='fas fa-star' id='s1'></i>
              <i className='fas fa-star' id='s2'></i>
              <i className='fas fa-star' id='s3'></i>
              <i className='fas fa-star' id='s4'></i>
            </div>
            <h4>$40</h4>
          </div>
          <a href='#'><i className='fa-solid fa-cart-shopping'  id='sp'></i></a>
        </div>
        <div className='p1'>
          <img src='../src/assets/f9.jpg' className='shirt1'></img>
          <div className='description'>
            <span>Yolo</span>
            <h3>Free-Pk Graphic Tee</h3>
            <div className='star'>
              <i className='fas fa-star' id='s1'></i>
              <i className='fas fa-star' id='s2'></i>
              <i className='fas fa-star' id='s3'></i>
              <i className='fas fa-star' id='s4'></i>
            </div>
            <h4>$40</h4>
          </div>
          <a href='#'><i className='fa-solid fa-cart-shopping'  id='sp'></i></a>
        </div>
      </div>
      <section className='promo'>
        <div className='banner'>
          <h2>Repair Sevices</h2>
          <h1>Up to<span>70% Off</span> - All t-Shirts & Accesories</h1>
          <button>Explore More</button>
        </div>
      </section>
      </section>
      <section className='footer'>
      <h1>Featured Products</h1>
      <h3>Summer collections new modern design</h3>

      <div className='product-container'>
        <div className='p1'>
          <img src='../src/assets/v17.jpg' className='shirt1'></img>
          <div className='description'>
            <span>Yolo</span>
            <h3>Free-Pk Graphic Tee</h3>
            <div className='star'>
              <i className='fas fa-star' id='s1'></i>
              <i className='fas fa-star' id='s2'></i>
              <i className='fas fa-star' id='s3'></i>
              <i className='fas fa-star' id='s4'></i>
            </div>
            <h4>$40</h4>
          </div>
          <a href='#'><i className='fa-solid fa-cart-shopping'  id='sp'></i></a>
        </div>
        <div className='p1'>
          <img src='../src/assets/v16.jpg' className='shirt1'></img>
          <div className='description'>
            <span>Yolo</span>
            <h3>Free-Pk Graphic Tee</h3>
            <div className='star'>
              <i className='fas fa-star' id='s1'></i>
              <i className='fas fa-star' id='s2'></i>
              <i className='fas fa-star' id='s3'></i>
              <i className='fas fa-star' id='s4'></i>
            </div>
            <h4>$40</h4>
          </div>
          <a href='#'><i className='fa-solid fa-cart-shopping'  id='sp'></i></a>
        </div>
        <div className='p1'>
          <img src='../src/assets/v15.jpg' className='shirt1'></img>
          <div className='description'>
            <span>Yolo</span>
            <h3>Free-Pk Graphic Tee</h3>
            <div className='star'>
              <i className='fas fa-star' id='s1'></i>
              <i className='fas fa-star' id='s2'></i>
              <i className='fas fa-star' id='s3'></i>
              <i className='fas fa-star' id='s4'></i>
            </div>
            <h4>$40</h4>
          </div>
          <a href='#'><i className='fa-solid fa-cart-shopping'  id='sp'></i></a>
        </div>
        <div className='p1'>
          <img src='../src/assets/v14.jpg' className='shirt1'></img>
          <div className='description'>
            <span>Yolo</span>
            <h3>Free-Pk Graphic Tee</h3>
            <div className='star'>
              <i className='fas fa-star' id='s1'></i>
              <i className='fas fa-star' id='s2'></i>
              <i className='fas fa-star' id='s3'></i>
              <i className='fas fa-star' id='s4'></i>
            </div>
            <h4>$40</h4>
          </div>
          <a href='#'><i className='fa-solid fa-cart-shopping'  id='sp'></i></a>
        </div>
        <div className='p1'>
          <img src='../src/assets/v13.jpg' className='shirt1'></img>
          <div className='description'>
            <span>Yolo</span>
            <h3>Free-Pk Graphic Tee</h3>
            <div className='star'>
              <i className='fas fa-star' id='s1'></i>
              <i className='fas fa-star' id='s2'></i>
              <i className='fas fa-star' id='s3'></i>
              <i className='fas fa-star' id='s4'></i>
            </div>
            <h4>$40</h4>
          </div>
          <a href='#'><i className='fa-solid fa-cart-shopping'  id='sp'></i></a>
        </div>
        <div className='p1'>
          <img src='../src/assets/v6.jpg' className='shirt1'></img>
          <div className='description'>
            <span>Yolo</span>
            <h3>Free-Pk Graphic Tee</h3>
            <div className='star'>
              <i className='fas fa-star' id='s1'></i>
              <i className='fas fa-star' id='s2'></i>
              <i className='fas fa-star' id='s3'></i>
              <i className='fas fa-star' id='s4'></i>
            </div>
            <h4>$40</h4>
          </div>
          <a href='#'><i className='fa-solid fa-cart-shopping'  id='sp'></i></a>
        </div>
        <div className='p1'>
          <img src='../src/assets/test.jpg' className='shirt1'></img>
          <div className='description'>
            <span>Yolo</span>
            <h3>Free-Pk Graphic Tee</h3>
            <div className='star'>
              <i className='fas fa-star' id='s1'></i>
              <i className='fas fa-star' id='s2'></i>
              <i className='fas fa-star' id='s3'></i>
              <i className='fas fa-star' id='s4'></i>
            </div>
            <h4>$40</h4>
          </div>
          <a href='#'><i className='fa-solid fa-cart-shopping'  id='sp'></i></a>
        </div>
        <div className='p1'>
          <img src='../src/assets/v7.jpg' className='shirt1'></img>
          <div className='description'>
            <span>Yolo</span>
            <h3>Free-Pk Graphic Tee</h3>
            <div className='star'>
              <i className='fas fa-star' id='s1'></i>
              <i className='fas fa-star' id='s2'></i>
              <i className='fas fa-star' id='s3'></i>
              <i className='fas fa-star' id='s4'></i>
            </div>
            <h4>$40</h4>
          </div>
          <a href='#'><i className='fa-solid fa-cart-shopping'  id='sp'></i></a>
        </div>
        <div className='p1'>
          <img src='../src/assets/v8.webp' className='shirt1'></img>
          <div className='description'>
            <span>Yolo</span>
            <h3>Free-Pk Graphic Tee</h3>
            <div className='star'>
              <i className='fas fa-star' id='s1'></i>
              <i className='fas fa-star' id='s2'></i>
              <i className='fas fa-star' id='s3'></i>
              <i className='fas fa-star' id='s4'></i>
            </div>
            <h4>$40</h4>
          </div>
          <a href='#'><i className='fa-solid fa-cart-shopping'  id='sp'></i></a>
        </div>
      </div>
      </section>
      <section className='adbox'>
        <div className='ads'>
          <div className='ad1'>
            <h3>Crazy deals</h3>
            <h1>Buy 1 get 1 Free</h1>
            <p>Get the best deals on us</p>
            <button>Learn More</button>
          </div>
          <div className='ad2'>
            <h3>Spring/Summer</h3>
            <h1>Upcomming season</h1>
            <p>The best choices on trendy clothing</p>
            <button>Collection</button>
          </div>
          <div className='ad3'>
            <h1>SEASON SALE</h1>
            <h3>Winter Collection 50% off</h3>
          </div>
          <div className='ad4'>
            <h1>New Footware collection</h1>
            <h3>Spring/Summer 2022</h3>
          </div>
          <div className='ad5'>
            <h1>T-shirts</h1>
            <h3>New Trendy Fashion</h3>
          </div>
          <div className='ad6'>
            <h1>T-shirts</h1>
            <h3>New Trendy Fashion</h3>
          </div>
        </div>
      </section>
      <section>
        <div className='signup'>
          <h1>Sign Up For Newsletters</h1>
          <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
          <input type="text" required placeholder='Enter your E-mail' />
          <button>Sign Up</button>
        </div>
      </section>

      <section className='moreinfo'>
        <div className='infocontainer'>
          <img src={logo} width={50} height={50}></img>
          <h4>Contact</h4>
          <p><strong>Adress:</strong> 123 mademedly Lanes street San Diego</p>
          <p><strong>Phone: </strong>302-510-6607</p>
          <p><strong>Hour:</strong> 6:00am - 5pm Mon- Sat</p>
          <div className='icons'>
            <h5>Follow Us </h5>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-tiktok"></i>
          </div>
        </div>
        <div className='about'>
            <h5>About</h5>
            <a href='aboutus'><p>About us</p></a>
            <a href='dinfo'><p>Delivery information</p></a>
            <a href='privacy'><p>Privacy Policy</p></a>
            <a href='privacy'><p>Terms & Conditions</p></a>
            <a href='contact'><p>Contact Us</p></a>
          </div>
          <div className='account'>
            <h5>My Account</h5>
            <a href='aboutus'><p>Sign up</p></a>
            <a href='dinfo'><p>Veiw cart</p></a>
            <a href='privacy'><p>My Wishlist</p></a>
            <a href='privacy'><p>Track My Order</p></a>
            <a href='contact'><p>Help</p></a>
          </div>
          <div className='install'>
            <h5>Install App</h5>
            <p>Apple Store or Google Play</p>
            <div className='downloadbuttons'>
             <button>
              <i className="fa-brands fa-apple"></i>
              <p>Download in Playstore</p>
              <h3>App Store</h3>
              </button>
              <button>
              <i className="fa-brands fa-google-play"></i>
              <h3>Google play</h3>
              </button>
            </div>
            <p>Secure Payment</p>
            <div className='cards'>
              <i className="fa-brands fa-cc-visa"></i>
              <i className="fa-brands fa-cc-mastercard"></i>
              <i className="fa-brands fa-cc-apple-pay"></i>
              <i className="fa-brands fa-cc-discover"></i>
            </div>
          </div>
      </section>
      <div className='pagebottom'>
            <p>@2023 Task 2 HTML CSS Ecommers</p>
          </div>
    </>
  )
}

export default App
