// 字符串
const aStr:string = '限定字符串';
// boolean
const bool:boolean = true;
// 数字
const num:number = 123;
// 枚举
// 初始值默认为 0 其余的成员会会按顺序自动增长 可以理解为数组下标
// 可设置初始值
// 例如 enum direction { up = 2,down,left,right }
enum direction {
    up,down,left,right
}
// 字符串枚举
enum strEnum {
    up = '向上',down = '向下',left = '向左', right = '向右'
}
// 常量枚举
const enum body {
    head,eyes,ears,hand,foot,leg,arm
}
const aBody: body[] = [body.head, body.ears, body.eyes,body.hand];
const enumStr: strEnum = strEnum.left;
const dir: direction = direction.up;
// 数组枚举 只能定义出内部全为同种类型的数组
const arr: number[] = [0,1,2,3];
const arr2: Array<number> = [10,11,12,13];
// 元组tuple类型 对于内部不同类型的数组可以使用元组类型来定义
// 需要注意的是，元组类型只能表示一个已知元素数量和类型的数组，长度已指定，越界访问会提示错误。
// 例如，一个数组中可能有多种类型，数量和类型都不确定，那就直接any[]。
const tuple: [number, string] = [1, 'aaa'];

// 默认情况下 null 和 undefined 是所有类型的子类型。也就是说你可以把 null 和 undefined 赋值给其他类型。
let a: undefined = undefined;
let b: null = null;

let str: string = 'hhhhhh';
// str = null; // 编译正确      开启严格模式("strict": true/"strictNullChecks":true)之后编译不通过
// str = undefined; // 编译正确

// any会跳过类型检查器对值的检查，任何值都可以赋值给any类型
let value: any = 1;
value = "aaaaa"; // 编译正确
value = []; // 编译正确
value = {};// 编译正确

// void 意思就是无效的, 一般只用在函数上，告诉别人这个函数没有返回值。
function sayHello(): void {
    console.log("hello 啊，树哥！");
}

// never 类型
// never 类型表示的是那些永不存在的值的类型。
// 例如never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
// 值会永不存在的两种情况：
// 1 如果一个函数执行时抛出了异常，那么这个函数永远不存在返回值
//（因为抛出异常会直接中断程序运行，这使得程序运行不到返回值那一步，即具有不可达的终点，也就永不存在返回了）
// 2 函数中执行无限循环的代码（死循环），使得程序永远无法运行到函数返回值那一步，永不存在返回。

// Unknown 类型
// unknown与any一样，所有类型都可以分配给unknown:
// unknown与any的最大区别是：任何类型的值可以赋值给any，同时any类型的值也可以赋值给任何类型。
// unknown 任何类型的值都可以赋值给它，但它只能赋值给unknown和any

console.log('enum dir:', dir);
console.log('enumStr:', enumStr);
console.log('body:', aBody);
