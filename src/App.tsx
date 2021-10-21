import React from 'react';
import { useSelector } from "react-redux";
import Kilimo from './App/Modules/Kilimo/views/Kilimo';
import Landing from './App/Modules/Landing/views/Landing';



const App = (): JSX.Element=> {
  const tkn= useSelector<any>(state => state.User.tkn)
  return <>{tkn !=null?<Kilimo />:<Landing />}</>
}


export default App;

