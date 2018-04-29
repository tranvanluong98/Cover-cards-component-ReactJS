import React from 'react';
export default class TextAlign extends React.Component {
    render() {
        return (
            <div>
            <div className="card" style={{border: "1px solid gray" , textAlign:"left" }}>
                <h3 className="text-title">{this.props.title}</h3>

                <p>{this.props.subtitle}</p>

                <p>{this.props.content}</p>


                <a href="#">

                    <button className="button"> {this.props.button}</button>
                </a>
            </div>

            <div className="card" style={{border: "1px solid gray" , textAlign:"center" }}>
                <h3 className="text-title">{this.props.title}</h3>

                <p>{this.props.subtitle}</p>

                <p>{this.props.content}</p>


                <a href="#">

                    <button className="button"> {this.props.button}</button>
                </a>
            </div>


            <div className="card" style={{border: "1px solid gray" , textAlign:"right" }}>
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