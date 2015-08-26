var deviceName = device.name;
var deviceVersion = device.version;
var devicePlatform = device.platform;
var deviceUUID = device.uuid;
var phoneGapVersion = device.phonegap;

// global variable taht will tell when phone gap is ready
var isPhoneGapReady = false;

var isAndroid = false;
var isBlackberry = false;
var isIphone = false;
var isWindows = false;

// store the device uuid
var deviceUUID;

function init() {
   // add event listner for deviceready
   document.addEventListener('deviceready', onDeviceReady, false);
}

function onDeviceReady() {
   // set to true
   isPhoneGapReady = true;

   deviceUUID = device.uuid;

   // detect the device platform
   devicePlatform();
}

function deviceDetection() {
   if (isPhoneGapReady) {
      switch  (device.platform) {
         case 'Android':
              isAndroid = true;
              break;
         case 'Blackberry':
              isBlackberry = true;
              break;
         case 'iPhone':
              isIphone = true;
              break;
         case 'WinCE':
              isWindows = true;
              break;
      }

      console.log('Detected you are using a ' + device.platorm);
   }
}