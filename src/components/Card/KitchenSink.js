import React from 'react';
import Images from './Images';
import ListGroup from './ListGroup';
import Exammple from './Example';
export default class KitchenSink extends React.Component {
    render() {
        return (
            <div >
                <div className="card" style={{ backgroundColor: "#EFC4C4", border: "1px solid gray" }}>
                    <img src={this.props.img} title={this.props.title} className="img" />
                    <h3>{this.props.title}</h3>
                    <p>{this.props.content}</p>

                    <div className="card" style={{ background: "#EFC4C4", marginLeft: "-23px", border: "gray" }}>

                        <ul className="list-group">
                            <li class="list-group-item">{this.props.content}</li>
                            <li class="list-group-item">{this.props.content}</li>
                            <li class="list-group-item">{this.props.content}</li>
                        </ul>
                    </div>
                    <div style={{ padding: "1.25rem" }} >
                        <a href={this.props.link1} target="_blank" className="card-link">
                            Link 1
                        </a>
                        <a href={this.props.link2} target="_blank" className="card-link" style={{ marginLeft: "1.25rem" }}>
                            Link 2
                        </a>
                    </div>
                </div>

            </div>
        );
    }
}