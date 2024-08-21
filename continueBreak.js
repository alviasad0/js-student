//target : print all the even number from the given array

// var numbers = [10 ,11 ,13 ,5 ,4, 9, 23, 22 ,21, 47, 49 ,100 ,112, 16]

// var currentNumber = 0;
// while(currentNumber< numbers.length){
//    var num = numbers[currentNumber]
   
//    if(num%2===0){
//     console.log(num)
//    }
// currentNumber++
   
// }


//target : print all the odd from the given aray 
// var numbers = [10 ,11 ,13 ,5 ,4, 9, 23, 22 ,21, 47, 49 ,100 ,112, 16]
// for(let currentNumber=0;currentNumber< numbers.length;currentNumber++){
//    var num = numbers[currentNumber] 
//    if(num%2 !== 0 ){
//     console.log(num)
//    }
// }

// for(let i=0;i<numbers.length;i++){
//     var num= numbers[i]
//     if(num%2 !== 0 ){
//         console.log(num)
//        }
// }




//print all the number form the given array without 4in the console 
//  var numbers = [10 ,11 ,13 ,5 , 9, 23, 22 ,3,5,21, 47, 49 ,100 ,112, 16]
//  for(let i =0; i<numbers.length;i++){
//  let num = numbers[i]
//  if(num===3){
//      continue//skip
//     }else{
//     console.log(num)
//  }
//  }


// //print all the country name without India 
// var countries = ["Bangladesh", "India" ,"SP", "In", "USA", "UK", 'MS' , "Japan", "China","India","Pakistan" ,"UAE", "Russia", "India" ]

// let countryIndex = 0 ;
// while(countryIndex<countries.length){
//     let country = countries[countryIndex]
//     if(country!=="India"){
//         console.log(country)
//     }else{
//         // continue
//     }
//     countryIndex++
// } 


//print all the number from 1-10  except the number 3, 4, 7

// for(let i=1;i<=10;i++){
//     if(i===3 || i===4 || i===7){
//         continue
//     }else{
//         console.log(i)
//     }

//     // console.log(i)
// }


//print all the prime numbers from 2-100

for(i=2;i<=100; i++){
    if(i<=5){
        if(i%1==0 && i%i==0 ){
            console.log(i)
        }

    }else if(5<i<=9){
        if(i%1==0 && i%i==0 &&(i%2!==0) && (i%3!==0)){
            console.log(i)
        }
    }else{
        if(i%1==0 && i%i==0&&(i%2!==0) && (i%3!==0)  && (i%4!=0)  && (i%5!=0)  && (i%6!=0)  && (i%7!=0)  && (i%8!=0)  && (i%9!==0)  ){
            console.log(i)
        }
    }
}