function displayGreeting() {
    let usrname = document.getElementById('usrname').value;
    document.getElementById('outputDiv').innerHTML = 'Hello ' + usrname + ', Welcome to this page' + '<br> ' + 'glade to see u here ' + usrname + '!';
  }
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }