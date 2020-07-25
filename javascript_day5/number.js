console.log("enter the positive numbers");
 
 let num=prompt("enter the numbers");
 for(i=0;i<=num;i++){
     var i=prompt("enter the numbers");
    var nums=[i];
    console.log(nums);
    let odd=nums.filter(el=>el%2==1);
 console.log(odd);
 let cube1=nums.map((el)=>el*el*el);
 console.log(cube1);
 
 }
 