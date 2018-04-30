import React from 'react';
export default class HeaderFooter extends React.Component {
    render() {
        return (
            <div>
            
                <div >
                   
                    <div className="image-caps" style={{ border: "1px solid gray" , marginLeft:"139px"}}>
                    <img  src={this.props.img}  />
                        <h3 className="text-title">{this.props.title}</h3>

                        

                        <p style={{padding:"1.25rem"}} >{this.props.content}</p>
                        
                        
                        <p className="text-footer " style={{ width: "780px"}} >
                           <p style={{position:"relative", top:"12px" , color: "#6c757d" }} > {this.props.footer}</p>
                        </p>
                    </div>

                    <br/><br/>

                     <div className="image-caps" style={{ border: "1px solid gray" , marginLeft:"139px"}}>
                    
                        <h3 className="text-title">{this.props.title}</h3>

                        

                        <p style={{padding:"1.25rem"}} >{this.props.content}</p>
                        
                        
                        <p className="text-footer " style={{ width: "780px"}} >
                           <p style={{position:"relative", top:"12px" , color: "#6c757d" }} > {this.props.footer}</p>
                        </p>
                        <img  src={this.props.img}  />
                    </div>
                    <br/><br/>

                     <div title="Size image: 780 x 270" className="image-overlay" style={{ border: "1px solid gray" , marginLeft:"139px"}}>
                    
                        <h3 className="text-title" style={{ color:"#FFF"}} >{this.props.title}</h3>

                        <p style={{padding:"1.25rem" , color:"#FFF"}} >{this.props.content}</p>
                        
                        
                        <p className="text-footer " style={{ width: "780px"}} >
                           <p style={{position:"relative", top:"12px" , color: "#fff" }} > {this.props.footer}</p>
                        </p>
                    </div>

                        


                </div>

            </div>



        );
    }
}