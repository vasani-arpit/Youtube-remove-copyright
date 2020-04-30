## Resolving copyright issue in YouTube

### Preview

[![Youtube preview link](https://img.youtube.com/vi/7BBrMG7ch5M/0.jpg)](https://www.youtube.com/watch?v=7BBrMG7ch5M)

### What is this?

This is a [puppeteer](pptr.dev) script which will open youtube studio and find videos with copyright and remove them automatically. It's same process as user manually clicking buttons but puppeteer allows automate that. 

### How to start this app

1. start chrome in remote debugging mode. If you are using windows then batch file is attached. For other OS you need to do it manually. make sure you do it on port 9222
   
    *another things to make sure is that there should be any chrome instance running prior to running this one. It will not open up the port if instance is already running. I'd advise you to keep two profiles, One for bot and another for work*

1. make sure you are logged in and switched to proper channel in youtube before starting this script
1. Git clone, switch to folder and Do `npm install`
1. you can start the script either by terminal with command `node index.js` or from vscode with `F5`

### Why I created this?


---

Got more questions? ask [here](https://github.com)