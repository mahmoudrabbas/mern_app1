import './App.css';
import Employees from './components/Employees';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h2>CRUD operation</h2>
      <Form />
      <Employees />
    </div>
  );
}

export default App;
