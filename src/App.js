import React, {useState} from 'react';
import './App.css';

export default function App() {
  let [count, setcount ] = useState(0)
  return (
    <div>
      <h1>Value of counter variable is: {count}</h1>
      <br />
   
    </div>
  );
}
