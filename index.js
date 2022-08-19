
function receivesAFunction(callback){
    callback("Spy");
}
receivesAFunction()


function returnsANamedFunction(){
    return function namedFn (){
        console.log("a named function")
    }
}

function returnsAnAnonymousFunction(){
    return () => console.log ('anonymous function');
}