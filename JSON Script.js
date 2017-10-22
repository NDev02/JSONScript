//WRITTEN BY NATHAN GORDON
//OCT 21, 2017

//This is the JSON Compiler
//To use it, load a json file and set the call back function to compileAndRun, the rest will be done for you.

function compileAndRun(rawJsonData)
{
    Data = rawJsonData;
    var Classes = Data.Classes;
    for(var i = 0; i < Classes.length; i++)
    {
        var thisClass = Data[Data.Classes[i]];
        for(var j = 0; j < thisClass.length; j++)
        {
            var thisMethod = thisClass[j];
            for(var k = 0; k < thisMethod.length; k++)
            {
                var thisLine = thisMethod[k];
                if(thisLine[0] == "log")
                {
                    if(thisLine[1].toString().indexOf("*") != -1 && thisLine[1].toString().indexOf("'") == -1)
                    {
                        var nums = thisLine[1].toString().split("*");
                        var output = 1;
                        for(var l = 0; l < nums.length; l ++)
                        {
                            output *= parseFloat(nums[l]);
                        }
                        console.log("Expression (" + thisLine[1] + ") => " + output);
                    }
                    else
                    {
                        var output = thisLine[1][0];
                        while(output.indexOf("'") != -1)
                        {
                            if(output.charAt(output.indexOf("'") -1) == '>' && output.charAt(output.indexOf("'") -2) == 'c' && output.charAt(output.indexOf("'") -3) == 's' && output.charAt(output.indexOf("'") -4) == 'e' && output.charAt(output.indexOf("'") -5) == '<')
                            {
                                while(output.indexOf("<esc>") != -1)
                                {
                                    output = output.replace("<esc>", "")
                                }
                                break;
                            }
                            output = output.replace("'", "");
                        }
                        console.log(output);
                    }
                }
                if(thisLine[0] == "echo") 
                {
                    document.getElementsByTagName("html")[0].innerHTML += thisLine[1];
                }
            }
        }
    }
}
