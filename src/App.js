import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CoinPage from './pages/CoinPage'
import {makeStyles} from '@mui/styles'
import CryptoState from './context/CryptoContext'
function App() {
  const useStyles = makeStyles(()=>({
    App:{
      backgroundColor:'#14161a',
      color: 'white',
      minHeight: '100vh'
    }
  }))
  const classes = useStyles()
  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header/>
    <Routes>
    <Route path='/' element={<HomePage/>} exact></Route>
    <Route path='/coins/:id' element={<CoinPage/>}></Route>  
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
