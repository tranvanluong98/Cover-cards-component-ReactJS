import React from 'react';

export default class Images extends React.Component {
    render() {
        return (
            <div >
                <h3>Images</h3>
                <div className="card" style={{backgroundColor: "#EFC4C4" , border:"1px solid gray" }}>
                    <img src={this.props.img} title="This is an image" className="img"/>

                    <p>{this.props.content}</p>


                   
                </div>
            </div>
        );
    }
}