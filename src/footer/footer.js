import React, { Component } from "react";
import './footer.css';

class Footer extends Component {
    // probably not needed here
    constructor(){
        super()
        this.state = {
        //   PROPERTY:'',
        //   PROP2:'DEFAULT'
        }
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