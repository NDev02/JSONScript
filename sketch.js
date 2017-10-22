
var Data;

function setup()
{
    noCanvas();
    loadJSON("main.json", compileAndRun, errData);
}

function errData(err)
{
    console.log("Erorr: " + err);
}