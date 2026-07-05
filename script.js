const output=document.getElementById("output");
const input=document.getElementById("command");

const achievements=new Set();

let cwd="/";

const fs={

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

const files={

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

function boot(){

print(`
LOVE-TEC INDUSTRIES
--------------------

Booting...

Loading hope.sys

Loading kissies.dll

Loading nyxie.exe

System Ready.

Type "help"
`);

}

function print(text){

const div=document.createElement("div");

div.className="line glow";

div.textContent=text;

output.appendChild(div);

scroll();

}

function scroll(){

document.getElementById("terminal").scrollTop=999999;

}

input.addEventListener("keydown",e=>{

if(e.key!="Enter") return;

const cmd=input.value.trim();

print("> "+cmd);

parse(cmd);

input.value="";

});

function parse(command){

const args=command.split(" ");

const c=args[0].toLowerCase();

switch(c){

case "help":

print(`Commands

help
ls
pwd
cd
cat
status
debug
fortune
future
tea
love
sudo
clear`);

break;

case "ls":

print(fs[cwd].join("    "));

break;

case "pwd":

print(cwd);

break;

case "cd":

if(args[1]==".."){

cwd="/";

print(cwd);

return;

}

const path="/"+args[1];

if(fs[path]){

cwd=path;

print(cwd);

}else{

print("Directory not found.");

}

break;

case "cat":

cat(args[1]);

break;

case "status":

print(`Relationship Status

Distance.....ACTIVE

Trust........100%

Laughs.......∞

Missing You..Too Much

Overall:

Stable ♥`);

unlock("status");

break;

case "debug":

print(`Running diagnostics...

Kindness........PASS

Softness........PASS

Love............PASS

Patience........PASS

Patch pending.`);

unlock("debug");

break;

case "fortune":

fortune();

unlock("fortune");

break;

case "future":

print(files["dream.txt"]);

unlock("future");

break;

case "tea":

print(`Some drink coffee.

Some drink tea.

I'd drink either

If you're with me.`);

unlock("tea");

break;

case "love":

print("Compilation successful.\n\nI love you. ♥");

unlock("love");

break;

case "sudo":

print("Permission denied.\n\nReason:\nYou already have root access to my heart.");

unlock("sudo");

break;

case "clear":

output.innerHTML="";

break;

default:

print("Unknown command.");

}

}

function cat(file){

if(!file){

print("Specify file.");

return;

}

if(files[file]){

print(files[file]);

unlock(file);

return;

}

print("No such file.");

}

function unlock(name){

achievements.add(name);

if(achievements.size===6){

print(`
--------------------------------

Achievement Unlocked

♥ Favourite Person ♥

New file available:

letters/secret.txt

`);

files["secret.txt"]=`If you've made it this far...

Then you've explored every little corner of this terminal.

Kind of like you've explored every little corner of my heart.

Thank you for every laugh.

Every late-night conversation.

Every comfort.

Every warm word.

Distance is temporary.

You are not.

I love you.

Forever. ♥`;

fs["/letters"].push("secret.txt");

}

}
