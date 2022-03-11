import React from 'react'
import {AppBar,ToolBar,Container,Typography,createTheme,MenuItem,ThemeProvider,Select} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {CryptoState} from '../context/CryptoContext'

export default function Header() {
const {currency, setCurrency} = CryptoState()
const darkTheme = createTheme({
  typography: {
    subtitle1: {
    fontFamily:"'Poppins', sans-serif",
      fontSize: 30,
      fontWeight:'bold',
      cursor: 'pointer',
      color:'gold',
    },
    
},
		palette: {
    mode: 'dark',
  },
});

const navigate = useNavigate()

	return (
		<ThemeProvider theme={darkTheme}>
		<AppBar color='transparent' position='static' sx={{p:1}}>
	{/*container makes the navbar responsive*/}
		<Container sx={{display : 'flex', justifyContent :'space-between'}}>
		<Typography onClick={()=>navigate('/')} sx={{ m: 1 }} variant="subtitle1">
		CryptoWeb
		</Typography>
	{/*this is the select menu option*/}
		<Select variant='outlined' defaultValue={`INR`} sx={{height:'20%', mt:1}}
		onChange={(e)=>setCurrency(e.target.value)}
		>
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