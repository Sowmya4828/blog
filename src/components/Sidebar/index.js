import React from 'react';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  return(
    <div className="sidebarContainer">
        <ul>
            <li><a href="#"><i className="fa fa-home" style={{fontSize:"52px",color:"#33ff99"}}></i></a></li>
            <li><a href="#"><i className="fa fa-user" style={{fontSize:"52px",color:"#33ff99"}}></i></a></li>
            <li><a href="#"><i className="fa fa-phone" style={{fontSize:"52px",color:"#33ff99"}}></i></a></li>        
        </ul>
    </div>
   )

 }

export default Sidebar