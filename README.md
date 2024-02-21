# Kinvault.md

Kinvault.md is a markdown editor app for kinnies.

## Architecture for development

- nvm
- node.js
- react native
- expo

## Development Environment

1. Install xcode.
   1. Install xcode with app store.
   1. Set "Xcode xx.x.x(xxxx)" in [Settings]-[Locations]-[Command Line Tools] of xcode.
1. Install Android Studio.
   1. Install Android Studio from [developers.android.com](https://developer.android.com/studio?hl=ja)
   1. Open Android Studio, and [More Actions]-[SDK Manager]
   1. Check the following item in [Language & Frameworks]-[Android SDK]-[SDK Platforms] tab, and [Apply].
      1. Android 14.0
   1. Check the following items in [SDK Tools] tab, and [Apply].
      1. Android SDK Build-Tools 34
      2. Android Emulator
      3. Android SDK Platform-Tools
   1. Add Path
      1. Open `~/.config/fish/config.fish`, and add the following statements.
         ```config.fish
         # Android Studio
         export ANDROID_HOME="$HOME/Library/Android/sdk"
         export PATH="$ANDROID_HOME/platform-tools:$PATH"
         export PATH="$ANDROID_HOME/emulator:$PATH"
         ```
      1. Check path on fish.
         ```fish
         echo $PATH
         adb --version
         ```
   1. Install Emulator.
      1. Open Android Studio, and [More Actions]-[Virtual Device Manager].
      2. Select [Pixel 7] and latest image.
      3. Check the following command in fish.
         ```fish
         emulator -list-avds`
         ```
1. Install watchman.
   Expo depends watchman.

   ```fish
   brew install watchman
   ```
1. Set up expo project.

   ```shell
   cd ~/dev
   nvm use lts
   npx create-expo-app --template
   # Choose `Blank(Typescript)`
   # Input name of app `kinvault`
   ```

1. Start expo
   ```shell
   cd kinvault
   npm start
   ```

1. Install expo-router.
   1. Execute the following command. 
      ```shell
      npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler
      ```
   2. Add the following.
      1. src/app/index.tsx
      1. src/app/_layout.tsx
   3. Delete the following.
      1. App.tsx
   4. Add `"expo": {"scheme": "kinvault"}` into app.json

1. Install vector-icons.
   1. Execute the following.
   ```shell
   npx expo install @expo/vector-icons
   ```

## Other installation.
1. TODO: install tamagui
2. 