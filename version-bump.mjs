import { readFileSync, writeFileSync } from "fs";

// Read version from package.json
const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
const targetVersion = packageJson.version;

// Read manifest.json and update only the version field
let manifest = JSON.parse(readFileSync("manifest.json", "utf8"));
manifest.version = targetVersion;
writeFileSync("manifest.json", JSON.stringify(manifest, null, "\t"));

console.log(`Updated manifest.json version to ${targetVersion}`);
