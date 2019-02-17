function onError(error) {
    console.log(`Error: ${error}`);
  }

  function onGot1(item) {
    if (item.URL1) {
      document.getElementById("URL1").src = item.URL1;
    }
  }
    var getting1 = browser.storage.sync.get("URL1");
    getting1.then(onGot1, onError);

  function onGot2(item) {
    if (item.URL2) {
      document.getElementById("URL2").src = item.URL2;
    }
  }
    var getting2 = browser.storage.sync.get("URL2");
    getting2.then(onGot2, onError);

  function onGot3(item) {
    if (item.URL3) {
      document.getElementById("URL3").src = item.URL3;
    }
  }
    var getting3 = browser.storage.sync.get("URL3");
    getting3.then(onGot3, onError);

  function onGot4(item) {
    if (item.URL4) {
      document.getElementById("URL4").src = item.URL4;
    }
  }
    var getting4 = browser.storage.sync.get("URL4");
    getting4.then(onGot4, onError);

  function onGot5(item) {
    if (item.URL5) {
      document.getElementById("URL5").src = item.URL5;
    }
  }
    var getting5 = browser.storage.sync.get("URL5");
    getting5.then(onGot5, onError);

