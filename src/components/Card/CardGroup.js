import React from 'react';
import { height } from 'window-size';

export default class CardGroup extends React.Component {
    render() {
        return (
            <div className="bd-example">
                <div className="card-group">
                    <div className="list-card" >
                        <img src="http://www.onaponaskitchen.com/wp-content/uploads/2017/03/gray-dark-dark-gray-gray-gray-wallpaper-5.jpg" style={{ width: "259px", height: "180px", display: "block" }} />
                        <div className="card-body">
                            <h3 className="text-title" style={{ marginLeft: "0px" }} >{this.props.title}</h3>
                            <p style={{ padding: "1.25rem" ,width:"180px"}} >{this.props.content}</p>
                            <p style={{color:"#6c757d"}} >{this.props.footer}</p>
                        </div>
                    </div>

                    <div className="list-card" >
                        <img src="http://www.onaponaskitchen.com/wp-content/uploads/2017/03/gray-dark-dark-gray-gray-gray-wallpaper-5.jpg" style={{ width: "259px", height: "180px", display: "block" }} />
                        <div className="card-body">
                            <h3 className="text-title" style={{ marginLeft: "0px" }} >{this.props.title}</h3>
                            <p style={{ padding: "1.25rem" ,width:"180px"}} >{this.props.content}</p>
                            <p style={{color:"#6c757d"}} >{this.props.footer}</p>
                        </div>
                    </div>

                    <div className="list-card" >
                        <img src="http://www.onaponaskitchen.com/wp-content/uploads/2017/03/gray-dark-dark-gray-gray-gray-wallpaper-5.jpg" style={{ width: "259px", height: "180px", display: "block" }} />
                        <div className="card-body">
                            <h3 className="text-title" style={{ marginLeft: "0px" }} >{this.props.title}</h3>
                            <p style={{ padding: "1.25rem" ,width:"180px"}} >{this.props.content}</p>
                            <p style={{color:"#6c757d"}} >{this.props.footer}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}