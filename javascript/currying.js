//  function addition(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
//  }
//  let res=addition (10)(20)(30)
//  console.log(res)


// //  //currying
// function add (a){
//   return  function(b){
//      return function(c){
//         return a+b+c

//      }
//     }
// } 
   
//   let result=add(10)(30)(40)

//   console.log(result)

// function ad(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }

//     }
        
//     }
//     let res=ad (10)(20)(30)
//    console.log(res)


// function add(e){
//     return function(r){
//         return function(t){
//             return e+r+t
//         }
//     }
// }
// let res = add(30)(50)(10)
// console.log(res);



// function hi(z){
//     return function(x){
//         return function(c){
//             return z+x+c
//         }
//     }
// }
// let res=hi(23)(34)(45)
// console.log(res);



// function a(z){
//     return function(x){
//         return function(c){
//             return z+x+c+
//         }
//     }
// }
// let res=a(11)(22)(33)
// console.log(res);



// function name(t) {
//     return function(r) {
//        return function(w){
//         return t+r+w
//        } 
//     }
    
// }
// let res=name(10)(20)(30)
// console.log(res);

// function name(t){
//     return function(y){
//     return function(u){
//         return t+y+u
//     }
//     }
// }
// const result = name(12)(34)(45)
// console.log(result);

// function add(a){
//     return function(b){
//         return function (c){
//             return a+b+c
//         }
//     }
// }
// const result = add(12)(34)(45)
// console.log(result);



// function x(a){
//     return function(b){
//         return a+b
//     }
// }
// const result = x(21)(32)
// console.log(result);
// function x(a){
//     return function(b){
//         return function(c){
//             return a+b+c

//         }
//     }
// }
// const result = x(12)(23)(56)
// console.log(result);


// function display(v){
//     return function(value1){
//         return function(value2){
//            return  function(value3){
//             return value1+value2+value3+v


//             }
//         }

//     }
// }
// const result=display(10)(20)(30)(40)

// console.log(result);


// function add(x){
//    return function(y){
//      return function(z){
//         return x+y+z
//      }
//    }
// }
// let result = add(12)(34)(56)
// console.log(result);
// function add(x){
//    return function(q){
//       return function (e){
//          return x+q+e
//       }
//    }
// }
// let result = add(12)(34)(45)
// console.log(result);

// function add(a){
//    return function (b){
//       return function (c){
//          return a+b+c
//       }
//    }
// }
// let result = add(12)(34)(56)
// console.log(result);


// function add(a){
//    return function(b){
//       return function(c){
//          return a+b+c
//       }
//    }
// }
// let result = add(12)(67)(90)
// console.log(result);

// function add (a){
//    return function(b){
//       return function(c){
//          return a+b+c
//       }
//    }
// }
// let result = add(12)(12)(12)
// console.log(result);


// function add(x){
//    return function(y){
//       return function(z){
//          return x+y+z
//       }
//    }
// }
// let result = add(12)(34)(45)
// console.log(result);


// function add(d){
//    return function(y){
//       return function(i){
//          return d+y+i
//       }
//    }
// }
// let result = add(5)(2)(2)
// console.log(result);
// function add(a){
//    return function(b){
//       return function(c){
//          return a+b+c
//       }
//    }
// }
// let result = add(41)(31)(21)
// console.log(result);


function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
let res = add(45)(21)(12)
console.log(res);