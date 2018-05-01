import React from 'react';

export default class ContentTitle extends React.Component{
    render(){
        return(
            <div >
                
                <div className="card" style={{backgroundColor: "#EFC4C4" , border:"1px solid gray" }}>
                   
                    <p>{this.props.content}</p>

                </div>
            </div>
        );
    }
}