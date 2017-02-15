exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(arg) {
      return str + ', ' + arg;
    };
  },

  makeClosures: function(arr, fn) {
    var ret = [];
    var func = function(val) {
        return function () { return fn(val); };
    };
      
    for (var i = 0; i < arr.length; i++) {
        ret.push(func(arr[i]));
    }
    return ret;
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    var sum = 0; 
      for (var i = 0; i < arguments.length; i++) {
          sum += arguments[i]
      }
      return sum;
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    var i, lenOut, argsOut = [];
    for(i = 1, lenOut = arguments.length; i < lenOut; i++) {
      argsOut.push(arguments[i]);
    }
    return function() {
    var j, lenIn, argsIn = [];
    for(j = 0, lenIn = arguments.length; j < lenIn; j++) {
      argsIn.push(arguments[j]);
    }
    return fn.apply(this, argsOut.concat(argsIn));
  };
  },

  curryIt: function(fn) {
    var n = fn.length;
    var args = [];
    return function(val) {
        args.push(val);
        if (args.length === n) {
            return fn.apply(this, args);
        } else {
            return arguments.callee;
        }
    }

    }
};
