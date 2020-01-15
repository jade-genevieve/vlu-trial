// const mongoose = require('mongoose');
const VRM  = require('../../models/vrm.js');

it('has a vrm in the query', () => {
    var query = new VRM('A1');
    console.log('hdj', query)
    expect(query.vrm).toEqual('A1');
  });
  