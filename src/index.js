
exports.min = function min (array) {
  if (typeof array != "undefined"  
      && array != null  
      && array.length != null  
      && array.length > 0) {
        array.sort( (a,b) => a-b );
        return array[0];      
  } else {
      return 0;
  }
}

exports.max = function max (array) {
  if (typeof array != "undefined"  
      && array != null  
      && array.length != null  
      && array.length > 0) {
        array.sort( (a,b) => a-b );
        return array[array.length - 1];  
  } else {
      return 0;
  }
}

exports.avg = function avg (array) {
  if (typeof array != "undefined"  
      && array != null  
      && array.length != null  
      && array.length > 0) {
        let sum = array.reduce( (acc, item) => acc + item);
        return sum/array.length;  
  } else {
      return 0;
  }
}
