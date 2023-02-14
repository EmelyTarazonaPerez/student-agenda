import React from "react";
import './app.css'
import AppIU from "./AppIU";
import {MyProvider} from "../context";


function App() {
  return (
    <MyProvider>
      <AppIU />
    </MyProvider>
  );
}

export default App;
