import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './CSS/Card.css';
import './CSS/Button.css';
import './CSS/Link.css';
import './CSS/Image.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header';
import Example from './components/Card/Example';
import ContentTitle from './components/Card/ContentTitle';
import TitleTextLink from './components/Card/TitleTextLink';
import Images from './components/Card/Images';
ReactDOM.render(
    <div>
    {/* <App /> */}
    
    <Example  title="Hello Babie!!" subtitle="Subtitle" content="Write something in here" button="Go Somewhere"/> 
    <Example  title="Hello " subtitle="World" content="Somthing in here" button="Facebook"/>
    <ContentTitle  content="This is context card"/>
    <TitleTextLink title="ABC" content="dev-web" link1="Facebook" link2="Google" />
    <Images  content="Write something in here"  img="http://www.color-hex.com/palettes/5361.png"/>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
