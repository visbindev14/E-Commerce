import styles from './Utils.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import React, { useState, useEffect } from "react"
import Rating from '@mui/material/Rating';

function ProductCard(props){

    const [likedItems, setLikedItems] = useState([]);

    
    function handleFavClick(index){
        setLikedItems((prev) =>{
            console.log(index, prev)
            return prev.includes(index)
            ? prev.filter((i) => i !== index)  
            : [...prev, index]
        });
        
    };
    return(
        <div className={styles.outerrectangle}>
            {props.Products.map((Product, index)=>{
                return(
                    <div>
                        <div className={styles.whitesmokerectangle}>
                            <img src={Product.productImage} alt='image1'></img>
                            <FavoriteIcon className={styles.heartIcon}  sx={{ color: likedItems.includes(Product.id) ? pink[500] : '#ffffff'}} onClick={() => handleFavClick(Product.id)}/>
                            <span>Add to Cart</span>
                        </div>
                        
                        <div className={styles.productnamepricerating}>
                            <span>{Product.productName}</span>
                            <span>{Product.productPrice}</span>
                            <div className="d-flex gap-2">
                                <Rating name="half-rating-read" defaultValue={Product.rating} precision={0.5} readOnly />
                                <span>({Product.numberRating})</span>
                            </div>
                            
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductCard