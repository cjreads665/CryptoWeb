import React from 'react'
import { createTheme, ThemeProvider, Box, Typography} from '@mui/material';
import Carousal from './Carousal'
//this is used fo making custom CSS
/*
put a picture in the component

*/

const theme = createTheme()



function Banner() {
	return (
		<ThemeProvider theme={theme}>
		<Box sx={{
			display:'flex',
			flexDirection: 'column',
			height :'20vh',
			paddingBottom : '1rem',
			width:'100%',
			backgroundImage: 'url(https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)',
			backgroundPosition : 'center center',
			justifyContent: 'center',
			alignItems : 'center',
			backdropFilter: 'blur',
			[theme.breakpoints.down('md')]: {
      		height: '15vh'
    },
		}}> 
		<Typography sx={{
			height: '20vh',
			display:'flex',
			alignItems: 'center',
			fontSize : '3rem',
			fontWeight: '800',
		}}>CryptoWeb
		</Typography> 
		<Typography sx={{
			color: '#d6c8c7',
		}}>
			Track your Crypto Holdings for FREE
		</Typography>
		</Box>
		<Carousal/>
		</ThemeProvider>
	)
}

export default Banner