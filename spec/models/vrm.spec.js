const VRM  = require('../../models/vrm.js');

describe('VRM model', function() { 
  it('has a vrm in the query', () => {
      var query = new VRM('A1');
      console.log('hdj', query)
      expect(query.vrm).toEqual('A1');
    });
    
  it('can list all searches', function() {
    var searches = VRM.all();
    expect(searches).toEqual([]);
  });

  it('can save a search', function() {
    var search = new VRM('some A1');
    search.save();
    expect(VRM.all()).toContain(search);
  });
});