#!/usr/bin/env node

import { fileURLToPath } from "url";
import path from "path";
import { exec } from "child_process";
import fs from "fs/promises";
import prompts from "prompts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let appName = "MyApp";

try {
    console.log("Welcome to @funtools");
    console.log("Thanks for using @funtools/create-react-native-app");

    await getAppName();
    await initApp();

    process.chdir(appName);

    await initTemplates();
    await installDependencies();
    await initGit();

    console.log("✅ App setup complete");
    process.exit(0);
} catch (error) {
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


async function initApp() {
    await new Promise((resolve, reject) => {
        console.log(`🚀 Initializing React Native app: ${appName}`);

        const stop = useLoading("Initializing React Native app");

        exec(`npx @react-native-community/cli@latest init ${appName} --skip-install`, {
            stdio: "ignore",
        }, (error) => error ? reject(error) : resolve(stop("✅ React Native app initialized")) );
    });
}


async function initTemplates() {
    const stop = useLoading("Initializing templates");
    
    await Promise.all([
        fs.rm(path.join(process.cwd(), ".git"), {
            recursive: true,
            force: true,
        }),
        
        fs.rm(path.join(process.cwd(), "App.tsx")),

        fs.cp(path.join(__dirname, `templates/base/files`), process.cwd(), {
            recursive: true,
            force: true,
        })
    ])

    stop("✅ Templates initialized");
}


async function installDependencies() {
    const { dependencies, devDependencies } = JSON.parse(
        await fs.readFile(
            path.join(__dirname, "templates/base/dependencies.json"),
            "utf-8",
        ),
    );

    await new Promise((resolve, reject) => {
        const stop = useLoading("Installing dependencies");
        exec(`npm install ${dependencies.join(" ")}`, {
            stdio: "ignore",
        }, error => error ? reject(error) : resolve(stop("✅ Dependencies installed")))
    }),

    await new Promise((resolve, reject) => {
        const stop = useLoading("Installing dev dependencies");
        exec(`npm install -D ${devDependencies.join(" ")}`, {
            stdio: "ignore",
        }, error => error ? reject(error) : resolve(stop("✅ Dev dependencies installed")))
    }),

    await new Promise((resolve, reject) => {
        const stop = useLoading("Removing @react-native/new-app-screen");
        exec(`npm uninstall @react-native/new-app-screen`, {
            stdio: "ignore",
        }, error => error ? reject(error) : resolve(stop("✅ Removed @react-native/new-app-screen")))
    })
}


async function initGit() {
    const stop = useLoading("Initializing git");

    await new Promise((resolve, reject) => {
        exec(`git init`, {
            stdio: "ignore",
        }, error => error ? reject(error) : resolve())
    }),

    await new Promise((resolve, reject) => {
        exec(`git add .`, {
            stdio: "ignore",
        }, error => error ? reject(error) : resolve())
    }),

    await new Promise((resolve, reject) => {
        exec(`git commit -m "Initial commit"`, {
            stdio: "ignore",
        }, error => error ? reject(error) : resolve())
    })

    stop("✅ Git initialized");
}


function useLoading(text = "Loading") {
    const loading = [
        ...new Array(Math.max(5, Math.floor(text.length / 2)))
    ].map(_ => Math.random() < 0.8 ? "." : "_");
    
    const interval = setInterval(() => {
        process.stdout.write('\r' + (text + " " + loading.join("")));
        process.stdout.write('\x10');

        loading.pop();

        if (loading[0] === ".") {
            return loading.unshift(Math.random() < 0.5 ? "." : "_");
        }

        const dots = loading.reduce((count, sym) => (
            sym === "." ? count + 1 : count
        ), 0);

        if (dots === 0) return loading.unshift(Math.random() < 0.8 ? "." : "_");

        loading.unshift(dots < loading.length * Math.random() ? "." : "_");
    }, 100);

    return (msg = text + " Done!") => {
        clearInterval(interval);
        process.stdout.write("\r" + msg + ' '.repeat(loading.length) +"\n");
    };
}
