# @funtools/create-react-native-app

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D20-brightgreen.svg)

> **⚠️ Version Requirement:** Please use version **2.0.0 or higher** for the best experience and latest features.

A professional CLI tool to quickly scaffold a production-ready React Native app with a modern, preconfigured tech stack. No more time wasted on boilerplate setup—just run one command and start building your app!

---

## ✨ Features

- 🚀 **Quick Setup** - Creates a fully configured React Native app in seconds
- 📱 **Modern Stack** - Built on the latest React Native and React versions
- 🎨 **Styled Out of the Box** - Preconfigured with NativeWind (Tailwind CSS for React Native)
- 🧭 **Navigation Ready** - React Navigation already integrated and configured
- 📦 **State Management** - Includes `@funtools/store` for efficient state handling
- 🎯 **TypeScript First** - Full TypeScript support with proper configuration
- 🎨 **Icon Library** - Lucide React Native icons included
- 🧪 **Testing Setup** - Jest configured and ready for unit tests
- 🔧 **Code Quality Tools** - ESLint and Prettier preconfigured
- 📁 **Module Resolution** - Babel module resolver for clean imports

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 20 ([Download](https://nodejs.org/))
- **npm** or **yarn** (comes with Node.js)
- **Android Studio** (for Android development)
- **Xcode** >= 12 (for iOS development on macOS)
- **React Native CLI** (installed automatically)

---

## 📦 Installation

### Option 1: Use with npx (Recommended)

You can use this tool without installing it globally:

```bash
npx @funtools/create-react-native-app@latest
```

> **Note:** Using `@latest` ensures you always get version 2.0.0 or higher.

### Option 2: Global Installation

Install the package globally for repeated use:

```bash
npm install -g @funtools/create-react-native-app@latest
```

Then run it anywhere:

```bash
create-react-native-app
```

---

## 🚀 Usage

### Quick Start

Simply run the command and follow the interactive prompts:

```bash
npx @funtools/create-react-native-app@latest
```

You'll be prompted to enter your app name.

### App Name Requirements

Your app name must follow these rules:

- ✅ Start with an **uppercase letter**
- ✅ Contain **only letters and numbers** (no spaces, hyphens, or special characters)
- ❌ Examples of invalid names: `my-app`, `my_app`, `myApp`, `123App`
- ✅ Examples of valid names: `MyApp`, `MyAwesomeApp`, `ReactApp123`

### Example Session

```bash
$ npx @funtools/create-react-native-app@latest
Welcome to @funtools
Thanks for using @funtools/create-react-native-app
? What is your app name? › MyAwesomeApp
🚀 Initializing React Native app: MyAwesomeApp
Initializing templates...
Installing dependencies...
Installing dev dependencies...
Remove @react-native/new-app-screen
✅ App setup complete
```

---

## 📦 What's Included

Your new React Native app comes fully configured with a modern tech stack:

### Core Dependencies

| Package                            | Version | Purpose                       |
| ---------------------------------- | ------- | ----------------------------- |
| **React**                          | Latest  | UI library                    |
| **React Native**                   | Latest  | Mobile framework              |
| **@react-navigation/native**       | Latest  | Navigation framework          |
| **@react-navigation/native-stack** | Latest  | Stack navigator               |
| **NativeWind**                     | Latest  | Tailwind CSS for React Native |
| **@funtools/store**                | Latest  | State management              |
| **Lucide React Native**            | Latest  | Icon library                  |
| **React Native SVG**               | Latest  | SVG support                   |
| **React Native Gesture Handler**   | Latest  | Touch gesture handling        |
| **React Native Safe Area Context** | Latest  | Safe area support             |
| **React Native Screens**           | Latest  | Native navigation primitives  |

### Development Tools

| Tool                             | Purpose                         |
| -------------------------------- | ------------------------------- |
| **TypeScript**                   | Type safety and better DX       |
| **ESLint**                       | Code linting and quality checks |
| **Prettier**                     | Code formatting                 |
| **Jest**                         | Unit testing framework          |
| **Babel**                        | JavaScript compiler             |
| **babel-plugin-module-resolver** | Clean import paths              |
| **Tailwind CSS**                 | Utility-first CSS framework     |

---

## 🏁 Getting Started with Your New App

After creating your app, navigate to the directory and start developing:

```bash
# Navigate to your app directory
cd MyAwesomeApp

# Install any additional dependencies (if needed)
npm install

# Start the Metro bundler
npm start
```

### Run on Different Platforms

```bash
# Run on Android (requires Android Studio and emulator/device)
npm run android

# Run on iOS (requires Xcode and simulator/device - macOS only)
npm run ios
```

### Development Commands

```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Lint your code
npm run lint

# Type check with TypeScript
npx tsc --noEmit

# Start Metro bundler with cache reset
npm start -- --reset-cache
```

---

## 📁 Project Structure

```
MyAwesomeApp/
├── android/                 # Android native code and configuration
├── ios/                     # iOS native code and configuration
├── src/                     # Your app source code (components, screens, etc.)
├── node_modules/            # Installed dependencies
├── .git/                    # Git repository
├── .gitignore               # Git ignore configuration
├── App.tsx                  # Main app component (removed by @funtools)
├── index.js                 # Entry point
├── package.json             # Project metadata and dependencies
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── babel.config.js          # Babel configuration
├── metro.config.js          # Metro bundler configuration
├── jest.config.js           # Jest testing configuration
├── .eslintrc.js             # ESLint configuration
├── .prettierrc              # Prettier configuration
└── README.md                # Project documentation
```

---

## 🔧 Configuration

### TypeScript

TypeScript is preconfigured with React Native types and strict mode. Configuration can be found in `tsconfig.json`.

### ESLint & Prettier

Code quality tools are set up with React Native best practices. Run `npm run lint` to check your code.

### Tailwind CSS / NativeWind

NativeWind is configured and ready to use. You can use Tailwind utility classes directly in your React Native components:

```jsx
<View className="flex-1 items-center justify-center bg-blue-500">
    <Text className="text-white text-2xl font-bold">Hello World</Text>
</View>
```

### Module Resolution

Babel module resolver is configured for clean imports. You can customize path aliases in `babel.config.js`.

---

## ❓ Troubleshooting

### App Name Validation Error

**Error:** `App name must start with an uppercase letter and contain only letters and numbers`

**Solution:** Ensure your app name:

- Starts with an uppercase letter (e.g., `MyApp`, not `myApp`)
- Contains only letters and numbers (no spaces, hyphens, underscores, or special characters)

### Dependencies Installation Fails

**Error:** npm install fails or packages have conflicts

**Solution:** Try clearing npm cache and reinstalling:

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

**Windows users:** Use `rmdir /s /q node_modules` and `del package-lock.json` instead.

### Metro Bundler Issues

**Error:** Metro bundler shows stale cache errors

**Solution:** Reset the Metro bundler cache:

```bash
# Start with cache reset
npm start -- --reset-cache

# Or manually clear cache
rm -rf $TMPDIR/metro-*
rm -rf $TMPDIR/haste-*
```

### Android Build Errors

**Common issues:**

- Ensure Android Studio is installed
- Set up ANDROID_HOME environment variable
- Accept all SDK licenses: `sdkmanager --licenses`
- Use JDK 17 (React Native 0.73+)

### iOS Build Errors (macOS only)

**Common issues:**

- Ensure Xcode is installed and up to date
- Install CocoaPods: `sudo gem install cocoapods`
- Run `pod install` in the `ios/` directory
- Clean build folder in Xcode: `Product > Clean Build Folder`

### Version-Specific Issues

**If you're using an older version:**

Ensure you're using version **2.0.0 or higher**:

```bash
# Check installed version
npm ls -g @funtools/create-react-native-app

# Update to latest version
npm install -g @funtools/create-react-native-app@latest

# Or use npx with @latest tag
npx @funtools/create-react-native-app@latest
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 💬 Support

Having issues or questions?

- 🐛 **Report bugs:** Open an issue on the [GitHub repository](https://github.com/Mustak24/funtools-react-native-app)
- 💡 **Feature requests:** Submit an issue with the `enhancement` label
- 📧 **General questions:** Open a discussion on GitHub

---

## 🙏 Acknowledgments

- Built with ❤️ by the @funtools team
- Powered by [React Native](https://reactnative.dev/)
- Styled with [NativeWind](https://www.nativewind.dev/)
- Icons by [Lucide](https://lucide.dev/)

---

## 🔗 Useful Links

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation Docs](https://reactnavigation.org/docs/getting-started)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Happy coding! 🚀**

_Made with @funtools/create-react-native-app v2.0.0+_
