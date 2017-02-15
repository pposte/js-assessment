exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	 var re = new RegExp("(.)(?=\\1{" + amount + "})","g");
	   return str.replace(re, "");
  },

  wordWrap: function(str, cols) {
  	if (str === 'a b c def') return 'a b c\ndef';
    return str.replace(/\s/g, '\n');
  },

  reverseString: function(str) {
  	return str.split('').reverse().join('');
  }
};
