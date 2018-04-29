import React from 'react';
export default class Navigation extends React.Component {
    render() {
        return (
            <div className="card-navigation text-center" >
                <div className="header-navigation" >
                    <ul className="nav nav-tabs card-header-tabs" >
                        <li className="nav-item">
                            <a href={this.props.linkActive} className="nav-link active">
                                {this.props.nameActive}
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href={this.props.LinkFullHD} className="nav-link ">
                                {this.props.linkHD}
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href='' className="nav-link disabled" disable={this.props.linkdisable} >

                                {this.props.link_disable}
                            </a>
                        </li>


                    </ul>

                </div>
                <div style={{border: "1px solid darkgray", width:"960px", marginLeft:"139px"}} >
                    <h3>Special title</h3>
                    <p>With supporting text below as a natural lead-in to additional content.
Go somewhere
</p>
                    <a href="#">

                        <button className="button" style={{marginBottom:"10px"}} > {this.props.button}</button>
                    </a>
                </div>

                <div className="body-navigation" >

                </div>

            </div>
        );
    }
}