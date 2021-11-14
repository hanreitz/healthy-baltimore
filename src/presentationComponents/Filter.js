import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addFilter, removeFilter } from '../actions/actionCreator'

class Filter extends Component {
    constructor(props) {
        super()
        this.state={
            checkLarge: "checkmark",
            checkMedium: "checkmark",
            checkSmall: "checkmark",
            checkDiscount: "checkmark",
            checkMember: "checkmark"
        }
    }

    toggleLargeCheck = (currentEl) => {
        if (this.state[`check${currentEl}`]) {
            if (this.state[`check${currentEl}`] === "checkmark") {
                this.setState({
                    [`check${currentEl}`]: "checkmarkChecked"
                }, addFilter(currentEl))
            } else {
                this.setState({
                    [`check${currentEl}`]: "checkmark"
                }, removeFilter(currentEl))
            }
        }
    }

      render() {
        return (
            <>
              <div className="filterContainer">
                  <div className="filterElements" onClick={() => this.toggleLargeCheck("Large")}>
                      <span className={this.state.checkLarge}></span>Large
                  </div>
                  <div className="filterElements" onClick={() => this.toggleLargeCheck("Medium")}>
                      <input type="checkbox" />
                          <span className={this.state.checkMedium} ></span>Medium
                  </div>
                  <div className="filterElements" onClick={() => this.toggleLargeCheck("Small")}>
                      <input type="checkbox" />
                          <span className={this.state.checkSmall} ></span>Small
                  </div>
                  <div className="filterElements" onClick={() => this.toggleLargeCheck("Discount")}>
                      <input type="checkbox" />
                          <span className={this.state.checkDiscount}></span>Discount
                  </div>
                  <div className="filterElements" onClick={() => this.toggleLargeCheck("Member")}>
                      <input type="checkbox"/>
                          <span className={this.state.checkMember}></span>Member
                  </div>
              </div>
            </>
          )
      }
    
  }

  const mapDispatchToProps = dispatch => {
    return {
      addFilter: filter => dispatch(addFilter(filter)),
      removeFilter: filter => dispatch(removeFilter(filter))
    }
  }
  
  export default connect(null, mapDispatchToProps)(Filter)
  