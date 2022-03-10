import React from 'react'

import {createContext, useContext, useState} from 'react'

//context
const Crypto = createContext()

const CryptoContext = ({children}) => {
	const [currency, setCurrency] = useState('INR')
	const [symbol, setSymbol] = useState('₹')
	return (
		<Crypto.Provider>
			{children}
		</Crypto.Provider>
	)
}

export default CryptoContext
export const CryptoState = ()=>{
	return useContext(Crypto)
}