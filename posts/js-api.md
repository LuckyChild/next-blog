---
title: 'JS API'
date: '2020-01-01'
---

# 1、reduce()方法详解

```js

/**
 * @param  {[type]} acc [return 返回的值]
 * @param  {[type]} cur [当前的值]
 * @param  {[type]} index [当前索引]
 * @param  {[type]} self [源数组]
 * @param  {[type]} initValue [初始值，如果传了该值，acc的第一个值就是initValue]
 */
 
 arr.reduce((acc, cur, index, self) => {
     //todo
     return acc;
 }, initValue)

```

```js

/**
 * reduce 累加
 */
let arr1 = [1, 2, 3];
let newarr1 = arr1.reduce((acc, cur, index, self) => {
	return acc + cur;		//acc的第一个值是1， 第二值为acc+cur的值，以此类推；最终返回的就是相加后的值 
});


```

``` js

/**
 * reduce去重
 * @param  { 需要去重的数组 } arr 
 */
let arr2 = [1, 2, 3, 4, 2, 1, 3, 4, 2]
function reduceUnique(arr) {
    return arr.reduce((acc, cur, index, self) => {
        if(acc.indexOf(cur) == -1){
            acc.push(cur);
        }
        return acc;
    }, [])
}
let uniquedArr = reduceUnique(arr2);


```

```js

/**
 * reduce 统计数组内元素出现的次数；
 * @param  { 需要统计的数组 } arr
 */
function reduceCount(arr){
    return arr.reduce((acc, cur, index, self) => {
        if(cur in acc){		//in：判断cur属性是否存在acc对象中；in也会查找原型上的属性；for...in会循环出继承（包括原型上）的属性，所以如果只需要获取自身属性，可以通过obj.hasOwnProperty(item)来筛选；
            acc[cur]++;
        } else {
            acc[cur] = 1;
        }
        return acc;
    }, {})
}
let arr3 = ["as", "ass", "cs", "cs", "ds", "ds", "ds", "ass"]
let count = reduceCount(arr3);

```

```js

/**
 * reduce 将二维数组转为一维数组；
 * @param  { 需要转化的原始数组 } arr
 */
function covertArr(arr){
    return arr.reduce((acc, cur, index, self) => {
        return acc.concat(cur);
    }, [])
}
let arr6 = [1, 2, [2, 3], [1, 3]];
let newarr6 = covertArr(arr6);

```

```js

/**
 * 按照属性对Object分类
 * @param  { 需要操作的数组对象 } objectArray 
 * @param  { 指定属性 } property
 */
function groupBy(objectArray, property){
    return objectArray.reduce((acc, cur, index, self) => {
        let key = cur[property];	//先获取当前对象中需要操作的属性
        if(!acc[key]{				//判断最终返回的对象中是否已经存在该属性，如果没有，则赋值空数组；
            acc[key] = [];				
        }
        acc[key].push(cur);			//再就将当前的cur对象插入到最终要返回的acc对象中的属性数组中；
        return acc;
    }, {})							//此时acc的第一次的值就是{}；
}
let arr3 = [{
   	name: 'Anna',
	books: ['Bible', 'Harry Potter'],
	age: 21
}, {
	name: 'Bob',
	books: ['War and peace', 'Romeo and Juliet'],
	age: 26
}, {
	name: 'Alice',
	books: ['The Lord of the Rings', 'The Shining'],
	age: 18
}, {
	name: 'Jack'
	books: ['Javascript', 'ES6'],
	age: 18
}];
let newarr3 = groupBy(arr3, age);

```

```js

/**
 * reduce按顺序运行promise
 * @param  { 需要操作的promise数组 } arr
 * @param  { 初始值 } num
 */
function promiseReduce(arr, num){
    return arr.reduce((acc, cur, index, self) => {
        return acc.then(cur)	//acc的第一个值就是Promise.resolve(num)
    }, Promise.resolve(num));
}
function p1(a){
    return new Promise((resolve, reject) => {
        resolve(a*5)
    });
}
function p2(a){
    return new Promise((resolve, reject) => {
        resolve(a*4)
    });
}
let promiseArr = [p1, p2];
promiseReduce(promiseArr, 10).then((res) => {
    console.log(res);
});

```

















