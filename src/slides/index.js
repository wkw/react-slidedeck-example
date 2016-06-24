import React from 'react';
import Center from '../components/Center';
import Image from '../components/Image';

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
    <Center wide>
      <img src={require('./npm.png')} width='100%' height='80%' />
    </Center>,
    <Center wide>
      <img src={require('./npm.png')} width='100%' style={{ opacity: .25 }} />
      <div style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, height: '100vh' }}>
        <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }}>
          <h1 style={{ alignSelf: 'center' }}>3 Million</h1>
        </div>
      </div>
    </Center>,
    <Center>
      <h2>Slide</h2>
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
        <h2>Features</h2>
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
        <h2>Constraints</h2>
      </div>
    </div>
  ];
}
