
import './App.css';
import NavBar from './components/NavBar/NavBar'
// import CountFunction from './components/CountFunction/CountFunction';
import ItemListContainer from './components/ItemListCotainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        {/* <CountFunction/> */}
        <ItemListContainer greeting='Aloha'/>
        <p>
          Bienvenidos a esta página.
        </p>
          Compre cuanto pueda
        
      </header>
    </div>
  );
}

export default App;
