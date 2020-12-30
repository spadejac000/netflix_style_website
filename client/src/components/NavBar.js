import React, { useState, useContext } from 'react';
import { Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavItem, NavLink, NavbarText, InputGroup, InputGroupAddon, Button, Input
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog} from '@fortawesome/free-solid-svg-icons';
import {VideoContext} from '../VideoContext';
import {SearchContext} from '../SearchContext';
import { useHistory } from "react-router-dom";

const NavBar = (props) => {
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [videos] = useContext(VideoContext);
  const [search, setSearch] = useContext(SearchContext);
  const [searchInput, setSearchInput] = useState('');

  const updateSearch = (event) => {
    setSearchInput(event.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    history.push("/video-search")
    setSearch(videos.filter(
      (video) => {
        return video.title.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1;
      }
    ))
  }

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mb-5">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Brand</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/video-list">Home</NavLink>
            </NavItem>
          </Nav>
          <form onSubmit={handleSearch}>
            <InputGroup style={{width: '25%', marginRight: '1rem', minWidth: '250px'}}>
              <Input 
                placeholder="Titles, Courses" 
                value={searchInput}
                onChange={updateSearch}
              />
              <InputGroupAddon addonType="append">
                <Button color="secondary"><FontAwesomeIcon icon={faSearch}/></Button>
              </InputGroupAddon>
            </InputGroup>
          </form>
          <Nav navbar>
            <NavItem>
              <NavLink href="/settings"><FontAwesomeIcon className="fa-2x" icon={faCog}/></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;