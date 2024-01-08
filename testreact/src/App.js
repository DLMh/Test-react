import logo from './logo.svg';
import './App.css';
import './assets/css/sb-admin-2.min.css'
import Sidenav from './component/Sidenav';
import Navbar from './component/Navbar';
import { Box } from '@mui/material';
import Content from './component/Content';
import Table from './component/Table';

function App() {
  return (
      <>
      <Navbar/>
        <Box sx={{display:"flex"}}>
        <Sidenav/>
        </Box>
        <Box sx={{display:"flex"}}>
         <Content/>
        </Box>
        <Box><Table/></Box>
        
      </>
      
      
  );
}

export default App;
