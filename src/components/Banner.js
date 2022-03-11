import React from 'react'
import {makeStyles} from '@mui/styles'

//this is used fo making custom CSS
const useStyles=makeStyles(()=>({
	banner:{
		backgroundImage :"url(../images/bg.jpg)"
	}	
}))

function Banner() {
	const classes = useStyles()
	return (
		<div className={classes.banner}>  
			
		</div>
	)
}

export default Banner