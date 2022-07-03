import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import Carro from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarroContextProvider } from './context/CartContext'
import Thankyou from './components/Thankyou/Thankyou';


function App() {
  return (
    <div className="App">
        <CarroContextProvider>
          <BrowserRouter>
          <header className="App-header">
            <NavBar/>
          </header>
              <Routes>
                <Route path='/' element={<ItemListContainer />} /> 
                <Route path='/item/:id' element={<ItemDetailContainer />} /> 
                <Route path='/category/:catId' element={<ItemListContainer />} /> 
                <Route path='/cart' element={<Carro />}/>
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/thankyou' element={<Thankyou />} />
                <Route path='*' element={<h1>Ruta no encontrada.</h1>} />

              </Routes>
          </BrowserRouter>
        </CarroContextProvider>
        <Footer />
    </div>
  );
}

export default App;
