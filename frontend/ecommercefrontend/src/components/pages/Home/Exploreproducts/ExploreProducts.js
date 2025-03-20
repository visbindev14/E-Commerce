import ourProducts from '../../../../assets/images/Frame 619.png'
import {Typography} from '@mui/material';
function ExploreProducts(){
    return(
        <>
            <div>
                <img src={ourProducts}></img>
            </div>
            <div className='pt-4'>
                <Typography gutterBottom variant="h4">
                    Explore Our Products
                </Typography>
            </div>
        </>
    )
}

export default ExploreProducts