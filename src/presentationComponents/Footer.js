import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      { !filter ?
        null
        :
        <Filter />
      }
      <div className="footerContainer">
        <div className="footerFilter" onClick={() => toggleFilter()}><i className="fas fa-filter"></i><br />filter</div>
        <div className="footerLogo"><Link to='/'><div className="innerLogo"></div></Link></div>
        <div className="footerResources"><Link to='/resources'><div><i className="fas fa-hands-helping"></i><br />resources</div></Link></div>
      </div>
    </>
  )
}

export default Footer
