(function() {
  'use strict';

  angular
    .module('konami', [])
    .factory('konamiCode', konamiCode);

  function konamiCode() {

    return {
      set: set
    }

    function set(callback) {
      var seq = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
        i = 0;

      document.body.onkeydown = function(e) {
        if (e.keyCode === seq[i]) {
          i++;
          if (i > 9) {
            i = 0;
            callback.call(this);
          }
        } else {
          i = 0;
        }
      }
    }

  }

}());
