//any 允许赋值为任意类型
// let num: number = 7
// let a: any = num
// console.log(num, a)

//在任意值上可以访问任何属性和调用任何方法(ts 不报错但是js运行错误)
// let anyThing: any = 'hello'
// console.log(anyThing.myName)
// console.log(anyThing.myName.firstName)
// anyThing.setName('Jerry')
// anyThing.setName('Jerry').sayHello()
// anyThing.myName.setFirstName('Cat')

//未声明类型被识别为any
// let someThing;
// someThing = 'seven'
// someThing = 7
// console.log(someThing)

