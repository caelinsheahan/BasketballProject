const expect = chai.expect

describe('playernames', function() {
    it('is an array filled with objects', function() {
      expect(playernames).to.be.an('array')
    });
    it('contains only strings', function() {
      expect(playernames).does.not.include('number')
    });
    it('is filled with players', function() {
      expect(playernames[160]).to.be.an('object');
    });
});

describe('name', function() {
    it('is a function', function() {
      expect(name).to.be.a('function')
    });
    it('returns an array location', function() {
      expect(name('caelin')).to.be.an('object')
    });
});

describe('storeaccess', function() {
    it('is an array with no numbers', function() {
      expect(storeaccess).to.be.an('array').that.does.not.include('number')
    });
});
describe('parsePersonPlayer', function() {
    it('take a person object and return an object of strings', function() {
      let person = {
        "firstName": "DeMar",
        "lastName": "DeRozan",
        "scrubBenchStarter": "good",
        "primarySkill": "dunking"
      }
      expect(parsePersonPlayer(person)).to.deep.equal({
          "playerId": "DeMar+DeRozan",
          "playerNewsID": "DeMarDeRozan",
          "playerskill": "dunking",
          "isplayergood": "good",
          "namestorage": [
            "DeMar",
            "DeRozan"
          ]
        }
      )
    });
});
