import React, { useState } from "react";
import ProductCard from '../../../../Utils/Utils'
import videoControler from '../../../../assets/images/Frame 611.png';
import keyBoard from '../../../../assets/images/ak-900-01-500x500 1.png';
import Monitor from '../../../../assets/images/g27cq4-500x500 1.png';
import Chair from '../../../../assets/images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png';
import {Typography, Button} from '@mui/material';
import today from '../../../../assets/images/Frame 625.png'

function Flashsales(){

    const flashProducts = [
        {
            'id':1,
            'productName':"HAVIT HV-G92 Gamepad",
            'productPrice':"$120",
            'productImage':videoControler,
            'rating':3.5,
            'numberRating':78
        },
        {
            'id':2,
            'productName':"HAVIT HV-G92 Gamepad",
            'productPrice':"$130",
            'productImage':keyBoard,
            'rating':4,
            'numberRating':87
        },
        {
            'id':3,
            'productName':"HAVIT HV-G92 Gamepad",
            'productPrice':"$140",
            'productImage':Monitor,
            'rating':5,
            'numberRating':45
        },
        {
            'id':4,
            'productName':"HAVIT HV-G92 Gamepad",
            'productPrice':"$150",
            'productImage':Chair,
            'rating':4.5,
            'numberRating':102
        },
        {
            'id':5,
            'productName':"HAVIT HV-G92 Gamepad",
            'productPrice':"$160",
            'productImage':videoControler,
            'rating':2,
            'numberRating':12
        },

]
    return(
        <>
        <div>
            <img src={today}></img>
        </div>
        <div className='d-flex align-items-center justify-content-between pt-4'>
            <Typography gutterBottom variant="h4">
                Flash Sales
            </Typography>
            <div>
                <Button color="error" variant="contained" size="medium" sx={{ mr: 'auto' }}>
                    View All Products
                </Button>
            </div>
        </div>
        <div className='pt-4'> 
            <ProductCard Products={flashProducts}/>
        </div>
        </>
        
        )
      

}



export default Flashsales