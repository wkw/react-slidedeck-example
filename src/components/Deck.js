import React, { cloneElement, Component, Children, PropTypes } from 'react';
import Image from './Image';
import './Deck.less';

const iOS = /iphone|ipod|ipad/.test(window.navigator.userAgent.toLowerCase());

export default class Deck extends Component {
  static propTypes = {
    currentSlide: PropTypes.number.isRequired
  };

  render() {
    const { children, currentSlide } = this.props;
    const elements = [];

    Children.forEach(children, (child, index) => {
      if (index === currentSlide) {
        elements.unshift(
          cloneElement(child, { key: 'current' })
        );
      } else if (!iOS) {
        elements.push(
          this.preloadImages(child, index)
        );
      }
    });


    return (
      <div className='Deck' style={{fontSize: '4vw'}}>
        <div id='header'>
          <a href="http://evolvingmedia.net/">
            <Image width='40%' src={require('../slides/emn-logo.svg')} />
          </a>
        </div>
        <div
          style={{
            position: 'absolute',
            zIndex: 99,
            left: 0,
            top: 0,
            bottom: 0,
            width: '15%'
          }}
          onTouchStart={this.props.prevSlide}
        />
        {elements}
        <div
          style={{
            position: 'absolute',
            zIndex: 99,
            right: 0,
            top: 0,
            bottom: 0,
            width: '15%'
          }}
          onTouchStart={this.props.nextSlide}
        />
      </div>
    );
  }

  preloadImages(slide, index) {
    return (
      <div key={index}
           style={{
        position: 'absolute',
        left: -1000,
        top: -1000,
        width: 0,
        heigh: 0,
        opacity: 0
      }}>
        {slide}
      </div>
    );
  }
}
