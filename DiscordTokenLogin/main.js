const webdriver = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const path = require('path');
const prompt = require('prompt-sync')();

var service = new firefox.ServiceBuilder(path.join(__dirname, "geckodriver.exe"));

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .setFirefoxService(service)
    .build();

// Get the token from the user
var token = prompt("token: ");

// Enter the discord website
driver.get("https://discord.com/login");

// Define the login function and login with the token
driver.executeScript('function login(e){setInterval(()=>{document.body.appendChild(document.createElement("iframe")).contentWindow.localStorage.token=`"${e}"`},50),setTimeout(()=>{location.reload()},2500)}login("' + token +'");');