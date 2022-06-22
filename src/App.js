import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeCompontent from './components/ListEmployeeCompontent';
import HeaderCompontent from './components/HeaderCompontent';
import FooterCompontent from './components/FooterCompontent';
import CreateEmployeeCompontent from './components/CreateEmployeeCompontent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeCompontents from './components/ViewEmployeeCompontents';


function App() {

  return (
    <div>
      <Router>
          <HeaderCompontent/>
          <div className="container">
            <Routes>
              <Route path="/" exact element ={<ListEmployeeCompontent/>}></Route>
              <Route path="/employee" exact element ={<ListEmployeeCompontent/>}></Route>
              <Route path="/add-employee" exact element ={<CreateEmployeeCompontent/>}></Route>
              <Route path="/update-employee/:id" exact element ={<UpdateEmployeeComponent/>}></Route>
              <Route path="/view-employee/:id" exact element ={<ViewEmployeeCompontents/>}></Route>
            </Routes>
          </div>
          <FooterCompontent/>
      </Router>
    </div>
  );
}

export default App;
