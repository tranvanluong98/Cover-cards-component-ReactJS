import React from 'react';



export default class Example extends React.Component {
    render() {
        return (
            <div className="card">

                <h3>{this.props.title}</h3>

                <p>{this.props.subtitle}</p>

                <p>{this.props.content}</p>
                
                
                <a href="#">
                   
                    <button className="button"> {this.props.button}</button>
                    </a>
            </div>
        );
    }
}