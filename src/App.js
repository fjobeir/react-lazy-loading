import React, { useState, Suspense } from 'react';
import './App.css';
// import Comp1 from './Comp1';
const Comp1 = React.lazy(()=> import('./Comp1'))
// import Comp2 from './Comp2';
const Comp2 = React.lazy(()=> import('./Comp2'))

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="App">
      {toggle && <Suspense fallback={<>Loading C1</>}><Comp1 /></Suspense>}
      {!toggle && <Suspense fallback={<>Loading C2</>}><Comp2 /></Suspense>}
      <button onClick={() => {
        setToggle(!toggle)
      }}>toggle</button>
    </div>
  );
}

export default App;
