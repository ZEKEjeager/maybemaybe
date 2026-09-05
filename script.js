const feed =
    document.getElementById("terminal-feed");


const signals = [

    [
        "23:41:07",
        "INDEX",
        "new identifier observed: alias_7f3"
    ],

    [
        "23:41:12",
        "GRAPH",
        "2 relationships discovered"
    ],

    [
        "23:41:19",
        "DNS",
        "infrastructure node resolved"
    ],

    [
        "23:41:31",
        "MATCH",
        "confidence score: 0.87"
    ],

    [
        "23:41:44",
        "NOTE",
        "small signals compound over time."
    ]

];


let current = 0;


function addSignal() {

    if (current >= signals.length) {
        return;
    }

    const [
        time,
        type,
        message
    ] = signals[current];


    const line =
        document.createElement("div");


    line.className =
        "feed-line";


    line.innerHTML = `
        <span>${time}</span>
        &nbsp;
        <b>[${type}]</b>
        &nbsp;
        ${message}
    `;


    feed.appendChild(line);


    current++;


    setTimeout(
        addSignal,
        450
    );
}


addSignal();
