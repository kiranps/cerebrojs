var io = require('socket.io-client');

(function(){
  var socket = io('http://localhost:8081');

  var console = window.console
  if (!console) return
  function intercept(method){
    var original = console[method]
    console[method] = function(message){
      // do sneaky stuff

      socket.emit('log', { type: method, message: message});

      if (original.apply){
        // Do this for normal browsers
        original.apply(console, arguments)
      }else{
        // Do this for IE
        var message = Array.prototype.slice.apply(arguments).join(' ')
        original(message)
      }
    }
  }

  var methods = ['log', 'warn', 'error']
  for (var i = 0; i < methods.length; i++)
    intercept(methods[i])

})();
