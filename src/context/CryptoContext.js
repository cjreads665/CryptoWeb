import React from 'react'

import {createContext} from 'react'

//context
const Crypto = createContext()

const CryptoContext = ({children}) => {
	return (
		<Crypto.Provider>
			{children}
		</Crypto.Provider>
	)
}

export default CryptoContext