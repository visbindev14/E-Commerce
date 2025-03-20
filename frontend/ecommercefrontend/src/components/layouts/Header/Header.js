import './Header.css';
import logo from '../../../assets/images/Logo.png';
import wishlist from '../../../assets/images/Wishlist.png';
import cart from '../../../assets/images/Cart1.png';
import { Link, NavLink } from "react-router-dom";



function Header(){
    return(
        <>
            <div className="top">
                <div className='container'>
                    <div></div>
                    <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        &nbsp;<a href="/shop"><b>ShopNow</b></a>
                    </span>
                    <div className='language-select'>
                        <span>English</span>
                    </div>
                </div>
                
            </div>
            <div className='header'>
                <div className='container'>
                    <div className='logo'>
                        <img src={logo} height="30px" alt="Logo"></img>
                    </div>
                    <div className='header-nav'>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li>Contact</li>
                            <li>About</li>
                            <li>
                                <NavLink to="/signup">Signup</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='header-right'>
                            <input className='icon header-input' placeholder='What are you looking for?'></input>
                            <img src={wishlist} width='30px' height='30px' alt="wishlist"></img>
                            <img src={cart} width='30px' height='30px' alt="cart"></img>
                        </div>
                    </div>
                </div>
            </div>

        </>
        
    )
}


export default Header