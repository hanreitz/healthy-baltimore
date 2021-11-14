import React, { Component } from 'react';


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
                }, () => {console.log(this.state)})
            } else {
                this.setState({
                    [`check${currentEl}`]: "checkmark"
                }, () => {console.log(this.state)})
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
  
  export default Filter
  