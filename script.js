<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>LOVE-TEC TERMINAL</title>

<style>
body {
    margin: 0;
    background: #000;
    color: #fff;
    font-family: monospace;
    font-size: 16px;
}

/* terminal window */
#terminal {
    padding: 20px;
    height: calc(100vh - 60px);
    overflow-y: auto;
    white-space: pre-wrap;
}

/* each printed line */
.line {
    margin: 2px 0;
}

/* input bar */
#inputBar {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    padding: 10px 20px;
    background: #000;
    border-top: 1px solid #222;
}

#command {
    flex: 1;
    background: none;
    border: none;
    outline: none;
    color: #fff;
    font: inherit;
}

.prompt {
    margin-right: 8px;
}
</style>
</head>

<body>

<div id="terminal"></div>

<div id="inputBar">
    <span class="prompt">&gt;</span>
    <input id="command" autocomplete="off" autofocus />
</div>

<script src="script.js"></script>

</body>
</html>
