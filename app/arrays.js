exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1; 
  },

  sum: function(arr) {
    var sum = 0;
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      sum += arr[i];
    }

    return sum;
  },

  remove: function(arr, item) {
    var returnArray = [];
    var len = arr.length;
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] !== item) {
        returnArray.push(arr[i]);
      }
    }
    return returnArray;
  },

  removeWithoutCopy: function(arr, item) {

    var len = arr.length;

    for (var i = 0; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
     arr.push(item);
      return arr;
  },

  truncate: function(arr) {
    arr.pop();
     return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
     return arr;
  },

  curtail: function(arr) {
    arr.shift(arr);
     return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
     return arr;
  },

  count: function(arr, item) {
    var count = 0;
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    var darr =[];
    var duplicate=[];
    var len = arr.length;
   for(var i = 0; i < len; i++){
    if(darr.includes(arr[i]) && !duplicate.includes(arr[i]))
     duplicate.push(arr[i])
    else
     darr.push(arr[i]);
    }
   return duplicate;
  },

  square: function(arr) {
    var retArr = [];
    var len  = arr.length;

    for (var i = 0; i < len; i++) {
      retArr.push(arr[i] * arr[i]);
    }
    return retArr;
  },

  findAllOccurrences: function(arr, target) {
    var retArr = [];
    var len = arr.length;

    for (var i = 0; i < len; i++) {
      if (arr[i] === target) {
        retArr.push(i);
      }
    }

    return retArr;
  }
};
