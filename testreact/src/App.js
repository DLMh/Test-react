import logo from './logo.svg';
import './App.css';
import './assets/css/sb-admin-2.min.css'

import Navbar from './component/Navbar';


import ObjetCard from './component/ObjetCard';
import Table from './component/Table';


function App() {
  return (
        <>
        <Navbar/>
       
        <ObjetCard/>
        <Table/>
        
        </>
        
  );
}

export default App;
