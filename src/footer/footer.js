import React, { Component } from "react";
import './footer.css';

class Footer extends Component {
    constructor(){
        super()
      }
    render() {
      return (
        <div className="footer">
            <span className="copyright">© David Hutchings 2019</span>
        </div>
      );
    }
  }
  
  export default Footer;