import './Footer.css'
import Qrcode from '../../../assets/images/Qr Code.png';
import googlePlay from '../../../assets/images/GooglePlay.png';
import appStore from '../../../assets/images/AppStore.png';
import facebook from '../../../assets/images/Icon-Facebook.png'
import instagram from '../../../assets/images/icon-instagram.png'
import twitter from '../../../assets/images/Icon-Twitter.png'
import linkedin from '../../../assets/images/Icon-Linkedin.png'

function Footer(){
    return(
        <>
            <div className="footer">
                <div className='container'>
                    <div className='footer-section1'>
                        <h4>Exclusive</h4>
                        <h6>Subscribe</h6>
                        <p>Get 10% off your first order</p>
                        <input className='footer-icon footer-input' placeholder='Enter your email'></input>
                    </div>
                    <div className='footer-section2'>
                        <h6>Support</h6>
                        <p>111 Bijoy sarani, Dhaka, <br></br>DH 1515, Bangladesh.</p>
                        <p>exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>
                    <div className='footer-section3'>
                        <h6>Account</h6>
                        <p>My Account</p>
                        <p>Login / Register</p>
                        <p>Cart</p>
                        <p>Wishlist</p>
                        <p>Shop</p>
                    </div>
                    <div className='footer-section4'>
                        <h6>Account</h6>
                        <p>Privacy Policy</p>
                        <p>Terms Of Use</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>
                    <div className='footer-section5'>
                        <h6>Download App</h6>
                        <div className='d-flex gap-2 mt-3'>
                            <div>
                                <img src={Qrcode} width="60px" height="60px" alt="QR Code"></img>
                            </div>
                            <div className='col'>
                                <div className='row'>
                                    <img src={googlePlay} width="105px" height="31px" alt="Googleplay"></img>
                                </div>
                                <div className='row'>
                                    <img src={appStore} width="105px" height="31px" alt="Playstore"></img>
                                </div>
                            </div>
                        </div> 
                        <div className='d-flex gap-3 mt-2'>
                            <div>
                                <a href='/facebook'><img src={facebook} alt='facebook' width="22px" height="22px"></img></a>
                            </div>
                            <div>
                                <a href='/instgram'><img src={instagram} alt='instagram' width="22px" height="22px"></img></a>
                            </div>
                            <div>
                                <a href='/twitter'><img src={twitter} alt='twitter' width="22px" height="22px"></img></a>
                            </div>
                            <div>
                                <a href='/linkedin'><img src={linkedin} alt='linkedin' width="22px" height="22px"></img></a>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </>
    )
}


export default Footer