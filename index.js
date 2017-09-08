function HoldBack(){
  this.pool = {};
  this.currKey = null;
}

HoldBack.prototype.start = function(key){
  this.currKey = key;
  var pool = this.pool;
  if(pool[key]){
    return true;
  }
  pool[key] = true;
  return false;
}

HoldBack.prototype.end = function(key){
  var pool = this.pool;
  delete(pool[key]);
  if(key !== this.currKey){
    return false;
  }
  return true;
}

module.exports = HoldBack;
