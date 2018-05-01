import React from 'react';

export default class Example extends React.Component {
    render() {
        return (
            <div >
                
                <div className="card" style={{backgroundColor: "#EFC4C4" , border:"1px solid gray" }}>
                    <h3 className="text-title">{this.props.title}</h3>

                    <p>{this.props.subtitle}</p>

                    <p>{this.props.content}</p>


                    <a href="#">

                        <button className="button"> {this.props.button}</button>
                    </a>
                </div>
            </div>
        );
    }
}