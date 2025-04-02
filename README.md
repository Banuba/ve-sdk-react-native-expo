# Example of Expo Project with Video Editor React Native Plugin

## Overview

This example demonstrates how to integrate the [Video Editor React Native Plugin](https://github.com/Banuba/ve-sdk-react-native) into an Expo project.

## Launch Instructions

### Prerequisites

1. Set the Banuba license token [within the app](app/(tabs)/index.tsx#L10).
2. Install ```node_modules``` by running the following command in the terminal:

   ```bash
   npm install
   ```

### Android

1. Run the following command in the terminal to launch the sample app on a device:

   ```bash
   npm run android
   ```

2. Alternatively, you can launch the app in an IDE such as IntelliJ, Visual Studio Code, etc.

### iOS

1. Open the **Signing & Capabilities** tab in the Target settings and select your Development Team.
2. Run the following command in the terminal to launch the sample app on a device:

   ```bash
   npm run ios
   ```

3. Alternatively, you can launch the app in an IDE such as XCode, IntelliJ, Visual Studio Code, etc.


## Integration Guide

### Preparation Steps

1. Add native modules to your Expo project by running the following command in the terminal:

   ```bash
   expo prebuild
   ```

2. Add the [Video Editor React Native Plugin](https://github.com/Banuba/ve-sdk-react-native?tab=readme-ov-file#installation) to your project.

### Android Configuration

1. Open your Android ```build.gradle``` file ([example line](android/build.gradle#26)) and add the following repositories to the ```allprojects``` section:

   ```groovy
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

2. Follow the remaining steps outlined in the [React Native Plugin Integration Guide for Android](https://github.com/Banuba/ve-sdk-react-native/blob/master/mddocs/integration_guide.md#android).

### iOS Configuration

1. Follow the steps provided in the [React Native Plugin Integration Guide for iOS](https://github.com/Banuba/ve-sdk-react-native/blob/master/mddocs/integration_guide.md#ios).
