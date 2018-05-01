import React from 'react';
export default class HeaderFooter extends React.Component {
    render() {
        return (
            <div>
               
                <div >
                    <div className="header-card" >
                        <p className="text-header" >Header</p>
                    </div>
                    <div className="card" style={{ border: "1px solid gray", textAlign: "center" }}>
                        <h3 className="text-title">{this.props.title}</h3>

                        <p>{this.props.subtitle}</p>

                        <p>{this.props.content}</p>


                        <a href="#">

                            <button className="button"> {this.props.button}</button>
                        </a>
                    </div>
                </div>


                <div >
                    <div className="header-card" >
                        <p className="text-header" >{this.props.feature}</p>
                    </div>
                    <div className="card" style={{ border: "1px solid gray", textAlign: "center" }}>
                        <h3 className="text-title">{this.props.title}</h3>

                        <p>{this.props.subtitle}</p>

                        <p>{this.props.content}</p>
                        
                        <a href="#">

                            <button className="button"> {this.props.button}</button>
                        </a>
                        <p className="text-footer " style={{left:"-24px", top:"25px"}} >
                           <p style={{position:"relative", top:"12px" , color: "#6c757d"}} > {this.props.footer}</p>
                        </p>
                    </div>
                        


                </div>

            </div>



        );
    }
}