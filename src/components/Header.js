import React from 'react'
import {AppBar,ToolBar,Container,Typography,createTheme,MenuItem,ThemeProvider,Select} from '@mui/material';
import {useHistory} from 'react-router-dom'
export default function Header() {
const darkTheme = createTheme({
  typography: {
    subtitle1: {
    fontFamily:"'Poppins', sans-serif",
      fontSize: 20,
      fontWeight:'bold',
      cursor: 'pointer',
      color:'gold',
    },
    
},
		palette: {
    mode: 'dark',
  },
});
	return (
		<ThemeProvider theme={darkTheme}>
		<AppBar color='transparent' position='static'>
	{/*container makes the navbar responsive*/}
		<Container sx={{display : 'flex', justifyContent :'space-between'}}>
		<Typography sx={{ m: 1 }} variant="subtitle1">
		CryptoWeb
		</Typography>
	{/*this is the select menu option*/}
		<Select variant='outlined' defaultValue={`INR`}>
			<MenuItem value={'INR'}>
				INR
			</MenuItem>
			<MenuItem value={'USD'}>
				USD
			</MenuItem>
		</Select>
		</Container>
		</AppBar>	
		</ThemeProvider>
		

				)
}