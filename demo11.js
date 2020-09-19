sumfun=(...args)=>{
    let sum=0;
    for (let i in args) 
        sum+=args[i];
        console.log(sum);   
            }
sumfun();
sumfun(10,20);
sumfun(10,60,70);