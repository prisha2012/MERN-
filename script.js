var arr=[1,2,3,4];
arr.forEach(function(val){
    console.log(val+"hello");
});
var ans=arr.map(function(val){
    return val*2;
});
console.log(ans);
 arr.filter(function(val){
    if(val%2==0){
        console.log(val);
    }
    else{
        console.log(val+" is odd");
    }
    })