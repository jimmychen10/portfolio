import './App.css';
import Navigation from "./Components/Navigation.js"
import Main from "./Pages/Main.js"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Main/>
    </div>
  );
}

export default App;
