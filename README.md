## Mobile uNav redirect web server

Provides a way to redirect users to your app, using a link. Opens up respective store, and navigates to your app's download/open page.

### Config
You will find configureable variables in the `public/info.js` file. There you will find,
```
const ios_app_store_url = "https://apps.apple.com/app/id";
const ios_app_store_id = "1064216828";

const google_play_store_url = "https://play.google.com/store/apps/details?id=";
const google_play_store_id = "com.reddit.frontpage";
```

After uNav is hosted on the app store and google play store, you can update their ids. The urls will most likely remain the same, unless either platform updates them.

### Universal links and deep links
Once the app is hosted on the respective stores, you will want to set up a universal link for iOS and a proper deep link for android. This will allow a user to click on a link and get redirected to download the app or if the user has the app downloaded, it will open the app for them. This requires set up on both the redirect web server as well the app.

Apple requires you to set up a `apple-app-site-association` file on the webserver that it can access. You will find that file in `public/.well-known/apple-app-site-association`. See [Reddit's example here](https://reddit.com/.well-known/apple-app-site-association).

For a detailed explanation on how to properly set this up, please read [this](https://docs.expo.io/workflow/linking/#universaldeep-links-without-a-custom-scheme).