const obj = {
  name: 'Jack',
  age: 18
};

const proxy = new Proxy(obj, {
  get: function (target, proKey) {
    if (target.hasOwnProperty(proKey)) return target[proKey];
    else return `property is not defined on itself.`;
  }
});

// 当读取对象属性时，被拦截器拦截，执行拦截器中的行为
// console.log(proxy.name);
// console.log(proxy.high);

// proxy实例可以作为原型对象
const otherObj = Object.create(proxy);
// console.log(otherObj);
console.log(otherObj.name);
console.log(otherObj.high);

console.log(Object.getPrototypeOf(otherObj));

