function Pool(){
  this.pool = {};
  this.currKey = null;
}

Pool.prototype.start = function(key){
  this.currKey = key;
  var pool = this.pool;
  if(pool[key]){
    return false;
  }
  pool[key] = true;
  // var self = this;
  // return function(){
  //   return self.end(key);
  // }
}

Pool.prototype.end = function(key){
  var pool = this.pool;
  delete(pool[key]);
  if(key !== this.currKey){
    return false;
  }
  return true;
}
