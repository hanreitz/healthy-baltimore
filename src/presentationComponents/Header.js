import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css'

class Header extends React.Component {
  render() {
    return (
      <>
        <nav className="headerContainer">
          <Link to='/list'><div className="headerButton"><button>List</button></div></Link>
          <div className="searchInput">
            <input></input>
            <i className="fas fa-search-location locationIcon"></i>
          </div>
        </nav>
      </>
    )
  }
}

export default Header;
