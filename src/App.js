
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Carro from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarroContextProvider } from './context/CartContext'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CarroContextProvider>
          <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer />} /> 
                <Route path='/item/:id' element={<ItemDetailContainer />} /> 
                <Route path='/category/:catId' element={<ItemListContainer />} /> 
                <Route path='/cart' element={<Carro/>}/>
                <Route path='*' element={<h1>Ruta no encontrada.</h1>} />  
                  
              </Routes>
          </BrowserRouter>
          </CarroContextProvider>
          
          <p>
          Gracias por su visita. Vuelva pronto. 
          </p>
        
      </header>
    </div>
  );
}

export default App;
