## Resolving copyright issue in YouTube

### Preview

[![Youtube preview link](https://user-images.githubusercontent.com/6497827/80703828-2201e880-8b01-11ea-89ad-925ff2d32cdb.png)](https://www.youtube.com/watch?v=7BBrMG7ch5M)

### What is this?

This is a [puppeteer](https://pptr.dev) script which will open YouTube studio and find videos with copyright and remove them automatically. It's same process as user manually clicking buttons but puppeteer allows automate that. 

### How to start this app

1. start chrome in remote debugging mode. If you are using windows then batch file is attached. For other OS you need to do it manually. make sure you do it on port 9222
   
    *another things to make sure is that there should be any chrome instance running prior to running this one. It will not open up the port if instance is already running. I'd advise you to keep two profiles, One for bot and another for work*

1. make sure you are logged in and switched to proper channel in youtube before starting this script
1. Git clone, switch to folder and Do `npm install`
1. you can start the script either by terminal with command `node index.js` or from vscode with `F5`
1. Keep the chrome tab focused and keep your mouse pointer outside of chrome window. lot of things works on hover event your mouse pointer can break things

*Keep in mind that the script is designed to work for more then one video. Make sure you have more then two videos with copyright to successfully run this script.*

### Why I created this?

I want to say I have made an AI which automatically creates interesting videos and uploads to a youtube account I created but that would be a lie. It's not AI it's just a script with bunch of statements. 

Although there is an API to upload videos to a youtube, there are none to remove copyrights. Uploader will have to manually go to studio.youtube.com and remove part of the video one-by-one. yes one-by-one. There is not even a option to do multiple at once. 🤷‍♂️

That's why I created this. Upload script will keep uploading videos as visiblity private and this one will keep removing copyrighted parts from the videos and make them pubilc. 

---

Got more questions? ask [here](https://github.com/vasani-arpit/Youtube-remove-copyright/issues/new)
