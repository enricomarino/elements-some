module.exports = function (elements) {

  elements.prototype.some = function (callback, context) {
    var list = this.list;
    var length = list.length;
    var element;
    var i;
    var test;
    
    for (i = 0; i < length; i += 1) {
      element = list[i];
      test = callback.call(context, element, i);
      if (test) {
        return true;
      }
    }
    
    return false;
  };

  return elements;
};
