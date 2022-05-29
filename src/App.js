
import './App.css';
import NavBar from './components/NavBar/NavBar'
// import CountFunction from './components/CountFunction/CountFunction';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        {/* <CountFunction/> */}
        <ItemListContainer/>
        <ItemDetailContainer/>
        <p>
          Gracias por su visita. Vuelva pronto.
          </p>
        
      </header>
    </div>
  );
}

export default App;
