import React from 'react';
import Header from './Header';
export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <h1> {this.props.header}</h1>
                <h2> My name is Luong </h2>
            </div>

        );
    }
}