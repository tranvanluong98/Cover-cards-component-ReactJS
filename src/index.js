import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './CSS/Card.css';
import './CSS/Button.css';
import './CSS/Link.css';
import './CSS/Image.css';
import './CSS/Text.css';
import './CSS/Header.css';
import './CSS/Footer.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header';
import Footer from './components/Footer';
import Example from './components/Card/Example';
import ContentTitle from './components/Card/ContentTitle';
import TitleTextLink from './components/Card/TitleTextLink';
import Images from './components/Card/Images';
import ListGroup from './components/Card/ListGroup';
import KitchenSink from './components/Card/KitchenSink';
import HeaderFooter from './components/Card/HeaderFooter';
import TextAlign from './components/Card/TextAlign';
import Navigation from './components/Card/Navigation';
import ImageCaps from './components/Card/ImageCaps';
import CardStyle from './components/Card/CardStyle';
import CardGroup from './components/Card/CardGroup';
ReactDOM.render(
    <div>
        {/* <App /> */}
        <Header header="Card Bootstrap to ReactJS"/>
        
        <h3 className="text-title">Example</h3>
        <p className="text">
            Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no margin by default, so use spacing utilities as needed.

    Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various sizing options.
        </p>
        <Example title="Hello Babie!!" subtitle="Subtitle" content="Write something in here" button="Go Somewhere" />

        <h3 className="text-title">Content Text</h3>
        <p className="text">
            Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.
        </p>

        <ContentTitle content="This is context card" />

        <TitleTextLink title="ABC" content="dev-web" link1="Facebook" link2="Google" />

        <h3 className="text-title">Images</h3>

        <Images content="Write something in here" img="http://www.color-hex.com/palettes/5361.png" />

        <h3 className="text-title">List groups</h3>
        <p className="text">Create lists of content in a card with a flush list group.</p>
        <ListGroup feature="This is Featured" list1="list 1" list2="list 2" list3="list 3" />
        <h3 className="text-title">Kitchen Sink</h3>

        <p className="text">Mix and match multiple content types to create the card you need,
        or throw everything in there. Shown below are image styles, blocks, text styles, and a list
        group—all wrapped in a fixed-width card.</p>

        <KitchenSink content="Write something in here" img="http://www.color-hex.com/palettes/5361.png"
            title="Card title" content="Write something in here"
            link1="https://getbootstrap.com/docs/4.0/components/card/"
            link2="https://www.youtube.com/watch?v=dg9M2goOOPY"

        />

        <h3 className="text-title">Header and Footer </h3>
        <HeaderFooter feature="Featured" subtitle="Special title treatment"
            content="With supporting text below as a natural lead-in to additional content."
            button="Go somewhere" footer="Footer" />
        < h3 className="text-title"> TextAlign</h3>
        <TextAlign title="Special title treatment" content="With supporting text below as a natural lead-in to additional content"
            button="Click here!" />
        < h3 className="text-title"> Navigation</h3>
        <Navigation title="Special title" content="With supporting text below as a natural lead-in to additional content." linkdisable="Disable" LinkFullHD="https://getbootstrap.com/docs/4.0/components/card/" linkActive="https://www.facebook.com/"
            nameActive="Active" linkHD="Link FULL HD" link_disable="Disable" button="Go Somewhere" />

        < h3 className="text-title"> Images</h3>
        <p className="text">Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.</p>



        <ImageCaps img="http://mariadamore.com/sitebuilder/images/blackGoldMontage-780x180.jpg"
            title="Card Title" content="This is a wider card with supporting text below" footer="2 days ago" />
        <CardStyle colors="#007bff" feature="Header" title="Primary card title" content="Something in here" />

        <CardStyle colors="#6c757d" textColor="#fff" feature="Header" title="Secondary card title" content="Something in here" />

        <CardStyle colors="#28a745" textColor="#fff" feature="Header" title="Success card title" content="Something in here" />

        <CardStyle colors="#dc3545" textColor="#fff" feature="Header" title="Danger card title" content="Something in here" />

        <CardStyle colors="#ffc107" textColor="#fff" feature="Header" title="Warning card title" content="Something in here" />

        <CardStyle colors="#17a2b8" textColor="#fff" feature="Header" title="Info card title" content="Something in here" />

        <CardStyle colors="#343a40" textColor="#fff" feature="Header" title="Dark card title" content="Something in here" />

        <CardStyle colors="#f8f9fa" textColor="#212529" feature="Header" title="Light card title" content="Something in here" />

        < h3 className="text-title"> Card layout</h3>
        <p className="text">In addition to styling the content within cards, Bootstrap includes a few options for laying out series of cards. For the time being, these layout options are not yet responsive.</p>

        <CardGroup title="Card Title" content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            footer="Last updated 3 mins ago" />

            <Footer/>


    </div>
    , document.getElementById('root'));
registerServiceWorker();
