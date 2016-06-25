export default class Quoter {
  constructor(quote_data) {
    // this copy shrinks as quotes are retrieved...
    this.quotes = [...quote_data];

    // used to replenish `this.quotes` when it's empty
    this.allQuotes = [...quote_data];
  }

  // returns random item from `this.quotes`
  quote() {
    return this._randomItem();
  }

  _randomItem () {

    // if all quotes shown, reset
    if (this.quotes.length === 0) {
      this.quotes = [...this.allQuotes];
    }
    const idx = this._rdm(this.quotes.length);
    const q = this.quotes[idx];
    this.quotes = [
      ...this.quotes.slice(0, idx),
      ...this.quotes.slice(idx + 1)
      ];
    console.log('idx', idx, 'len', this.quotes.length);
    return q;

  }

  // Returns a random integer between min (included) and max (excluded)
  // Using Math.round() will give you a non-uniform distribution!
  // @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  _rdm(max, min = 0) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
