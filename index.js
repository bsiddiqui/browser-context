'use strict';

/**
 * (C) viazenetti GmbH (Christian Ludwig)
 * http://jsfiddle.net/ChristianL/AVyND/
 */
function checkOS () {
  var os;
  var clientStrings = [{
    s:'Windows',
    r:/(Windows)/
  }, {
    s:'Android',
    r:/Android/
  }, {
    s:'Open BSD',
    r:/OpenBSD/
  }, {
    s:'Linux',
    r:/(Linux|X11)/
  }, {
    s:'iOS',
    r:/(iPhone|iPad|iPod)/
  }, {
    s:'Mac',
    r:/Mac/
  }, {
    s:'UNIX',
    r:/UNIX/
  }, {
    s:'Robot',
    r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
  }];

  for (var i = 0; i < clientStrings.length; i++) {
    var cs = clientStrings[i];
    if (cs.r.test(navigator.userAgent)) {
      return cs.s;
    }
  }
}

/**
  * (C) viazenetti GmbH (Christian Ludwig)
  * http://jsfiddle.net/ChristianL/AVyND/
  */
function checkBrowser () {
  var UA = navigator.userAgent;
  var browser;
  var version;
  var verOffset;

  if ((verOffset = UA.indexOf('Opera')) > -1) {
    browser = 'Opera';
    version = UA.substring(verOffset + 6);
    if ((verOffset = UA.indexOf('Version')) > -1) {
      version = UA.substring(verOffset + 8);
    }
  }
  else if ((verOffset = UA.indexOf('MSIE')) > -1) {
    browser = 'Internet Explorer';
    version = UA.substring(verOffset + 5);
  }
  else if ((verOffset = UA.indexOf('Chrome')) > -1) {
    browser = 'Chrome';
    version = UA.substring(verOffset + 7);
  }
  else if ((verOffset = UA.indexOf('Safari')) > -1) {
    browser = 'Safari';
    version = UA.substring(verOffset + 7);
    if ((verOffset = UA.indexOf('Version')) > -1) {
      version = UA.substring(verOffset + 8);
    }
  }
  else if ((verOffset = UA.indexOf('Firefox')) > -1) {
    browser = 'Firefox';
    version = UA.substring(verOffset + 8);
  }
  else if (UA.indexOf('Trident/') > -1) {
    browser = 'Internet Explorer';
    version = UA.substring(UA.indexOf('rv:') + 3);
  }
  else if ((nameOffset = UA.lastIndexOf(' ') + 1) < (verOffset = UA.lastIndexOf('/'))) {
    browser = UA.substring(nameOffset, verOffset);
    version = UA.substring(verOffset + 1);
    if (browser.toLowerCase() == browser.toUpperCase()) {
      browser = navigator.appName;
    }
  }
}

module.exports = {
  width: window.innerWidth,
  height: window.innerHeight,
  focus: document.hasFocus(),
  scroll: window.scrollY,
  density: window.devicePixelRatio,
  language: window.navigator.userLanguage || window.navigator.language,
  orientation: window.innerHeight > window.innerWidth ? 'portrait' : 'landscape',
  retina: window.devicePixelRatio && window.devicePixelRatio > 1,
  os: checkOS(),
  browser: checkBrowser()
}
