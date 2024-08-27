//target : you are given an array . you have to check , if there is any element which is 6 . if there is a element which is 12, then you have to print the index of the 6 , if there isnot any 6 then you will skip 

var numbers = [1, 2, 4, 56,7 ,6 ,12 ,14 , 19 ];
console.log(numbers[5])
for(let i=0 ; i < numbers.length ; i++ ){
    let number = numbers[i]
      if(number === 6){
        console.log(i)
      }else{
        continue
      }    
}



// var nahin = [1 ,2 ,4 , 56,78 ]
// let alvi = nahin[2]
// console.log(alvi)