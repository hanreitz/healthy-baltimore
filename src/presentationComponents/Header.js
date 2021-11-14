import React from 'react'
import '../styles/styles.css'

const Header = () => {
  return (
    <>
      <nav className="headerContainer">
        <div className="headerButton"><button>List</button></div>
        <div className="searchInput">
          <input></input>
          <i className="fas fa-search-location locationIcon"></i>
        </div>
      </nav>
    </>
  )
}

export default Header;
