import React from 'react';
import './App.css';
import './components/Style.css'
import Home from './components/Home';
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  

  return (
    <>
    <React.StrictMode>
    <Provider store={store}>
     <Home/>
     </Provider>
  </React.StrictMode>
    </>
  );
}

export default App;
