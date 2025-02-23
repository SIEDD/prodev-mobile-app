// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push("cjs"); // Ensure Metro can resolve .cjs files

module.exports = config;
