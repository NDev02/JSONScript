# JSONScript
A compiler written in JavaScript to compile data in JSON Files and run it as code,
Inside the JSON File keywords are recognized by the compiler and run a certain function,
Inside the file there is classes and in each class there are lines that are run one at a time by the compiler.

Example:
{
    "Classes":[
        "Calc",
        "IgnoreCalc",
        "IgnoreCalcShowSingleQuotation",
        "Main"
    ],
    "Main":[
        ["main",
            [["echo"],["HTML"]],
            [["log"],["Hello, World!"]]
        ]
    ],
    "Calc":[
        ["calc",
            [["log"],["2*2*2"]]
        ]
    ],
    "IgnoreCalc":[
        ["igCalc",
            [["log"],["'2*2*2'"]]
        ]
    ],
    "IgnoreCalcShowSingleQuotation":[
        ["igCalcShowQuotation",
            [["log"],["<esc>'2*2*2<esc>'"]]
        ]
    ]
}
