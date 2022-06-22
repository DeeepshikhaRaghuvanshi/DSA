function a(){
    let a = 10;
    console.log(a)
    function b(){
       let a = 20
        console.log(a)
        
        function c(){
              let a=30
            console.log(a)
        }
       return c 
    }
        return b 
    
}

a()()()

// let b = a()
// let c = b()
// c()