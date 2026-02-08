#!/usr/bin/env node

import { fileURLToPath } from "url";
import path from "path";
import { execSync } from "child_process";
import fs from "fs";
import { rm, cp } from "fs/promises";
import prompts from "prompts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let appName = "MyApp";

try {
    console.log("Welcome to @funtools");
    console.log('Thanks for using @funtools/create-react-native-app@1.1.3');

    await getAppName();

    initApp();

    await initTemplates();

    installDependencies();

    console.log("✅ App setup complete");
    process.exit(0);
} catch (e) {
    console.error("❌ Failed to create app");
    console.error(error);
    process.exit(1);
}


async function getAppName() {
    const response = await prompts({
        type: "text",
        name: "appName",
        message: "What is your app name?",
        initial: appName,
        validate: (value) => {
            if (/^[A-Z][A-Za-z0-9]*$/.test(value)) return true;
            return "❌ App name must start with an uppercase letter and contain only letters and numbers.";
        },
    });

    appName = response.appName;
}


function initApp() {
    console.log(`🚀 Initializing React Native app: ${appName}`);

    execSync(
        `npx @react-native-community/cli@latest init ${appName} --skip-install`,
        {
            stdio: "inherit",
        },
    );

    process.chdir(appName);
}


async function initTemplates() {
    console.log("Initializing templates...");

    await rm(path.join(process.cwd(), 'App.tsx'), { recursive: true, force: true });

    await cp(path.join(__dirname, `templates/base/files`), process.cwd(), {
        recursive: true,
        force: true,
    });
}


function installDependencies() {
    
    const {dependencies, devDependencies} = JSON.parse(
        fs.readFileSync(path.join(__dirname, "templates/base/dependencies.json"), "utf-8")
    );
    
    console.log("Installing dependencies...");
    execSync(`npm install ${dependencies.join(" ")}`, {
        stdio: "inherit",
    });

    console.log("Installing dev dependencies...");
    execSync(`npm install -D ${devDependencies.join(" ")}`, {
        stdio: "inherit",
    });

    console.log('Remove @react-native/new-app-screen');
    execSync(`npm uninstall @react-native/new-app-screen`, {
        stdio: "inherit",
    });
}
