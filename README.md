# React Native App


[![YouTube Preview](https://img.youtube.com/vi/Og6KtvMSnVM/maxresdefault.jpg)](https://www.youtube.com/watch?v=Og6KtvMSnVM)

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/saurowankhade/MaiKissanAssignment/
   cd MaiKissanAssignment
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Install required dependencies for React Native CLI:
   ```sh
   npx react-native doctor
   ```
   Follow the instructions to install any missing dependencies.
4. Start Metro bundler:
   ```sh
   npx react-native start
   ```

## Firebase Configuration

1. Create a Firebase project on [Firebase Console](https://console.firebase.google.com/).
2. Add an Android and/or iOS app to the Firebase project.
3. Download the `google-services.json` (for Android) and `GoogleService-Info.plist` (for iOS) and place them in the respective locations:
   - Android: `android/app/google-services.json`
   - iOS: `ios/GoogleService-Info.plist`
4. Install Firebase dependencies:
   ```sh
   npm install @react-native-firebase/app @react-native-firebase/auth
   ```

## How to Run the App

- **Android:**
  ```sh
  npx react-native run-android
  ```
- **iOS:** (Requires macOS and Xcode)
  ```sh
  npx react-native run-ios
  ```

## App Structure & Standout Features

### 1. **Splash Screen**

- Displays for 3 seconds.
- Checks if the user is logged in:
  - If logged in, navigates to **Listing Page**.
  - If not logged in, navigates to **Signup Page**.

### 2. **Authentication (Firebase Auth)**

- **Signup Page**:
  - Fields: Email, Password, Confirm Password (All required with validation).
  - Signup button navigates to **Sign-in Page**.
- **Sign-in Page**:
  - Users can sign in with valid credentials.
- **Toast Notifications**:
  - Displays success/error messages.

### 3. **Listing Page**

- Fetches data from an API.
- Displays data in a card view.
- Clicking on a card navigates to **Details Page**.
- Logout button:
  - Shows a confirmation popup before logging out.

### 4. **Details Page**

- Displays full details of the selected item.
- Back button to return to **Listing Page**.

## Technologies Used

- **React Native CLI** with **Tailwind CSS**
- **Firebase Authentication** for user management
- **Toast messages** for user feedback

## Author

[Saurabh Wankhade](https://saurowankhade.vercel.app/)







