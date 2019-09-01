class Flame {
  constructor(opts) {
    const { firstName, secondName } = opts;

    if (!firstName || !secondName) {
      throw new Error('Please provide both names.');
    }

    this.first = firstName.toLowerCase();
    this.second = secondName.toLowerCase();
    this.original = {
      firstName,
      secondName
    };
    this.flame = [ 'friends', 'lovers', 'affectionate', 'marriage', 'enemies' ];
    this.similars = [];
  }

  /**
   * Return an array of the letters that appear in both names
   * @returns {array} similars
   */
  getSimilarLetters() {
    const similars = [];

    for (let i = 0; i < this.first.length; i++) {
      if (this.second.includes(this.first[i])) {
        similars.push(this.first[i]);
      }
    }

    return similars;
  }

  /**
   * Removes the similar letters from both names
   */
  removeSimilars() {
    this.similars.forEach(letter => {
      this.first = this.first.replace(new RegExp(letter, 'g'), '');
      this.second = this.second.replace(new RegExp(letter, 'g'), '');
    });
  }

  /**
   * Get the relationship based on the combined length of
   * both names
   * @param {int} len
   * @returns {string}
   */
  getRelationship(len) {
    const idx = ((len % 10 > 5 || len % 10 === 0) ? len - 5 : len) % 10;

    if (idx < 1) {
      return this.flame[0];
    }

    return this.flame[idx - 1];
  }

  /**
   * Initializes the calculation process and returns the
   * answer
   * @returns {object}
   */
  init() {
    const { original: { firstName, secondName } } = this;

    this.similars = this.getSimilarLetters();
    this.removeSimilars();

    const relationship = this.getRelationship(this.first.length + this.second.length);

    return {
      relationship,
      firstName,
      secondName
    };
  }
}

module.exports = Flame;
