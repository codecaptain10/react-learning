import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const navLinksStyle = {
    color: "white",
    textDecoration: "none",
    flexGrow: "1",
  };

  return (
    <div className='home-page'>
      <div className='home-page-logo'>
        <h1>React Hooks Examples</h1>
      </div>

      <div className='hooks-container'>
        <Link style={navLinksStyle} to='/use-state'>
          <div>useState</div>
        </Link>
        <Link style={navLinksStyle} to='/use-ref'>
          <div>useRef</div>
        </Link>
        <Link style={navLinksStyle} to='/use-reducer'>
          <div>useReducer</div>
        </Link>
        <Link style={navLinksStyle} to='/use-memo'>
          <div>useMemo</div>
        </Link>
        <Link style={navLinksStyle} to='/use-layout-effect'>
          <div>useLayoutEffect</div>
        </Link>
        <Link style={navLinksStyle} to='/use-imperative-handle'>
          <div>useImperativeHandle</div>
        </Link>
        <Link style={navLinksStyle} to='/use-effect'>
          <div>useEffect</div>
        </Link>
        <Link style={navLinksStyle} to='/use-context'>
          <div>useContext</div>
        </Link>
        <Link style={navLinksStyle} to='/use-callback'>
          <div>useCallback</div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
