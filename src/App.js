import "./App.css";
import SignUp from "./Components/Authentication/SignUp";
import Login from "./Components/Authentication/Login";
import FinalComp from "./Components/UserInput/FinalComp";

function App() {
  return (
    <div className="App">
      <Login />
      <SignUp />
      <FinalComp />
    </div>
  );
}

export default App;
