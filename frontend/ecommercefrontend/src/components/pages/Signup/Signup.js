import './Signup.css';
import Loginpage from '../../../assets/images/Reg Side Image.png';
import Googleicon from '../../../assets/icons/Icon-Google.png';
import {FormControl,InputLabel,Input,Typography,TextField,Button,Box} from '@mui/material';
import { Link, NavLink } from "react-router-dom";

function Signup(){
    return (
        <>
            <div className="row">
                <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center py-5">
                    <img src={Loginpage} alt="login" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div className='col-lg-6 col-md-12 px-large  d-flex flex-column justify-content-center'>
                    <Box sx={{ width: {lg: '70%', md: '100%'} }}>
                        <Typography gutterBottom className='custom-h3'>
                            Create an account
                        </Typography>
                        <Typography variant="subtitle2" sx={{ mb: 5, pb:3 }}>
                            Enter your details below
                        </Typography>
                        <form>
                            <FormControl fullWidth sx={{ mb: 3 }} required>
                                <TextField id="name-register" label="Name" type="text" variant="standard"  />
                            </FormControl>
                            <FormControl fullWidth sx={{ mb: 3 }} required>
                                <TextField id="email-register" label="Email" type="email" variant="standard"  />
                            </FormControl>

                            <FormControl fullWidth sx={{ mb: 3 }} required>
                                <TextField id="password-register" label="Password" type="password" variant="standard" />
                            </FormControl>
                        </form>
                        <div className="">
                            <Button fullWidth color="error" variant="contained" size="medium" sx={{ mr: 'auto', mb:'15px'}}>
                                Create Account
                            </Button>
                            <Button fullWidth color="white" variant="contained" size="medium" sx={{ mr: 'auto' }} startIcon={<img src={Googleicon} alt="icon" style={{ width: 24, height: 24 }} />}>
                                Sign up with Google
                            </Button>
                        </div>

                        <Typography variant="subtitle2" sx={{ pt:3 }} className='text-center'>
                            Already have Account? &nbsp; <NavLink to="/login">Log In</NavLink>
                        </Typography>
                        
                    </Box>
                </div>
                
            </div>
        </>
    );
}

export default Signup