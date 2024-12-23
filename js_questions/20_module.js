// The Module Pattern is a design pattern used in Js to create Modules of code that are self-contained .
// It Leverages clouses to create private and public members, allowing for better organiation and encapsulation 
// of code

var myModule =(function(){
    var privateVar="I am private";
    function privateMethod(){
        console.log(privateVar);
    }
    return {
        publicMethod: function(){
            privateMethod();
        }
    }
})();

myModule.publicMethod();