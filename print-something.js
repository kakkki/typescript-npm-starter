var maxRuns = 5,
    numRuns = 0;

function printSomething() {
    console.log('some output');
    setTimeout(function() {
        numRuns++;
        if (numRuns < maxRuns) {
            printSomething();
        }
    }, 1000);
}

printSomething();