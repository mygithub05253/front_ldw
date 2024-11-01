// 함축형 함수 문법
// 정적 바인딩
function implicitReturnFunction() {
  return 1234;
}

const implicitReturnFunction2 = () => {
  return 1 + 1;
}

let implicitFuncValue : number = implicitReturnFunction();
let implicitFuncValue2 : number = implicitReturnFunction2();

// 설명형 함수 문법
function explicitReturnFunction(): boolean {
  return false;
}

const explicitReturnFunction2 = (): number[] => {
  return [1, 2, 3, 4];
}

// 매개변수
function funcWithParams(x:number, y:number, z:number):number {
  return x + y + z;
}

const funcWithParams2 = (x:number, y:number, z:number):string => {
  return (x + y + z).toString();
}

// Optional Parameter
function funcWithOptional(x:number, y?:number, z?:number) {
  if(y === undefined) {
    return x;
  }
  if(z === undefined) {
    return x + y;
  }
  return x + y + z;
}

console.log(funcWithOptional(10))
console.log(funcWithOptional(10, 20))
console.log(funcWithOptional(10, 20, 30))

// Rest Parameter
const funcWithParams3 = (...numbers:number[]):number => {
  let total : number = 0;
  for(let number of numbers) {
    total += number;
  }
  return total;
}

console.log(funcWithParams3(7, 30, 40, 50, 200))