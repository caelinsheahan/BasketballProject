const expect = chai.expect

describe('playernames', function() {
    it('is an array filled with objects', function() {
      expect(playernames).to.be.an('array').that.does.not.include('number').to.have.property('object');
    });
    it('contains only strings', function() {
      expect(playernames).does.not.include('number')
    });
    it('is filled with players', function() {
      expect(playernames[22]).to.be.an('object');
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

describe('storeaccess', function() {
    it('is an array with no numbers', function() {
      expect(storeaccess).to.be.an('array').that.does.not.include('number')
    });
});
