const { expect } = require('chai');
const Flame = require('../lib/flame');

describe('Flame', function () {
  beforeEach(function () {
    this.flame = new Flame({
      firstName: 'Joseph',
      secondName: 'Missy'
    });
  });

  describe('when one or more names are not provided', function () {
    it('should throw', function () {
      const flame = () => new Flame({
        firstName: 'Joe',
        secondName: null
      });

      return expect(flame).to.throw(Error, 'Please provide both names.');
    });
  });

  it('should return lowercase names', function () {
    expect(this.flame.first).to.eql('joseph');
    expect(this.flame.second).to.eql('missy');
  });

  it('should initiate empty similarities array', function () {
    return expect(this.flame.similars).to.have.length(0);
  });

  it('should store names in their original form', function () {
    return expect(this.flame.original).to.eql({
      firstName: 'Joseph',
      secondName: 'Missy'
    });
  });

  describe('#getSimilarLetters', function () {
    it('should return correct values', function () {
      const letters = this.flame.getSimilarLetters();
      return expect(letters).to.eql(['s']);
    });
  });

  describe('#removeSimilars', function () {
    it('should properly remove similar letters from the names', function () {
      this.flame.similars = this.flame.getSimilarLetters();
      this.flame.removeSimilars();
      
      expect(this.flame.first).to.eql('joeph');
      expect(this.flame.second).to.eql('miy');
    });
  });

  describe('#getRelationship', function () {
    it('should return the correct relationship', function () {
      const relationship = this.flame.getRelationship(3);
      return expect(relationship).to.eql('affectionate');
    });

    it('should handle big numbers well', function () {
      const relationship = this.flame.getRelationship(67826);
      return expect(relationship).to.eql('friends');
    });

    it('should handle zeroes in the end', function () {
      const relationship = this.flame.getRelationship(20);
      return expect(relationship).to.eql('enemies');
    });

    it('should return friends for sub-zero', function () {
      const relationship = this.flame.getRelationship(-5);
      return expect(relationship).to.eql('friends');
    });
  });

  describe('#init', function () {
    it('should return proper result', function () {
      const result = this.flame.init();
      return expect(result.relationship).to.eql('affectionate');
    });

    it('should return the original names', function () {
      const result = this.flame.init();
      expect(result.firstName).to.eql('Joseph');
      expect(result.secondName).to.eql('Missy');
    });
  });
});
