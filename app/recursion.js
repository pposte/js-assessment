exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  	var out = [];
      var list = !dirName || data.dir === dirName;
      for (var i = 0; i < data.files.length; i++) {
        if (typeof data.files[i] === 'string') {
          if (list) {
            out.push(data.files[i]);
          }
        } else if (!list) {
          out = out.concat(this.listFiles(data.files[i], dirName));
        } else {
          out = out.concat(this.listFiles(data.files[i]));
        }
      }
      return out;
  },

  permute: function(arr) {
  	var out = [];
    
    var innerPermute = function(array, build) {
      var current;
      for (var i = 0; i < array.length; i++) {
        current = array.splice(i, 1);
        if (array.length === 0) {
          out.push(build.concat(current));
        } else {
          innerPermute(array.slice(), build.concat(current));
        }
        array.splice(i, 0, current[0]);
      }
      return out;
    }
    return innerPermute(arr, []);

  },

  fibonacci: function(n) {
  var last = 0, current = 1, next = 1, i;
	if(n <= 0) {
		return 0;
	}
	for(i = 1; i<n; i++) {
		last = current;
		current = next;
		next = last + current;
	}
	return current;
},
  validParentheses: function(n) {
  	var open = 0;
  for( var x = 0; x < n.length; x++ ){
    console.log("open:",open);
    if(n.charAt(x)==="("){ 
      open++; 
    }else if(n.charAt(x)===")"){
      open--;
    }else {
    }
    if(open < 0 ){
      return false;
    }
  }
  if(open !== 0 ){
    return false;
  }else{
    return true;
  }
  }
};
