import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// import * as React from 'react';

// import '../../src/style.css';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import IconButton from '@mui/material/IconButton';

// import AccountCircle from '@mui/icons-material/AccountCircle';
// // import { render } from '@testing-library/react';
// // const [values, setValues] = ReactuseState({
// //     amount: '',
// //     password: '',
// //     weight: '',
// //     weightRange: '',
// //     showPassword: false,
// // });
// function BasicTextFields() {
//     return (
//         <Box
//             component='form'
//             sx={{
//                 '& > :not(style)': { m: 1, width: '25ch' },
//             }}
//             noValidate
//             autoComplete='off'
//         >
//             <TextField id='outlined-basic' label='Google' variant='outlined' />
//             {/* <TextField id='filled-basic' label='Filled' variant='filled' /> */}
//             {/* <TextField
//                 id='standard-basic'
//                 label='Standard'
//                 variant='standard'
//             /> */}
//         </Box>
//     );
// }
// // export default
// function InputWithIcon() {
//     return (
//         <Box sx={{ '& > :not(style)': { m: 1 } }}>
//             <FormControl variant='standard'>
//                 <InputLabel htmlFor='input-with-icon-adornment'>
//                     With a start adornment
//                 </InputLabel>
//                 <Input
//                     id='input-with-icon-adornment'
//                     startAdornment={
//                         <InputAdornment position='start'>
//                             <AccountCircle />
//                         </InputAdornment>
//                     }
//                 />
//             </FormControl>
//         </Box>
//     );
// }
// function PAssrd() {
//     // const [password, setPassword] = useState('');
//     const [passwordVisible, setPasswordVisible] = useState(false);
//     // const [value, setValue] = useState('');

//     // render(){
//     return (
//         <FormControl sx={{ m: 1, width: '25ch' }} className='standard'>
//             {/* <InputLabel htmlFor='standard-adornment-password'>
//                 Password
//             </InputLabel> */}
//             <Input
//                 placeholder='Password'
//                 id='standard-adornment-password'
//                 type={passwordVisible ? 'text' : 'password'}
//                 endAdornment={
//                     <InputAdornment position='end'>
//                         <IconButton
//                             onClick={() => setPasswordVisible(!passwordVisible)}
//                         >
//                             {passwordVisible ? (
//                                 <VisibilityOff />
//                             ) : (
//                                 <Visibility />
//                             )}
//                         </IconButton>
//                     </InputAdornment>
//                 }
//             />
//         </FormControl>
//     );
// }
// // }
// // export default BasicTextFields;
// const navigate = useNavigate();

function Footer() {
    let navigate = useNavigate();
    function Gohome() {
        // const navigate = useNavigate();
        navigate('/Home');
    }

    return (
        <div className='footer'>
            <h1 className='fot'>This is Footer </h1>
            <h1 className='fo'>This is react lifecycle </h1>

            {/* <BasicTextFields />
                <InputWithIcon />
                <PAssrd /> */}
            <Link id='link' to='/Home'>
                Go to Home
            </Link>
            <br />
            <Link id='link' to='/'>
                Go to Main
            </Link>
            <br />
            <Link id='link' to='/life'>
                Go to Life
            </Link>
            <br></br>
            <button onClick={Gohome}>Go to Home</button>
        </div>
    );
}

export { Footer };
