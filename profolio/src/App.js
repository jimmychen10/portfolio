import './App.css';
import Navigation from "./Components/Navigation.js"
import Main from "./Pages/Main.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Animation from "./Components/Animation"
import Ball from "./Components/Ball.js"

function App() {

  const balls = []
  for (var i=0; i<50; i++){
    var x =  Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var dx = (Math.random()  - 0.5) *2;
    var dy = (Math.random()  - 0.5) *2;
    var colors = ["153, 247, 255","170, 255, 153","252, 255, 153","255, 153, 153"]
    var pick_color=Math.floor(Math.random() * 4);   ;
    balls.push(new Ball( x ,y, dx, dy, colors[pick_color]))
  }
  
  return (
    
    <div className="App">
    <div className = "animation">
      <Animation balls = {balls}/>
    </div>
      <Navigation/>
      <Main />
    </div>
  );
}

export default App;
