let arr =[]
for(let i = 1; i <= 100; i++){
  arr.push(i);
  }
for(let i = 0; i < arr.length; i++){
  if(arr[i] % 3 === 0 && arr[i] % 5 === 0){
     arr[i] = "FizzBuzz";
   }
  else if(arr[i] % 5 === 0){
    arr[i] = "Buzz"
    }
  else if(arr[i] % 3 === 0){
    arr[i] = "Fizz";
    }
  else{
    arr[i] = arr[i]
    }
console.log(arr[i])
  }