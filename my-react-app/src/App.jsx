import "./App.css";
import Main from "./Components/Main";
import { data } from "./Data/myDetails";

const mainBlock = data.map(({ id, name, age }) => (
  <Main key={id} id={id} name={name} age={age} />
));

function App() {
  return (
    <div className="main__container">
      <div>
        AUK
        <h1>Hiiii</h1>
      </div>
        <p>Nadun</p>
      <div
      className="mainBlock__container"
      >{mainBlock}</div>
    </div>
  );
}

export default App;
