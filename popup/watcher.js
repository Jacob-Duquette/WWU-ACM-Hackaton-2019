  function onGot1(item) {
    if (item.URL1) {
      document.getElementById("URL1").src = item.URL1;
    }
  }
  function onGot2(item) {
    if (item.URL2) {
      document.getElementById("URL2").src = item.URL2;
    }
  }
  function onGot3(item) {
    if (item.URL3) {
      document.getElementById("URL3").src = item.URL3;
    }
  }
  function onGot4(item) {
    if (item.URL4) {
      document.getElementById("URL4").src = item.URL4;
    }
  }
  function onGot5(item) {
    if (item.URL5) {
      document.getElementById("URL5").src = item.URL5;
    }
  }

    var getting = browser.storage.sync.get("URL1");
    getting.then(onGot1);
    getting = browser.storage.sync.get("URL2");
    getting.then(onGot2);
    getting = browser.storage.sync.get("URL3");
    getting.then(onGot3);
    getting = browser.storage.sync.get("URL4");
    getting.then(onGot4);
    getting = browser.storage.sync.get("URL5");
    getting.then(onGot5);