import React, { Component, PropTypes } from 'react';
import './QuoteMaker.less';
import QuoteGetter from './Quoter';

export default class QuoteMaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      q: 'Press button for a quote',
      cite: ''
    }

    this.quoter = new QuoteGetter(props.data);
  }

  static propTypes = {
    data: PropTypes.array.isRequired
  }

  fetchQuote () {
    this.setState( this.quoter.quote() );
  }

  onClick = (e) => {
    e.preventDefault();
    this.fetchQuote();
  }

  render () {
    return (
      <div className='quotes-component'>
        <button className='button' onClick={ this.onClick } >
          Fetch Quote
        </button>

        <span>{ this.state.q }</span>
        <cite>{ this.state.cite }</cite>
      </div>
    )
  }
}