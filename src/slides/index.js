import React from 'react';
import Center from '../components/Center';
import Image from '../components/Image';
import QuoteMaker from '../components/QuoteMaker';
import Quotes from '../components/Quotes';
import hasTouchEvents from '../utils/hasTouchEvents';

console.log(hasTouchEvents);

function navigationHint () {
  return hasTouchEvents() ?
    'Touch sides of screen to navigate slides' :
    'Use keyboard ← and → arrows to navigate.';
}

function makeProgression(props, title, items) {
  return [
    ...items.map((activeItem, activeIndex) =>
      <Center wide {...props}>
        <h3>{title}</h3>
        <ul>
          {items.map((item, i) =>
            <li
              key={i}
              style={{ opacity: i === activeIndex ? 1 : .5 }}
            >
              {item}
            </li>
          )}
        </ul>
      </Center>
    )
  ];
}

export default function getSlides() {
  return [
    <Center wide title='Use keyboard ← and → arrows to navigate.'>
      <h2>EMN Builds Interactive Media</h2>
      <span style={{fontSize: '1.1rem', color: '#d34b3e'}}>{ navigationHint() }</span>
    </Center>,
    <Center wide>
      <h2 style={{opacity: .5}}>EMN Builds Interactive Media</h2>
      <h3>For Web & Mobile</h3>
    </Center>,
    <Center wide>
      <h3>Following industry standards ...</h3>
    </Center>,
    ...makeProgression({ alt: true, code: true }, 'CMSs & Frameworks', [
      'WordPress',
      'Ruby on Rails',
      'Express - Node.js',
      'Sails & FeathersJS',
      'Laravel - PHP'
    ]),
    <Center wide alt>
      <h3>This slide contains a Component!</h3>
      <div style={{ fontSize: '1.4rem'}}>
        This is a custom React component which fetches computer science quotes.
        <br/>
        Pretty cool huh?
      </div>
      <QuoteMaker data={Quotes} />
    </Center>,
    <div style={{
      width: '100vw',
      height: '100vh',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        width: '50vw',
        height: '100vh',
        color: '#181818',
        backgroundColor: '#f8f8f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2>The Last Slide</h2>
      </div>
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '50vw',
        height: '100vh',
        color: '#f8f8f8',
        backgroundColor: '#181818' ,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2>This is</h2>
      </div>
    </div>
  ];
}
