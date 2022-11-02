
let number =97;
let count = 0;
for(let i= 1;i<=number;i++){
    if(i%number==0){
        count++;
    }
}
if(count==2){
    console.log(number,"is a prime number");
}
else{
    console.log(number,"is not a prime number");
}