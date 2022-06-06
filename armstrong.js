
//31. armstrong
let n = 163;
num = n;
let z;
let a ;
let sum = 0;
while(n > 0){
   z = n % 10;
   a = z ** 3;
   sum = sum + a;
   n = n -z
   n = n / 10;
}
if(num == sum){
   console.log("The Number is Armstrong")
}
else{
   console.log("Not a Armstrong number")
}
