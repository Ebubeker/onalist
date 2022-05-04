import React, {useState, useEffect} from 'react';
import { Nav, NavBrand, Diff, SearchBar, Input, NavSearch, Menu, NormalMenu, Login, Button, UnderNav, List, Items, Socials } from './NavbarStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const Navbar = () => {

  const [logged, setLogged] = useState(false);
  const [mobileView, setMobileView] = useState({});

  useEffect(() => {
    setLogged(false)
    setMobileView(getWindowDimensions())
  }, [mobileView])
  

  return (
    <div className='container'>
      <Nav>
        <NavSearch>
          <NavBrand>on<Diff>A</Diff>list</NavBrand>
          {
            mobileView.width > 500 &&
            <SearchBar>
              <FontAwesomeIcon style={{color: "#276cdb"}} icon={faMagnifyingGlass}/>
              <Input placeholder='Search over 2 million products'/>
            </SearchBar>
          }
        </NavSearch>
        {
          mobileView.width > 1280 ? 
          <Menu>
            {logged ? <NormalMenu>
              Norm
            </NormalMenu> : 
            <Login>
              <Button backColor="#e9edf5" onhover="#d8deeb">Login</Button>  
              <Button backColor="#276cdb" onhover="#5780c2">Signup</Button>  
            </Login>}
          </Menu>
          :
          <FontAwesomeIcon icon={faBars}/>
        }
      </Nav>

      {mobileView.width > 1280 &&
        <UnderNav>
          <List>
            <Link style={{textDecoration: "none"}} to="/">
              <Items>Clothes</Items>
            </Link>
            <Link style={{textDecoration: "none"}} to="/">
              <Items>Electronics</Items>
            </Link>
            <Link style={{textDecoration: "none"}} to="/">
              <Items>Smart Home</Items>
            </Link>
            <Link style={{textDecoration: "none"}} to="/">
              <Items>Laptops</Items>
            </Link>
            <Link style={{textDecoration: "none"}} to="/">
              <Items>Arts & Crafts</Items>
            </Link>
            <Link style={{textDecoration: "none"}} to="/">
              <Items>Books</Items>
            </Link>
            <Link style={{textDecoration: "none"}} to="/">
              <Items>Shoes</Items>
            </Link>
            <Link style={{textDecoration: "none"}} to="/">
              <Items>Jewlery</Items>
            </Link>
            <Link style={{textDecoration: "none"}} to="/">
              <Items>Pet Supply</Items>
            </Link>
          </List>
          <Socials>
              <FontAwesomeIcon style={{fontSize: "30px", marginLeft: "10px", color: "#276cdb", cursor: "pointer"}} icon={faFacebook}></FontAwesomeIcon>
              <FontAwesomeIcon style={{fontSize: "30px", marginLeft: "10px", color: "#276cdb", cursor: "pointer"}} icon={faInstagram}></FontAwesomeIcon>
              <FontAwesomeIcon style={{fontSize: "30px", marginLeft: "10px", color: "#276cdb", cursor: "pointer"}} icon={faLinkedin}></FontAwesomeIcon>
          </Socials>
        </UnderNav>
      
      }
    </div>
  )
}

export default Navbar