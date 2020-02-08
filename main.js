
// find the value of x^2 
   var ndMath = {
       square : function ( x ){
           var result = 1;
           for(var i = 1;i <= 2; i++){
               result *= x;
           }
           return result;
       }
   };
   console.log(ndMath.square(7));
