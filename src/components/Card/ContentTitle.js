import React from 'react';

export default class ContentTitle extends React.Component{
    render(){
        return(
            <div >
                <h3 className="text-title"> Content Title </h3>
                <div className="card" style={{backgroundColor: "#EFC4C4" , border:"1px solid gray" }}>
                   
                    <p>{this.props.content}</p>

                </div>
            </div>
        );
    }
}