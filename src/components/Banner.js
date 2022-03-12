import React from 'react'
import {makeStyles} from '@mui/styles'
import { createTheme, ThemeProvider, Box} from '@mui/material';
//this is used fo making custom CSS
/*
put a picture in the component

*/

const theme = createTheme()



function Banner() {
	const styles = theme =>({

	})
	return (
		<ThemeProvider theme={theme}>
		<Box sx={{
			display:'flex',
			height :'10vh',
			width:'100%',
			backgroundImage: 'url(https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)',

		}}>  
		</Box>
		</ThemeProvider>
	)
}

export default Banner