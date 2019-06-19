// // console.log("gehehe");

// // const variable = 1000;
// // console.log(variable);//1000
// // variable = "Hello";
// // console.log(variable);

// let a = 10;
// var b = "hello";

// console.log(a, b);

// console.log(typeof a);
// console.log(typeof(b));

// a = true;
// b = 1000;
//  console.log(a , b);

// console.log(typeof a);
// console.log(typeof(b));

// a = null;
// b = 1000;
//  console.log(a , b);

// console.log(typeof a);
// console.log(typeof(b));
// console.log(typeof undefinedVar);//undefined

// var obj = {
//     a:5,
//     b:"Helllllllooooooooooooooooooooooooooooooo"
// }



// console.log(obj.a);
// console.log(obj["a"]);
// console.log(obj.b);
// console.log(obj["b"]);

// obj["a"] = true;
// console.log(obj["a"]);

// obj.c = 2000;
// console.log(obj["c"]);

// console.log(obj);

// delete obj.b;
// console.log(obj.a);
// console.log(obj["b"]);
// console.log(obj.c);
// console.log(obj["a"]);

// const arr = [1, "hush", true, 25]
// console.log(arr);
// console.log(arr.length);
// console.log(arr.push("b"));
// console.log(arr);

// console.log((122.2321).toFixed(2));
// console.log("duhdGWDUdvIdcdG".toLocaleLowerCase());
// console.log("duhdGWDUdvIdcdG".toLocaleUpperCase());

// console.log(new Date());
// console.log(new Date().toDateString);
// console.log(new RegExp('([A-Z])\w+').test('Adcw UUIWH'));
// console.log(/([A-Z])\w+/.test('idehie'));


// const error = new Error("LOI!");
// error.name = "error";
// throw error;

// a = "hello";
// function aFunction() {
//     var b = "World";

//     function bFunction() {
//         console.log(a);
//         console.log(b);
//     }
//     bFunction();
// }

// //bFunction();

// aFunction();

// console.log(a);
// //console.log(b);

// let c = 10;
// if (true) {
//     //let d = 100;//error
//     var d = 100;
//     console.log(c);
//     console.log(d);
// } else {
    
// }
// console.log(c);
// console.log(d);

function countDown(count) {
    var i = count;
    for (var i = count; i >= 0; i--) {
        //print(i, count - i);
        setTimeout(function(){ 
            //console.log(count - i);
            console.log(i);
        }, 1000*(count -i));
    }
}

// function print(number, wait) {
//         setTimeout(function(){ 
//             //console.log(count - i);
//             console.log(number);
//         }, 1000*(wait));
// }

// function countDown(count) {
//     var i = count;
//     for (var i = count; i >= 0; i--) {
//         print(i, count - i);
//         // setTimeout(function(){ 
//         //     //console.log(count - i);
//         //     console.log(i);
//         // }, 1000*(count -i));
//     }
// }
//countDown(5);
// const cdClone = countDown;
// cdClone(10);

// console.log("Start");

// setTimeout(function(){ 
//     //console.log(count - i);
//     console.log("Running");
// }, 0);

// console.log("End");
function waitGF(callback) {
     setTimeout(function(){ 
    //console.log(count - i);
     console.log("Running");
    }, 1000);
    callback();
}
function goOut() {
    setTimeout(function(){ 
   //console.log(count - i);
    console.log("Going out");
   }, 5000);
}

waitGF(goOut);
