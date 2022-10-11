// 对象类型 包括函数、{}、数组和类
// object object 类型用于表示所有的非原始类型，
// 即我们不能把 number、string、boolean、symbol等 原始类型赋值给 object。
// 在严格模式下，null 和 undefined 类型也不能赋给 object。
let object: object;
// object = 1; // 报错
// object = "a"; // 报错
// object = true; // 报错
// object = null; // 报错
// object = undefined; // 报错
object = {}; // 编译正确

// 大 Object 代表所有拥有 toString、hasOwnProperty 方法的类型 
// 所以所有原始类型、非原始类型都可以赋给 Object(严格模式下 null 和 undefined 不可以)
let bigObject: Object;
let smallObject: Object;
smallObject = 1; // 编译正确
smallObject = "a"; // 编译正确
smallObject = true; // 编译正确
// smallObject = null; // 报错
// smallObject = undefined; // 报错
smallObject = {}; // ok

// {} 空对象类型和大 Object 一样 也是表示原始类型和非原始类型的集合

// 类 通过 Class 关键字来定义一个类
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    sayHi(): void{
        console.log(`Hi, ${this.name}`);
    }
}

// 数组 
const flag1: number[] = [1,2,3];
const flag2: Array<number> = [1,2,3];

// 函数
function add(x:number, y:number): number {
    return x + y;
}
// 函数表达式
const jia = function(x:number, y:number): number {
    return x + y;
}
// 接口定义函数
interface Add {
    (x: number, y: number): number;
}
// 可选参数
function minus (x: number, y?: number): number {
    return y? x - y : x;
}
// 默认参数
function Multiplication (x: number, y: number = 1): number {
    return x * y;
}
// 剩余参数
function reset (...numbers: number[]): number {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum +=numbers[i];
    }
    return sum; 
}
// 函数重载
// 函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。
// function add(x: number, y: number): number;
// function add(x: string, y: string): string;
// function add(x: any, y: any): any {
//   return x + y;
// }
// 上面的示例是给同一个函数提供多个函数类型定义，从而实现函数重载
// 需要注意的是：函数重载真正执行的是同名函数最后定义的函数体，在最后一个函数体定义之前全都属于函数类型定义，
//              不能写具体的函数实现方法，只能定义类型

// 类型推论：如果没有明确的指定类型，那么 TypeScript 会依照类型推论的规则推断出一个类型。
      //   而如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查

// 类型断言：某些情况下，我们可能比typescript更加清楚的知道某个变量的类型，所以我们可能希望手动指定一个值的类型
// 两种写法：尖括号写法
    let str1: any = "to be or not to be";
    let strLength1: number = (<string>str1).length;
//          as写法
    let str2: any = "to be or not to be";
    let strLength2: number = (str2 as string).length;

// 非空断言
// 在上下文中当类型检查器无法断定类型时，可以使用缀表达式操作符 ! 进行断言操作对象是非null和非undefined的类型，
// 即x!的值不会为 null 或 undefined
  let user: string | null | undefined;
  console.log(user!.toUpperCase()); // 编译正确
//   console.log(user.toUpperCase()); // 错误

// 确定赋值断言         定义了变量, 没有赋值就使用，则会报错
let value1:number
// console.log(value1); // Variable 'value' is used before being assigned.
let value2!:number
console.log(value2); // undefined 编译正确