const expect = require('chai').expect;
const Flame = require('../flame');

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

      expect(flame).to.throw(Error, 'Please provide both names.');
    });
  });

  it('should return lowercase names', function () {
    expect(this.flame.first).to.eql('joseph');
    expect(this.flame.second).to.eql('missy');
  });

  it('should initiate empty similarities array', function () {
    expect(this.flame.similars).to.have.length(0);
  });

  it('should store names in their original form', function () {
    expect(this.flame.original).to.eql({
      firstName: 'Joseph',
      secondName: 'Missy'
    });
  });

  describe('#getSimilarLetters', function () {
    it('should return correct values', function () {
      const letters = this.flame.getSimilarLetters();
      expect(letters).to.eql(['s']);
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
      expect(relationship).to.eql('affection');
    });

    it('should handle big numbers well', function () {
      const relationship = this.flame.getRelationship(67826);
      expect(relationship).to.eql('friendship');
    });

    it('should handle zeroes in the end', function () {
      const relationship = this.flame.getRelationship(20);
      expect(relationship).to.eql('enemies');
    });
  });

  describe('#init', function () {
    it('should return proper result', function () {
      const result = this.flame.init();
      expect(result.relationship).to.eql('affection');
    });

    it('should return the original names', function () {
      const result = this.flame.init();
      expect(result.firstName).to.eql('Joseph');
      expect(result.secondName).to.eql('Missy');
    });
  });
});
