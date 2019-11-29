// let union: string | number

//访问联合类型只能访问此联合类型的共有属性或方法
// function getLength(something: string | number): number {
//     return something.length
// }
//Property 'length' does not exist on type 'string | number'.
// Property 'length' does not exist on type 'number'.

//联合类型被赋值时，会根据类型推论的规则推断出一个类型
// let sn: string | number
// sn = 'hh'
// console.log(sn.length)//2
// sn = 7
// console.log(sn.length)//报错