import React from 'react';
export default class CardStyle extends React.Component {
    render() {
        return (
            <div>

                <div  >
                    <div className="header-card" style={{ marginLeft: "25px", width: "125px", textAlign: "left", color: this.props.textColor, backgroundColor: this.props.colors  }}>
                        <p className="text-header" >{this.props.feature}</p>
                        
                    </div>
                    <div className="card" style={{ backgroundColor: this.props.colors , border: "1px solid gray", textAlign: "center" }}>
                        <h3 className="text-title" style={{color:this.props.textColor , marginLeft:"-60px"}} >{this.props.title}</h3>

                        <p className="text-header" >{this.props.subtitle}</p>

                        <p  style={{ marginLeft: "10px", width: "125px", textAlign: "left", color: this.props.textColor ,  backgroundColor: this.props.colors  }}>{this.props.content}</p>

                    </div>
                </div>



            </div>



        );
    }
}