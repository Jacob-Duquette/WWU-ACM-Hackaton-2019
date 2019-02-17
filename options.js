function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
      URL1: document.querySelector("#URL1").value,
      URL2: document.querySelector("#URL2").value,
      URL3: document.querySelector("#URL3").value,
      URL4: document.querySelector("#URL4").value,
      URL5: document.querySelector("#URL5").value
    });
  }
  
  function restoreOptions() {
  
    function setCurrentChoice1(result) {
      document.querySelector("#URL1").value = result.URL1 || "https://redsquarewebcam.wwu.edu/mjpg/video.mjpg";
    }

    function setCurrentChoice2(result) {
        document.querySelector("#URL2").value = result.URL2 || "http://140.160.167.207:88/CGIProxy.fcgi?cmd=snapPicture2&usr=wl-guest&pwd=123&t=1550389648144";
    }

    function setCurrentChoice3(result){
        document.querySelector("#URL3").value = result.URL3 || "http://199.48.198.27/axis-cgi/mjpg/video.cgi?resolution=800x450&dummy=1447007499299";
    }

    function setCurrentChoice4(result){
        document.querySelector("#URL4").value = result.URL4 || "http://coupevilleweather.us/webcam/weathercam.jpg";
    }

    function setCurrentChoice5(result){
        document.querySelector("#URL5").value = result.URL5 || "http://wwc.instacam.com/instacamimg/SALTY/SALTY_s.jpg";
    }


    function onError(error) {
      console.log(`Error: ${error}`);
    }
  
    var getting1 = browser.storage.sync.get("URL1");
    getting1.then(setCurrentChoice1, onError);

    var getting2 = browser.storage.sync.get("URL2");
    getting2.then(setCurrentChoice2, onError);

    var getting3 = browser.storage.sync.get("URL3");
    getting3.then(setCurrentChoice3, onError);

    var getting4 = browser.storage.sync.get("URL4");
    getting4.then(setCurrentChoice4, onError);

    var getting5 = browser.storage.sync.get("URL5");
    getting5.then(setCurrentChoice5, onError);
    
  }
  
  document.addEventListener("DOMContentLoaded", restoreOptions);
  document.querySelector("form").addEventListener("submit", saveOptions);