import styles from './Home.module.css';
import Flashsales from './Flashsales/Flashsales';
import BestSellingProducts from './Bestselling/Bestselling'
import ExploreProducts from './Exploreproducts/ExploreProducts'
import { Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import offerBanner1 from '../../../assets/images/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg';
import offerBanner2 from '../../../assets/images/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg';
import offerBanner3 from '../../../assets/images/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg';
import featured from '../../../assets/images/Frame 619.png'
import Carousel from 'react-material-ui-carousel'
import { Link } from "react-router-dom";
import {Typography} from '@mui/material';




function Home(){
    let categories = [{
                        "Women's Fashion": [
                            "Women's Indian Clothing",
                            "Women's Western Wear",
                            "Women's Sportswear",
                            "Women's Lingerie",
                            "Women's Sleep & Lounge Wear",
                            "Women's Accessories",
                            "Women's Swim & Beachwear",
                            "Maternity Clothing",
                            "Women's Sunglasses & Spectacle Frames",
                            "Women's Lingerie & Nightwear"
                        ]},
                        {"Men's Fashion": [
                            "Men's T-shirts, Polos & Shirts",
                            "Men's Jeans",
                            "Men's Pants",
                            "Men's Shorts",
                            "Men's Suits & Blazers",
                            "Men's Sportswear",
                            "Men's Innerwear",
                            "Men's Sleep & Lounge Wear",
                            "Men's Accessories",
                            "Men's Indian Clothing",
                            "Men's Swimwear",
                            "Men's Rainwear",
                            "Men's Unstitched Fabric",
                            "Men's Sunglasses & Spectacle Frames",
                            "Men's Overalls",
                            "Men's Winter Wear"
                        ]},
                        {"Electronics": [
                            "Accessories",
                            "Cameras & Photography",
                            "Car & Vehicle Electronics",
                            "Computers & Accessories",
                            "GPS & Accessories",
                            "Home Audio",
                            "Home Theater, TV & Video",
                            "Mobiles & Accessories",
                            "Portable Media Players",
                            "Radio Communication",
                            "Tablets",
                            "Telephones & Accessories",
                            "Electronic Equipment Warranties",
                            "eBook Readers & Accessories",
                            "Wearable Technology",
                            "General Purpose Batteries & Battery Chargers",
                            "Headphones, Earbuds & Accessories",
                            "Power Accessories"
                        ]},
                        {"Home & Lifestyle": []},
                        {"Medicine": []},
                        {"Sports & Outdoor": [
                            "Sports & Fitness",
                            "Cricket",
                            "Badminton",
                            "Cycling",
                            "Football",
                            "Running",
                            "Camping & Hiking",
                            "Fitness Accessories",
                            "Yoga",
                            "Strength Training",
                            "Cardio Equipment",
                            "Sports Collectibles",
                            "Refurbished & Open Box",
                            "All Exercise & Fitness",
                            "All Sports, Fitness & Outdoors"
                        ]},
                        {"Baby's & Toys": [
                            "Pie charts",
                            "Graphs",
                            "Line chart"
                        ]},
                        {"Groceries & Pets": [
                            "Pie charts",
                            "Graphs",
                            "Line chart"
                        ]},
                        {"Health & Beauty": [
                            "Pie charts",
                            "Graphs",
                            "Line chart"
                        ]}
                    ];


 
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <Sidebar>
                            <Menu>
                            {categories.map((category, index) => {
                                const categoryName = Object.keys(category)[0]; 
                                const subcategories = category[categoryName]; 
                                return (
                                    <SubMenu key={index} label={categoryName}>
                                        {subcategories.map((subcategory, subIndex) => (
                                            <MenuItem key={`${categoryName}-${subcategory}`}>
                                                <Link to={`/category/${categoryName.replace(/\s+/g, '-')}/${subcategory.replace(/\s+/g, '-')}`}>
                                                    {subcategory}
                                                </Link>
                                            </MenuItem>
                                            
                                        ))}
                                    </SubMenu>
                                    
                                );
                            })}
                            </Menu>
                        </Sidebar>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12 mt-4">
                        <Carousel autoPlay interval={3000}>
                            <img style={{ width: '100%', height: '350px' }} src={offerBanner1}></img>
                            <img style={{ width: '100%', height: '350px' }} src={offerBanner2}></img>
                            <img style={{ width: '100%', height: '350px' }} src={offerBanner3}></img>
                        </Carousel>
                        
                    </div>
                </div>
                <div className="row pb-5">
                    <Flashsales /> 
                </div>
                <div className="row pb-5">
                    <BestSellingProducts />
                </div>
                <div className="row pb-5">
                    <ExploreProducts />   
                </div>
                <div className="row pb-5">
                    <div>
                        <img src={featured}></img>
                    </div>
                    <div className='pt-4'>
                        <Typography gutterBottom variant="h4">
                            New Arrival
                        </Typography>
                    </div>
                    
                </div>

            </div>
            
        </>
    )
}

export default Home