const Summation1=(n)=>{
    let sum = 0
    for(let i=1; i<=n; i++){
        sum+=i
    }
    return sum
}

// console.log(Summation1(100))

// time complexity for this is O(n) -- linear.


function Summation2(n){
    return (n*(n+1))/2
}

// console.log(Summation2(100))

// time complexity for this is O(1) -- constant.




