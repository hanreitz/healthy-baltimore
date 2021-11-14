import React, { useState } from 'react';
import { Link } from react-router-dom;
import Filter from './Filter'
import '../styles/styles.css'


const Footer = () => {
  const [filter, showFilter] = useState(false);

  let toggleFilter = () => {
    if (filter === false) {
      showFilter(true)
    } else {
      showFilter(false)
    }
  }

  return (
    <>
      { filter === false ?
        null
        :
        <Filter />
      }
      <div className="footerContainer">
        <div className="footerFilter" onClick={() => toggleFilter()}><i className="fas fa-filter"></i><br />filter</div>
        <div className="footerLogo"></div>
        <Link to='/resourc<div className="footerResources"><i className="fas fa-hands-helping"></i><br />resources</div>
      </div>
    </>
  )
}

export default Footer
