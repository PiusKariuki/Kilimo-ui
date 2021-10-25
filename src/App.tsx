import React from 'react';
import { useSelector } from "react-redux";
import Kilimo from './App/Modules/Kilimo/views/Kilimo';
import Auth from './App/Modules/Auth/views/Auth';



const App = (): JSX.Element=> {
  const tkn= useSelector<any>(state => state.User.tkn)
  return <>{tkn !=null?<Kilimo />:<Auth />}</>
}


export default App;

