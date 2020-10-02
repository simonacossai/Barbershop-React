import React, { Component } from 'react';
import { MenuItems } from './Menuitems';
import './Navbar.css';
import { faCut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-scroll';
import {Button} from './Button';

export default class Navbar extends Component {
    state= { clicked: false }

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (          
                <nav className="NavbarItems">
                <p className="navbar-logo"><Link to="showcase" smooth={true} duration={900}><FontAwesomeIcon icon={faCut}  style={{color: '#b28957', marginRight: '3px'}} /> menditto</Link></p>
                <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index)=>{
                    return(
                        <li key={index}>
                        <Link className={item.cName} to={item.url} smooth={true} duration={900}>
                            {item.title}
                        </Link></li>
                    )
                })}
                
                    
                </ul>
              
                <Button id="button"><a href="tel:331 987 9197">Chiama ora</a></Button>
                </nav>
          
        )
    }
}


