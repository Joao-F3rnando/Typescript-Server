"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const firebase = __importStar(require("firebase"));
const port = process.env.PORT || 8000;
const firebaseConfig = {
    apiKey: "AIzaSyC8-4dRpyf9DZphrb1ejrE1HaQym4pM2ow",
    authDomain: "servidorts-2bb74.firebaseapp.com",
    databaseURL: "https://servidorts-2bb74-default-rtdb.firebaseio.com",
    projectId: "servidorts-2bb74",
    storageBucket: "servidorts-2bb74.appspot.com",
    messagingSenderId: "66507653258",
    appId: "1:66507653258:web:7bc9212dc4278debca2d73"
};
try {
    firebase.initializeApp(firebaseConfig);
    console.log('Firebase initialized successfully');
}
catch (e) {
    console.log('Failed', e);
}
const server = app_1.app.listen(port, () => {
    console.log('listening on port', port);
});
process.on('SIGINT', () => {
    server.close();
});
