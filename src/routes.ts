import { Router } from "express";
import * as firebase from 'firebase';

export const router = Router();


router.get('/greg', (req, res) => {
    //res.send('API do Greg está funcionando')

    let database: any
    firebase
        .database()
        .ref(`Feedbacks`)
        .orderByKey()
        .once('value')
        .then((datas: any) => {
            database = datas.val()
            
            res.send({ 'Messagem do ADM': database })
        })
})


router.get('/update', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log('just one test')
    let json = {
        'Feedback_do_ADM': 'Se você chegou até aqui, as rotas de GET e POST estão funcionando corretamente, porque no momento em que a rota "update" foi acessada, este JSON foi salvo com sucesso'
    }
    

    firebase
        .database()
        .ref(`Feedbacks`).set(json)
        .then((sucess) => { 
            console.log('Updated')
        })
        .catch((err) => { console.log(err) });
    res.send({ 'messagem do ADM': 'DEU BOM' })

    
        
})
    



