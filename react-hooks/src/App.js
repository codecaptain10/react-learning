import "./App.css";
import UseStateHook from "./hooks/UseState/UseStateHook";
import UseRefHook from "./hooks/UseRef/UseRefHook";
import UseReducerHook from "./hooks/UseReducer/UseReducerHook";
import UseMemoHook from "./hooks/UseMemo/UseMemoHook";
import UseLayoutEffectHook from "./hooks/UseLayoutEffect/UseLayoutEffectHook";
import UseImperativeHandle from "./hooks/UseImperativeHandle/UseImperativeHandleHook";
import UseEffectHook from "./hooks/UseEffect/UseEffectHook";
import UseContextHook from "./hooks/UseContext/UseContextHook";
import UseCallbackHook from "./hooks/UseCallback/UseCallbackHook";

function App() {
  return (
    <div className='App'>
      Hello React Hooks
      <UseStateHook />
    </div>
  );
}

export default App;
