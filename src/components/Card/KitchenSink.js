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
                  
                    <div className="card" style={{ background: "#EFC4C4" , marginLeft:"-23px" , border:"gray" }}>
                        
                        <ul className="list-group">
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">Cras justo odio</li>
                        </ul>
                    </div> 
                </div>
            
            </div>
        );
    }
}