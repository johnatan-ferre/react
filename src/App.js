
import './App.css';
import NavBar from './components/NavBar/NavBar'
// import CountFunction from './components/CountFunction/CountFunction';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <CountFunction/> */}
        {/* <ItemListContainer/> */}
        {/* <ItemDetailContainer/> */}
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} /> 
          <Route path='/item/:id' element={<ItemDetailContainer />} /> 
          <Route path='/category/:catId' element={<ItemListContainer />} /> 
          <Route path='*' element={<h1>Ruta no encontrada.</h1>} />  
          <Route />  
        </Routes>
        </BrowserRouter>

          <p>
          Gracias por su visita. Vuelva pronto. 
          </p>
        
      </header>
    </div>
  );
}

export default App;
