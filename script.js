const output = document.getElementById("terminal");
const input = document.getElementById("command");

const achievements = new Set();
let cwd = "/";

const fs = {
"/":[
"letters",
"future",
"memories",
"README.txt"
],
"/letters":[
"letter.txt"
],
"/future":[
"dream.txt"
],
"/memories":[
"flowers.txt"
]
};

const files = {

"README.txt":
`LOVE-TEC TERMINAL

If you're reading this...

Welcome.

I was hoping it'd be you.

Type "help".`,

"letter.txt":
`Dear Wanderer,

You always manage to find elegant solutions.

So here's one more puzzle.

How did I end up loving you this much?

I still don't know.

I just know I do.

— Your girlfriend ♥`,

"dream.txt":
`Future simulation:

One apartment.

Too many books.

Sleepy pets.

One game dev.

One author.

Success probability:
100%`,

"flowers.txt":
`Some flowers bloom.

Some flowers sway.

I'd still pick you

Every single day.`
};

boot();

/* ---------------- BOOT SEQUENCE ---------------- */

function boot() {
typePrint(`
LOADING LOVE-TEC SYSTEM...
--------------------------

Booting...

Loading hope.sys
Loading kissies.dll
Loading nyxie.exe

...

SYSTEM READY.

Welcome, Engineer.

This terminal has been waiting for you.

Type "help" to begin.
`);
}

/* ---------------- TYPE EFFECT ---------------- */

function typePrint(text, i = 0) {
if (i < text.length) {
output.innerHTML += text[i];
setTimeout(() => typePrint(text, i + 1), 10);
} else {
output.innerHTML += "\n";
scroll();
}
}

/* ---------------- NORMAL PRINT ---------------- */

function print(text) {
const div = document.createElement("div");
div.className = "line glow";
div.textContent = text;
output.appendChild(div);
scroll();
}

function scroll() {
output.scrollTop = output.scrollHeight;
}

/* ---------------- INPUT ---------------- */

input.addEventListener("keydown", e => {
if (e.key !== "Enter") return;

const cmd = input.value.trim();
print("LOVE-TEC:\\> " + cmd);
run(cmd);
input.value = "";
});

function run(cmdLine) {
const args = cmdLine.split(" ");
const cmd = args[0].toLowerCase();

switch(cmd) {

case "help":
print(`
Commands:
help
ls
pwd
cd
cat
status
debug
future
tea
love
sudo
things
clear
`);
break;

case "ls":
print(fs[cwd].join("    "));
break;

case "pwd":
print(cwd);
break;

case "cd":
if (!args[1]) return print("Missing path.");
if (args[1] === "..") cwd = "/";
else if (fs["/" + args[1]]) cwd = "/" + args[1];
else print("Directory not found.");
break;

case "cat":
cat(args[1]);
break;

case "status":
print(`Relationship Status

Distance.....ACTIVE
Trust........100%
Laughs.......∞
Missing You..Very
Overall......Stable ♥`);
unlock("status");
break;

case "debug":
print(`Diagnostics:

Kindness.....PASS
Softness.....PASS
Love.........PASS
System.......STABLE`);
unlock("debug");
break;

case "future":
print(files["dream.txt"]);
unlock("future");
break;

case "tea":
print(`Some drink coffee.
Some drink tea.

I'd drink either

If you're with you.`);
unlock("tea");
break;

case "love":
print("Compilation successful.\n\nI love you. ♥");
unlock("love");
break;

case "sudo":
print("Permission denied.\n\nYou already have root access to my heart.");
unlock("sudo");
break;

case "things":
print(`
Thing 1 and Thing 2 (but better)

We were two small sparks in a big wide place,
you with your code, me with my page.

Thing 1 said "hi" in a curious way,
Thing 2 replied "I hope you stay."

We ran around worlds made of late-night talks,
debugging life in long soft walks.

If you're Thing 2, then I'm Thing 1 —
and somehow together we’ve already won.

No boxes, no rules, no end in sight,
just two little chaos lights.

— Seuss-ish thoughts from me to you ♥
`);
unlock("things");
break;

case "clear":
output.innerHTML = "";
break;

default:
print("Unknown command. Type 'help'.");
}

}

/* ---------------- FILE HANDLING ---------------- */

function cat(file) {
if (!file) return print("Specify file.");

if (files[file]) {
print(files[file]);
unlock(file);
} else {
print("No such file.");
}
}

/* ---------------- UNLOCK SYSTEM ---------------- */

function unlock(name) {
achievements.add(name);

if (achievements.size === 6) {
print(`

--------------------------------

ACHIEVEMENT UNLOCKED

♥ Favorite Person ♥

A hidden file has appeared...

letters/secret.txt
`);

files["secret.txt"] = `
If you've made it here...

then you've seen all the little corners I left for you.

This wasn't just a terminal.

It was a place for you.

Every line, every command,
every tiny poem...

was just me trying to say:

I love you.

Always.
`;

fs["/letters"].push("secret.txt");
}
}
