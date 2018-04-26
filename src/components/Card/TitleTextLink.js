import React from 'react';
import Example from './Example';

export default class TitleTextLink extends React.Component {
    render() {
        return (
            <div >
                <h3>Title, Text and Links</h3>
                <div className="card" style={{ backgroundColor: "#EFC4C4", border: "1px solid gray" }}>
                   
                   
                    <h3>{this.props.title}</h3>

                    <p>{this.props.content}</p>


                    <a className="link" href="#">
                        {this.props.link1}
                    </a>
                    <a className="link" href="#" >
                        {this.props.link2}
                    </a>
                </div>
            </div>
        );
    }
}