var HoldBack = require('./index');
var holdBack = new HoldBack();

function asyncChange(key, ms){
  var isAlreadyStart = holdBack.start(key);
  if(isAlreadyStart){
    return; //阻止重复加载.
  }
  setTimeout(() => {
    var isExpect = holdBack.end(key);
    if(isExpect){
      console.log('key', key);
     }
    }, ms);
}
asyncChange('slow', 1000);
asyncChange('fast', 100);
