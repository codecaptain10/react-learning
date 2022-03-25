import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
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
    <Router>
      <div className='App'>
        <Home />
        <Routes>
          <Route exact path='/use-state' element={<UseStateHook />} />
          <Route exact path='/use-ref' element={<UseRefHook />} />
          <Route exact path='/use-reducer' element={<UseReducerHook />} />
          <Route exact path='/use-memo' element={<UseMemoHook />} />
          <Route
            exact
            path='/use-layout-effect'
            element={<UseLayoutEffectHook />}
          />
          <Route
            exact
            path='/use-imperative-handle'
            element={<UseImperativeHandle />}
          />
          <Route exact path='/use-effect' element={<UseEffectHook />} />
          <Route exact path='/use-context' element={<UseContextHook />} />
          <Route exact path='/use-callback' element={<UseCallbackHook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
