// let n = 4;
// let task = [[1, 2], [1, 5], [2, 3], [2, 5], [3, 4], [2, 4]];
// let time = 0;
// let q = [];
// let cores = q.length;
// let i = 0;
// while (time < n) {
//     for (let i = 0; i < task.length; ++i) {
//         if (task[i][0] === time) {
//             q.push(task[i][1]);
//         }
//         if (i < q.length && q[i] === time) {
//             q.splice(i, 1);
//         }
//     }
//     cores = Math.max(cores, q.length);
//     ++time;
// }
// console.log(cores);






// let arr = [1, 2, 3, 4]
// [arr[1], arr[2]] = [arr[2], arr[1]]
// console.log(arr)



// let arr = [1, 2, 3, 4];
// [arr[1], arr[2]] = [arr[2], arr[1]];
// console.log(arr)





// let arr = [[1, 2], [1, 4], [2, 3], [4, 5]]

// let count = 1


// arr = arr.sort((a, b) => { return a[1] - b[1] })
// let orig = arr.flat()
// console.log(orig)
// let stack = []
// for (let i = 1; i < orig.length - 2; i += 2) {
//     //  console.log(i, orig[i + 1], orig[i])
//     stack.push(orig[i])
//     if (orig[i + 1] < orig[i]) {
//         if (orig[i + 1] != stack.shift())
//             count++
//         console.log(stack)
//     }


// }
// function promise1() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise1 is resolved")
//         }, 0)
//     })
//     return promise
// }

// function promise2() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise2 is resolved")
//         }, 0)
//     })
//     return promise
// }





// console.log("working1")
// async function ans() {
//     console.log("working")
//     let res1 = await promise1()
//     console.log(res1)
//     console.log(" doubt")
//     let res2 = await promise2()
//     console.log(res2)
//     console.log("working3")
// }

// ans()
// console.log("working2")




// let num = '1000010000100011'

// num = num.split('')
// let count = 0
// for (let i = 0; i < num.length - 1; i++) {

//     if (num[i] == 1 && num[i + 1] != 1) count++
// }
// console.log(count)


// let arr = '00000000111'
// arr = arr.split('')
// let start = 0;
// let end = arr.length - 1;
// let count = 0;
// while (start < end) {
//     while (arr[start] === 0) ++start;
//     while (arr[end] === 1) --end;
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     ++start;
//     --end;
//     ++count;
// }
// console.log(arr, count)


// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     printNameArrow() {
//         setTimeout(() => console.log('Arrow : ', this.name), 0);
//     }
//     printNameFunction() {
//         setTimeout(function () {
//             console.log('Function : ', this.name)
//         }, 0);
//     }
// }
// this.name = 'Bob';
// console.log('Global : ', this.name);
// let person1 = new Person('Abi');
// person1.printNameArrow();
// person1.printNameFunction();



// const person2 = {
//     name: 'Abi',
//     sayHiFunction: function () {
//         console.log('Function : ', this.name);
//     },
//     sayHiArrow: () => console.log('Arrow : ', name)
// }
// var name = 'Bob';
// console.log('Global : ', this.name);
// person2.sayHiArrow();
// person2.sayHiFunction();


// let row = 5


// for (let i = 0; i < row; i++) {
//     str = ''
//     for (j = 0; j < row - i; j++) {
//         str += ' '
//     }
//     for (let k = 0; k < 2 * i + 1; k++) {
//         str += "*"
//     }
//     console.log(str)
// }



//let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'


// function findFreq(str) {

//     let map = {}, res = []
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] != ' ' && str[i] != ',' && str[i] != '.')
//             map[str[i]] = (map[str[i]] || 0) + 1

//     }
//     console.log(map)


//     mapArr = [...(Object.entries(map))]
//     //mapArr.flat()
//     mapArr = mapArr.sort((a, b) => { return b[1] - a[1] })
//     mapArr.flat()
//     console.log(mapArr)
// }


// findFreq(str)

// function lcm(a, b) {
//     let res = (a > b ? a : b);

//     while (1) {
//         if (res % a == 0 && res % b == 0) {
//             return res
//             break;
//         }
//         else ++res;
//     }

// }
// function solution(a, b) {

//     let l = lcm(a, b)
//     console.log(l)

// }
// console.log(solution(4919, 351))


// function solution(num) {
//     var ele = 0, i = 0, count = 0, temp = num, dig = 0
//     while (temp > 0) {
//         temp = parseInt(temp / 10)
//         dig++
//     }
//     console.log(dig)
//     let j = 0, mult = ''
//     while (j < dig) {
//         mult += '1'
//         j++
//     }

//     mult = Number(mult)
//     console.log(mult)
//     while (ele <= num) {
//         ele = mult * i + mult
//         i++
//         count += dig
//     }
//     console.log(count)
//     count += ele - num

//     return count
// }


// let res = solution(1234)
// console.log(res)

// function sum(n) {
//     var sum = 0;
//     while (n != 0) {
//         sum = sum + n % 10;
//         n = parseInt(n / 10);
//     }
//     return sum;
// }

// function solution(num) {

//     for (let i = num; ; i++) {
//         let s = sum(i)
//         console.log(s)
//         if (s % 4 == 0) {
//             return i;
// //             break;
// //         }
// //         else continue;
// //     }
// // }


// // let res = solution(432)
// // console.log(res)
// function countDigit(num) {
//     if (num === 0) return 1
//     return ~~(Math.log10(num) + 1)
// }
// function magicNumber(dig) {
//     return parseInt('1'.repeat(dig))

// }
// function solution(num) {
//     let count = 0
//     let dig = countDigit(num)
//     let magic = magicNumber(dig)
//     while (magic < num) {

//         count += dig
//         num = num - magic
//         dig = countDigit(num)
//         magic = magicNumber(dig)

//     }
//     console.log(num, dig, magic)
//     count += num - magic
//     return count
// }

// let ans = solution(32)
// console.log(ans)

// //



// this.name = 'be'


// const obj = {
//     //name: 'he',
//     a: function () {

//         console.log(`${this.name}`)
//     },


//     b: _ => console.log(`${this.name}`)

// }



// // obj.a()
// // obj.b()


// // var Person = {
// //     name: "Abi",
// //     arrow: () => {
// //         setTimeout(() => console.log(this.name), 0);
// //     },
// //     named: function () {
// //         // let that = this.name;
// //         setTimeout(function () { console.log(this.name) }, 0);
// //     }
// // }
// // // let person1 = Person();

// // //let person1 = Person.bind(Person);

// // let person1 = Person.arrow.bind(Person);
// // person1()

// //person1.bind(Person)


// // function calculate(a, b, operation) {
// //     let res = operation(a, b)
// //     return res
// //     // console.log(res)
// // }

// function calculate(a, b, operation) {
//     return new Promise((resolve, reject) => {
//         let res = operation(a, b)
//         if (res == null) {
//             reject('Failed')
//         }
//         else {
//             resolve(res)
//         }
//     })
// }
// function divide(a, b) {
//     if (b === 0) return null;
//     return a / b;
// }
// function sum(a, b) {
//     return a + b
// }

// calculate(1, 1, divide).then(result => console.log(result)).catch(err => console.log(err))
// //console.log(ans)




// function abc() {

//     for (var i = 0; i < 5; i++) {
//         function x(i) {
//             setTimeout(() => console.log(i), i * 1000)
//         }


//         x(i)
//     }



// }

// abc()








//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//1 2 3 4 5 6 7 8 9 10
//0 1 2 3 4 5 6 7 8 9

//k = 2

//o/p ---> -1 2 1 4 3 6 5 8 7 10


// index     ele
//  i+k      arr[i]
//
// let k = 2
// let prev = -1
// for (let i = 0; i < arr.length; i = i + k) {
//     // console.log()

//     //if (i == 0) arr[i] = -1
//     let temp = arr[i]
//     arr[i] = prev
//     prev = temp


// }

// console.log(arr)





// function abc(req, res) {
//     return res.status().send({ data: req.body })
// }


// let str = Math.floor((Math.random() * 100000))






// let arr = [2, 3, 4, 5, 6, 7]    // 6 , 2,  4
// // 6 , 3 , 3
// //let n = 2

// function abc(arr, n) {
//     let res = []
//     for (let i = 0; i < arr.length; i = i + n) {
//         //console.log(i)
//         res.push([arr[i], arr[i + 1]])
//     }
//     console.log(res)
// }

// abc(arr, 2)

//23 //


// let n = 24
// n = n ^ n - 1
// let count = 0;
// while (n) {

//     if (n & 1 == 1) {
//         ++count;
//         n = n >> 1
//     }

//     else break;

// }
// console.log(count)




// class node {
//     constructor(val) {
//         this.val = val
//         this.left = null
//         this.rigth = null
//     }
// }

// class BST {

//     constructor() {
//         this.root = null 
//     }
//     insert(val) {
//         let newNode = new Node(val) 
//         if (this.root == null) {
//             this.root = newNode
//             return this
//         }
//         while(true){
//             if()
//         }
//     }

// }

// var greeting = 'hi';

// const obj = {
//     greeting: 'hey',

//     fo() {
//         const greeting = 'hola';

//         const fo2 = function () {
//             const greeting = 'hello';

//             const arrowFo = () => {
//                 console.log(this.greeting);
//             };

//             return arrowFo
//         };

//         return fo2
//     },
// };

// obj.fo().fo2.arrowFo();

this.greeting = 'hi';

const obj = {
    greeting: 'hey',

    fo() {
        const greeting = 'hola';

        this.fo2 = function () {
            const greeting = 'hello';

            this.arrowFo = () => {
                console.log(this.greeting);
            };

            this.arrowFo();
        };
        this.fo2();
    },
};

obj.fo();