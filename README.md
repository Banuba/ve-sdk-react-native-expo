# Example of Expo project with Video Editor React Native plugin

## Overview

This example shows on how to implement the [Video Editor React Native Plugin](https://github.com/Banuba/ve-sdk-react-native) into Expo project.

## Launch

Set Banuba license token [within the app](app/(tabs)/index.tsx#L10) and install node_modules by using the  ```npm install``` command

### Android

1. Run ```npm run android``` in Terminal to launch the sample app on a device or launch the app in IDE i.e. Intellij, VC, etc.

### iOS

1. Open **Signing & Capabilities** tab in Target settings and select your Development Team.
2. Run ```npm run ios``` in Terminal to launch the sample on a device or launch the app in IDE i.e. XCode, Intellij, VC, etc.

## Integration guide

### Preparation step

1. Add native modules to your Expo project by using ```expo prebuild``` command in the Terminal.
2. Add [Video Editor React Native Plugin](https://github.com/Banuba/ve-sdk-react-native?tab=readme-ov-file#installation) to the project.

### Configure Android

1. Open your android [build.gradle file](android/build.gradle#26) and add repositories to allprojects section:

```groove
repositories {
    maven {
        name = "GitHubPackages"
        url = uri("https://maven.pkg.github.com/Banuba/banuba-ve-sdk")
        credentials {
            username = "Banuba"
            password = "\u0038\u0036\u0032\u0037\u0063\u0035\u0031\u0030\u0033\u0034\u0032\u0063\u0061\u0033\u0065\u0061\u0031\u0032\u0034\u0064\u0065\u0066\u0039\u0062\u0034\u0030\u0063\u0063\u0037\u0039\u0038\u0063\u0038\u0038\u0066\u0034\u0031\u0032\u0061\u0038"
        }
    }
    maven {
        name = "ARCloudPackages"
        url = uri("https://maven.pkg.github.com/Banuba/banuba-ar")
        credentials {
            username = "Banuba"
            password = "\u0038\u0036\u0032\u0037\u0063\u0035\u0031\u0030\u0033\u0034\u0032\u0063\u0061\u0033\u0065\u0061\u0031\u0032\u0034\u0064\u0065\u0066\u0039\u0062\u0034\u0030\u0063\u0063\u0037\u0039\u0038\u0063\u0038\u0038\u0066\u0034\u0031\u0032\u0061\u0038"
        }
    }
    maven {
        name "GitHubPackagesEffectPlayer"
        url "https://maven.pkg.github.com/sdk-banuba/banuba-sdk-android"
        credentials {
            username = "sdk-banuba"
            password = "\u0067\u0068\u0070\u005f\u004a\u0067\u0044\u0052\u0079\u0049\u0032\u006d\u0032\u004e\u0055\u0059\u006f\u0033\u0033\u006b\u0072\u0034\u0049\u0069\u0039\u0049\u006f\u006d\u0077\u0034\u0052\u0057\u0043\u0064\u0030\u0052\u0078\u006d\u0045\u0069"
        }
    }
}
```

2. Next steps are the same as in the [React Native Plugin integration guide Android](https://github.com/Banuba/ve-sdk-react-native/blob/master/mddocs/integration_guide.md#android).

### IOS

1. Integration steps are the same as in the [React Native Plugin integration guide IOS](https://github.com/Banuba/ve-sdk-react-native/blob/master/mddocs/integration_guide.md#ios).
