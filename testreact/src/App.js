import logo from './logo.svg';
import './App.css';
import './assets/css/sb-admin-2.min.css'
import Sidenav from './component/Sidenav';
import Navbar from './component/Navbar';
import { Box } from '@mui/material';
import Content from './component/Content';


function App() {
  return (
      <>
      <Navbar/>
        <Box sx={{display:"flex"}}>
        <Sidenav/>
        </Box>
        <Content/>
      </>
      
      
  );
}

export default App;
