require('../db_helper')
var mongoose = require('mongoose');
const VRM  = require('../../models/vrm.js');

describe('VRM model', function() { 
  beforeEach(function(done) {
    mongoose.connection.collections.vrms.drop(function() {
      done();
    });
});

  it('has a vrm in the query', () => {
      var query = new VRM({ vrm: 'A1'});
      expect(query.vrm).toEqual('A1');
    });
    
  it('can list all searches', function() {
    VRM.find(function(err, searches){
      expect(err).toBeNull();
      expect(searches).toEqual([]);
      done();
    })
  });

  it('can save a search', function() {
    var search = new VRM({ vrm: 'A!'});

    search.save(function(err) {
      expect(err).toBeNull();


      VRM.find(function(err, vrm){
        expect(vrm[0].toMatchObject({ vrm: 'A1'}));
        done();
      })
    });
  });
});