# @funtools/create-react-native-app

A CLI tool to quickly create a React Native app with a preconfigured setup, including navigation, state management, styling, and more.

## Features

✨ **Quick Setup** - Creates a fully configured React Native app in seconds  
📱 **Modern Stack** - Uses the latest React Native 0.83.1 and React 19.2.0  
🎨 **Styled** - Preconfigured with NativeWind (Tailwind CSS for React Native)  
🧭 **Navigation** - React Navigation already set up  
📦 **State Management** - Includes @fun-tools/store  
🎯 **TypeScript Ready** - Full TypeScript support out of the box  
🎨 **Icons** - Lucide React Native icons included

## Prerequisites

- Node.js >= 20
- npm or yarn

## Installation

You can use this tool without installing it globally using `npx`:

```bash
npx @funtools/create-react-native-app
```

Or install it globally:

```bash
npm install -g @funtools/create-react-native-app
```

## Usage

Simply run the command and follow the interactive prompts:

```bash
npx @funtools/create-react-native-app
```

You'll be asked to provide an app name. The app name must:

- Start with an uppercase letter
- Contain only letters and numbers

### Example

```bash
$ npx @funtools/create-react-native-app
Welcome to @funtools
? What is your app name? › MyAwesomeApp
🚀 Initializing React Native app: MyAwesomeApp
Initializing templates...
Updating package.json...
Installing dependencies...
✅ App setup complete
```

## What's Included

Your new React Native app comes preconfigured with:

### Dependencies

- **React Native 0.83.1** - Latest React Native framework
- **React 19.2.0** - Latest React library
- **React Navigation** - Native Stack Navigator for routing
- **NativeWind** - Tailwind CSS for React Native styling
- **@fun-tools/store** - State management solution
- **Lucide React Native** - Beautiful icon library
- **React Native SVG** - SVG support

### Dev Tools

- **TypeScript** - Type safety and better developer experience
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Testing framework
- **Babel** - JavaScript compiler with module resolver

## Getting Started with Your New App

After creating your app:

```bash
# Navigate to your app directory
cd MyAwesomeApp

# Start the Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run tests
npm test

# Lint your code
npm run lint
```

## Project Structure

```
MyAwesomeApp/
├── android/              # Android native code
├── ios/                  # iOS native code
├── src/                  # Your app source code
├── node_modules/         # Dependencies
├── package.json          # Project configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── ...
```

## Requirements

- **Node.js**: >= 20
- **React Native CLI**: Automatically installed
- **Android Studio** (for Android development)
- **Xcode** (for iOS development on macOS)

## Troubleshooting

### App name validation error

Make sure your app name:

- Starts with an uppercase letter
- Contains only letters and numbers (no spaces, hyphens, or special characters)

### Dependencies installation fails

Try clearing npm cache and reinstalling:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Metro bundler issues

Reset the Metro bundler cache:

```bash
npm start -- --reset-cache
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Support

For issues and questions, please open an issue on the GitHub repository.

---

**Happy coding! 🚀**
