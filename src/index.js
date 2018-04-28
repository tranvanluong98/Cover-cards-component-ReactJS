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
import ListGroup from './components/Card/ListGroup';
import KitchenSink from './components/Card/KitchenSink';
ReactDOM.render(
    <div>
        {/* <App /> */}

        <Example title="Hello Babie!!" subtitle="Subtitle" content="Write something in here" button="Go Somewhere" />
        <Example title="Hello " subtitle="World" content="Somthing in here" button="Facebook" />
        <ContentTitle content="This is context card" />
        <TitleTextLink title="ABC" content="dev-web" link1="Facebook" link2="Google" />
        <h3 className="text">Images</h3>
        <Images content="Write something in here" img="http://www.color-hex.com/palettes/5361.png" />
        <h3 className="text">List groups</h3>
        <p className="text">Create lists of content in a card with a flush list group.</p>
        <ListGroup feature="This is Featured" list1="list 1" list2="list 2" list3="list 3" />
        <h3 className="text">Kitchen Sink</h3>
        <p className="text">Mix and match multiple content types to create the card you need, 
        or throw everything in there. Shown below are image styles, blocks, text styles, and a list
        group—all wrapped in a fixed-width card.</p>
        <KitchenSink content="Write something in here" img="http://www.color-hex.com/palettes/5361.png"
         title="Card title" content="Write something in here"
         
         
         />
            
        
    </div>
    , document.getElementById('root'));
registerServiceWorker();
