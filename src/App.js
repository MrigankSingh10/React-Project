import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import Resume from "./components/Resume";
import FunctionEvent from "./components/FunctionEvent";
import ClassEvent from "./components/ClassEvent";
import FunctionalComponent from "./components/FunctionalCounter";
import CondionalCompont from "./components/ConditionalComponent";
import Product from "./components/Product";
import Form from "./components/Form";
import Todo from "./components/Todo";
import InlineComponent from "./components/InlineComponent";
import StyleSheetComponent from "./components/StyleSheetComponent";
import ModuleComponent from "./components/ModuleComponent";
function App() {
  return (
    <div className="App">
      {/* <Hello/> */}
      {/* <Message messageContent="This is the message from props  " /> */}
      {/* <Profile name="Mrigank" lastname="Singh">
        <h3>This is the children h1</h3>
      </Profile> */}
      {/* <Counter> </Counter> */}
      {/* <Resume name="Mrigank "></Resume> */}
      {/* <FunctionEvent></FunctionEvent> */}
      {/* <ClassEvent> </ClassEvent> */}
      {/* <FunctionalComponent></FunctionalComponent> */}
      {/* <CondionalCompont></CondionalCompont> */}
      {/* <Product> </Product> */}
      {/* <Form></Form> */}
      {/* <Todo></Todo> */}
      {/* <InlineComponent></InlineComponent> */}
      {/* <StyleSheetComponent> </StyleSheetComponent> */}
      <ModuleComponent></ModuleComponent>
    </div>
  );
}

export default App;
