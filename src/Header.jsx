import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from './assets/green_youth_logo.png';
import { Link } from 'react-router-dom';
import './App.css';


export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar sx={{backgroundColor:'#FFFFFF', justifyContent: "center", flex: 1, gap: "20px"}}>
                {/*Inside the IconButton, we 
                    can render various icons*/}

                <div sx={{flex: 1}}><img src={logo} className='logo' alt="Green Youth Logo"></img></div>

                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button sx={{color: "#FF83B3", fontWeight: "bold"}}>Home</Button>
                </Link>

                <Link to="/About_Us" style={{ textDecoration: 'none' }}>
                    <Button sx={{color: "#FF83B3", fontWeight: "bold"}}>About Us</Button>
                </Link>
                
                <Link to="/What_We_Do" style={{ textDecoration: 'none' }}>
                    <Button sx={{color: "#FF83B3", fontWeight: "bold"}}>What We Do</Button>
                </Link>
                
                <Button sx={{color: "#FF83B3", fontWeight: "bold"}}>Get Involved</Button>

                <Button sx={{border: '2px solid black',backgroundColor:'#006B2D', color: "#FFFFFF", marginLeft: 'auto'}}>Join Now</Button>
            </Toolbar>
        </AppBar>
    );
}