import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';
import deneme from './pages/deneme';


function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
         <Dashboard/>
         <deneme/>
      </Container>    
    </div>
  );
}

export default App;
