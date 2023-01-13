import Controller from '../Components/Layouts/Controller';
import './App.css';



function App() {

  return (
    <div className="App">

      <Controller>
        <Controller.Div p={2} fontSize={45}>
          text
        </Controller.Div>
        <Controller.Input />
        <br />
        <Controller.Button>
          click for show alert
        </Controller.Button>
      </Controller>



    </div>
  );
}

export default App;
