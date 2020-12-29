import React, { useState, useContext } from 'react';
import { Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavItem, NavLink, NavbarText, InputGroup, InputGroupAddon, Button, Input
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import {VideoContext} from '../VideoContext';
import {SearchContext} from '../SearchContext';
import {Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";

const NavBar = (props) => {
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [videos, setVideos] = useContext(VideoContext);
  const [search, setSearch] = useContext(SearchContext);
  const [searchInput, setSearchInput] = useState('');

  const updateSearch = (event) => {
    setSearchInput(event.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // {<Redirect to="/video-search" />}
    history.push("/video-search")
    // window.location.href = '/video-search';
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
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Courses</NavLink>
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
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;