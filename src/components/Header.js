import React from 'react'
import {AppBar,ToolBar,Container,Typography,createTheme,MenuItem,ThemeProvider,Select} from '@mui/material';
import {useHistory} from 'react-router-dom'
export default function Header() {
const theme = createTheme({
  typography: {

    subtitle1: {
    fontFamily:"'Poppins', sans-serif",
      fontSize: 20,
      fontWeight:'bold',
      cursor: 'pointer',
      flex:1,
      color:'gold'
    },
    darkTheme:{
    	primary:{
    		main: '#fff',

    	},type:'dark'
    }
  },
});
	return (
		<ThemeProvider theme={theme}>
		<AppBar color='transparent' position='static' variant='darkTheme'>
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