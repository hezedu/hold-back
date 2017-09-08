# hold-back
Demo https://hezedu.github.io/hold-back/
## Install
`npm install hold-back`
## API
### 生成实例
```js
var HoldBack = require('hold-back');
var holdBack = new HoldBack();
```
### holdBack.start(key)
异步流开始时使用.

`key` Number或String, 异步流的唯一标实.

  **return** Boolean<br/>
    true 表示当前异步流已存在.<br/>
    false 表示当前异步流是新创建的.
    
### holdBack.end(key)
异步流结束时使用.跟`holdBack.start(key)`对应.

`key` Number或String, 异步流的唯一标实.

  **return** Boolean<br/>
    true 表示当前异步流**是你期望的**.<br/>
    false 表示当前异步流不是你期望的.

## 示例
```js
var dom = document.getElementById('someId');
var HoldBack = require('hold-back');
var holdBack = new HoldBack();

var key = 'first';

var isAlreadyStart = holdBack.start(key);
if(isAlreadyStart){
  //你可以在这阻止, 防止重复加载.
  return;
}

setTimeout(() => {

  var isHope = holdBack.end(key);
  if(isHope){
    dom.innerHTML = key;
   }
   
  }, 1000);
```
