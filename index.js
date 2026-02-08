#!/usr/bin/env node

import { fileURLToPath } from "url";
import path from "path";
import { execSync } from "child_process";
import fs from "fs";
import prompts from "prompts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let appName = "MyApp";

try {
    console.log("Welcome to @funtools");

    await getAppName();

    initApp();
    initTemplates();
    updatePackageJson();
    installDependencies();

    console.log("✅ App setup complete");
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

    if (!response.appName) throw Error("❌ App creation cancelled");

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


function initTemplates() {
    console.log("Initializing templates...");

    fs.cpSync(path.join(__dirname, `templates/base`), process.cwd(), {
        recursive: true,
        focus: true,
    });
}


function updatePackageJson() {
    console.log("Updating package.json...");

    fs.writeFileSync(
        `${process.cwd()}/package.json`,
        fs
            .readFileSync(`${process.cwd()}/package.json`, "utf-8")
            .replaceAll("$AppName", appName),
    );
}


function installDependencies() {
    console.log("Installing dependencies...");

    execSync("npm install", {
        stdio: "inherit",
    });
}
