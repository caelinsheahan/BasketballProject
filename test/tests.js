const expect = chai.expect

describe('playernames', function() {
    it('is an array filled with objects', function() {
      expect(playernames).to.be.an('array').that.does.not.include('number').to.have.property('object');
    });
});

describe('name', function() {
    it('is a function', function() {
      expect(name).to.be.a('function')
    });
    it('returns an array location', function() {
      expect(name('caelin')).to.deep.equal([44])
    });
});
