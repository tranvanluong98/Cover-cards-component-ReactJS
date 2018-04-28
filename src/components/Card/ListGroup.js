import React from 'react';

export default class ListGroup extends React.Component {
    render() {
        return (
            <div >

                <div >
                    <div className="card" style={{ background: "#EFC4C4"}}>
                        <ul className="list-group">
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">Cras justo odio</li>
                        </ul>
                    </div> 

                </div>

                <br /> <br />

                <div >
                    <div className="card" style={{ background: "#EFC4C4" }}>
                        <div class="list-title" style={{marginBottom:"-18px" , borderBottom:"1px solid #6c757d"}}>
                        {this.props.feature}
                        </div>
                        <ul className="list-group">
                            <li class="list-group-item">{this.props.list1}</li>
                            <li class="list-group-item">{this.props.list2}</li>
                            <li class="list-group-item">{this.props.list3}</li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}