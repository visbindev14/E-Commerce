import '../common.css';
import Loginpage from '../../../assets/images/Reg Side Image.png';
import {FormControl,InputLabel,Input,Typography,TextField,Button,Box} from '@mui/material';



function Login() {
    return (
        <>
            <div className="row">
                <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center py-5">
                    <img src={Loginpage} alt="login" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div className='col-lg-6 col-md-12 px-large  d-flex flex-column justify-content-center'>
                    <Box sx={{ width: {lg: '70%', md: '100%'} }}>
                        <Typography gutterBottom className='custom-h3'>
                            Log in to Exclusive
                        </Typography>
                        <Typography variant="subtitle2" sx={{ mb: 5, pb:3 }} className='subtitle2'>
                            Enter your details below
                        </Typography>
                        <form>
                            <FormControl fullWidth sx={{ mb: 3 }} required>
                                <TextField id="email" label="Email or Phone Number" type="email" variant="standard"  />
                            </FormControl>

                            <FormControl fullWidth sx={{ mb: 3 }} required>
                                <TextField id="password" label="Password" type="password" variant="standard" />
                            </FormControl>
                        </form>
                            

                        <div className="d-flex align-items-center">
                            <Button color="error" variant="contained" size="medium" sx={{ mr: 'auto' }}>
                                Log In
                            </Button>
                            <Typography variant="caption" color="error">
                                Forget Password?
                            </Typography>
                        </div>
                    </Box>
                </div>
                
            </div>
        </>
    );
}

export default Login