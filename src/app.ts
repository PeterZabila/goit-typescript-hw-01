const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}


let age:number;
age = 50;
let toggle:boolean 
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;
let callback: (a:number) => number = (a) => { return 100 + a };

let anything:any;
anything = -20;
anything = 'Text';
anything = {};


// NEWNEWNEWNENWWWNEN
// enum Status {LOADING, READY};
// let str: string | number;
// let literal: 'enable' | 'disable';

// function showMessage(message:string):void {
//   console.log(message);
// }

// function calc(num1:number, num2:number): number {
//   return num1 + num2;
// }

// function customError():never {
//   throw new Error('Error');
// }

// type PageType = {
//   title:string,
//   likes:number,
//   accounts: string[],
//   status:string,
//   details?: {createdAt: Date, updatedAt: Date}
// }

// const page2: PageType = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }