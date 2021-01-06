const aObj = require('./a')
// import aObj from './a';
console.log(aObj)
setTimeout(() => {
    aObj.a = 100
    // console.log(aObj)
}, 1000)