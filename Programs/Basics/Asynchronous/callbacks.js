//A Callback is a way of calling a function in another function.

function primary(callback) {
    console.log("Primary function is running.");
    console.log("Moving to auxiliary function...");
    callback();
}

function auxiliary() {
    console.log("Auxiliary function is running.");
}

primary(auxiliary);