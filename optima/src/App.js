import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
     <h1> Optima concessionaria </h1> 
     <Link to='/landingpage'>landingpage</Link>   <br></br>
     <Link to='/login'>login</Link>   <br></br>
     <Link to='/pagecarros'>pagecarros</Link>  <br></br>
     <Link to='/cadastrocarro'>cadastrocarro</Link>   <br></br> 

    </div>
  );
}

export default App;
