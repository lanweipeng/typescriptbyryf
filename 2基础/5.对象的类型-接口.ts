//接口是行为的抽象，具体实现是由类(classes)去实现(implement)
//除了对类的一部分行为进行抽象外，也常用语对对象的形状进行描述，定义的变量比接口的属性少或多或少都不行
// interface Person {
//     name: string
//     age: number
// }
// let tom: Person = {
//     name: 'Tom',
//     age: 25
// }
//多
// interface Person {
//     name: string
//     age: number
// }
// let tom: Person = {
//     name: 'Tom',
//     age: 25,
//     height: 168
// }
//少
// interface Person {
//     name: string
//     age: number
// }
// let tom: Person = {
//     name: 'Tom'
// }

//可选属性
interface Person {
    name: string
    age?: number
}
let tom: Person = {
    name: 'Tom'
}
//编译成功