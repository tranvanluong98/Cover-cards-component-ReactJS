import React from 'react';
import Layout from './Layout';

export default class Header extends React.Component{
    render(){
        return(
            <div>
            <Layout header="Lady and Gentelman"/>
            <Layout header ="What's up!!"/>
            </div>
        );
    }
}