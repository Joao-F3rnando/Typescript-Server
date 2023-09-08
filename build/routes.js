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
exports.router = void 0;
const express_1 = require("express");
const firebase = __importStar(require("firebase"));
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    // res.send('API do Greg está funcionando')
    let database;
    firebase
        .database()
        .ref(`Feedbacks`)
        .orderByKey()
        .once('value')
        .then((data) => {
        database = data.val();
        res.send({ 'comments': database });
    });
});
exports.router.post('/update', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    //remover aspas
    let feedback = req.body.feedback;
    let email = req.body.email;
    console.log('just one test');
    //usei apenas para testes
    let json = {
        'Feedback_do_ADM': 'Se você chegou até aqui, as rotas de GET e POST estão funcionando corretamente, porque no momento em que a rota "update" foi acessada, este JSON foi salvo com sucesso'
    };
    // Mandar para o Firebase sempre um JSON
    const REF = firebase.database().ref(`Feedbacks/${btoa(email)}`);
    REF.set({ 'feedback': feedback, 'email': email })
        .then(() => {
        let ID = REF.key;
        const UPDATE = firebase.database().ref(`Feedbacks/${btoa(email)}`).update({ 'ID': ID })
            .then(() => {
            console.log('Updated');
        })
            .catch(err => { console.log(err); });
    })
        .catch((err) => {
        console.log(err);
    });
});
