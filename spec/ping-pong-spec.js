// import { pingPong } from './../src/ping-pong';
var pingPong = require('./../src/ping-pong').pingPongModule
var pigs = require('./../src/ping-pong').pigsModule

describe('Ping Pong', function() {
  it('should test whether a pingpong will output a certain array', function() {
    expect(pingPong(3)).toEqual([ 1, 2, "ping"]);
    expect(pigs).toEqual("pigs");
  });
  it('2should test whether a pingpong will output a certain array', function() {
    // expect(pingPong(3)).toEqual([ 1, 2, "ping"]);
    expect(pigs).toEqual("pigs");
  });
});
