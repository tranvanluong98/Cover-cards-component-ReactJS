import React from 'react';
class Header extends React.Component{
    render(){
        
        return(
            <div>
            <h1 style={{color:"#FFFFFF" , textAlign:"center", backgroundColor: "#563d7c"}} className="Header">{this.props.header}</h1>
            <hr /> <br />
            </div>
        );
    }
}
export default Header;