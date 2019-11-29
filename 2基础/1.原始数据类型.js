// boolean
// let isDone: boolean = false//编译通过
// let createdByBoolean: boolean = new Boolean(1)//报错
//Type 'Boolean' is not assignable to type 'boolean'.
// 'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
// let createdByBoolean: boolean = Boolean(0)//编译通过
// console.log(createdByBoolean)
// number
// let n: number = 8
// function logName(): void {
//     console.log('I am lwp')
// }
// let unusable: void = undefined
//声明void类型没什么用，只能赋值为undefined和null
//null undefined are all types of child type,他们可以赋值给其他类型
var num = undefined;
var u = num;
