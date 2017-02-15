exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
  	var timeout;
      function counting() {
          console.log(start++);
          
          if (start <= end) {
              timeout = setTimeout(counting, 100);
          }
      }
      counting();
      return {
          cancel: function() {
              clearTimeout(timeout);
          }
      }
  }
};
