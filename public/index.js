function getMobileOperatingSystem() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) return "Android";
  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return "iOS";
  return "unknown";
};

function createSmartBanner() {
  const link = document.createElement('meta');
  link.setAttribute('name', 'apple-itunes-app');
  link.content = `app-id=${ios_app_store_id}`;
  document.getElementsByTagName('head')[0].appendChild(link);
}

function onLoad() {
  const os = getMobileOperatingSystem();
  if (os === "iOS") {
    // createSmartBanner();
    window.location = `${ios_app_store_url}${ios_app_store_id}`;
  } else if (os === "Android") {
    window.location = `${google_play_store_url}${google_play_store_id}`;
  } else {
    alert("OS unsupported. Please use on an iOS or Android device");
  }
}
