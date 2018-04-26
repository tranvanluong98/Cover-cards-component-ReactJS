import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './CSS/Card.css';
import './CSS/Button.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header';
import Example from './components/Card/Example';


ReactDOM.render(
    <div>
    {/* <App /> */}
    
    <Example title="Hello Babie!!" subtitle="Subtitle" content="abcdefghklmn" button="Go Somewhere"/> 
    <Example  title="Hello " subtitle="World" content="abcdef" button="Facebook"/>
    <Example title="Xin chao VN!!" subtitle="I live in there" content="abchklmn" button="Google"/>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
