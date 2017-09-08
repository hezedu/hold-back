# hold-back
解决多个异步数据同一个容器渲染混乱的问题。该问题详见： https://hezedu.github.io/hold-back/
## Install
`npm install hold-back`
## API
### 引用
COMMONJS:
```js
var HoldBack = require('hold-back');
```
`./dist`文件夹下文件支持`AMD`加载。直接**src**的话，会暴露一个全局变量：`HoldBack`

### 生成实例
```js
var holdBack = new HoldBack();
```
### holdBack.start(key)
异步流开始时使用.

`key` ___Number___或___String___, 异步流的唯一标实.

  **return** ___Boolean___<br/>
    `true` 表示当前异步流已存在.<br/>
    `false` 表示当前异步流是新创建的.

### holdBack.end(key)
异步流结束时使用.跟`holdBack.start(key)`对应.

`key` ___Number___或___String___, 异步流的唯一标实.

  **return** ___Boolean___<br/>
    `true` 表示当前异步流**是你期望的**.<br/>
    `false` 表示当前异步流不是你期望的.

## 示例
```js
var HoldBack = require('hold-back');
var holdBack = new HoldBack();

function asyncLog(key, ms){
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
asyncLog('slow', 1000);
asyncLog('fast', 100);

// only log: fast
```
