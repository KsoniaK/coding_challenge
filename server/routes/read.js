//CREATION DES DEPENDANCES DE MODULES
//MODULE DE JS.NODE
const mysql = require('mysql'); //APPEL DU MODULE MYSQL QUI PERMET D AGIR SUR UNE BASE DE DONNEES
// const { request } = require('express');
const express = require("express") //APPEL DU MODULE PERMETTANT DE FAIRE LA ROUTE

//IMPORT DES MODULES CREES 
let db = require('./database');//RECUPERE LES MODULES DE LA BASE DE DONNEES

//CREATION DE LA ROUTE QUI SERA EXPORTEES PAR LA SUITE DANS server.js
const app= express.Router();


//AFFICHAGE DES GENRES
app.get('/genre', function(req, res){//CHEMIN D ACCES A CET API http://localhost:3000 /genre
    let selectionPriorite = 'SELECT * FROM GENRE'
    //LA REQUETE RENVERRA SOIT UNE ERREUR "err" SOIT UN RESULTAT "row" QUI CONTIENT CHAQUE LIGNE ENREGISTREES...
    db.query(selectionPriorite, (err, rows, fields) =>{
        //ICI SI IL Y A UNE ERREUR ON NOU LA MONTRE
        if(err){
            res.send(err.message);
        }else{
            //SI NON ON MONTRE TOUTES LES LIGNES
            res.send(rows);
        }
    })
});

//AFFICHAGE DES FILMS"
app.get('/genre/films', function(req, res){//CHEMIN D ACCES A CET API http://localhost:3000 /genre
    let selectionFilms = 'SELECT * FROM MEDIA WHERE id_media<=4'
    //LA REQUETE RENVERRA SOIT UNE ERREUR "err" SOIT UN RESULTAT "row" QUI CONTIENT CHAQUE LIGNE ENREGISTREES...
    db.query(selectionFilms, (err, rows, fields) =>{
        //ICI SI IL Y A UNE ERREUR ON NOU LA MONTRE
        if(err){
            res.send(err.message);
        }else{
            //SI NON ON MONTRE TOUTES LES LIGNES
            res.send(rows);
        }
    })
});

//AFFICHAGE DES SERIES
app.get('/genre/series', function(req, res){//CHEMIN D ACCES A CET API http://localhost:3000 /genre
    let selectionFilms =  'SELECT * FROM MEDIA WHERE id_media>=5'
    //LA REQUETE RENVERRA SOIT UNE ERREUR "err" SOIT UN RESULTAT "row" QUI CONTIENT CHAQUE LIGNE ENREGISTREES...
    db.query(selectionFilms, (err, rows, fields) =>{
        //ICI SI IL Y A UNE ERREUR ON NOU LA MONTRE
        if(err){
            res.send(err.message);
        }else{
            //SI NON ON MONTRE TOUTES LES LIGNES
            res.send(rows);
        }
    })
});

//AFFICHAGE DES FILMS/SERIES DONT LA DATE DE SORTIE EST EGALE A 2010. AFFICHER SEULEMENT LES 5 PREMIERS RESULTATS.
app.get('/genre/filtre', function(req, res){//CHEMIN D ACCES A CET API http://localhost:3000 /genre
    let selectionFilms =  'SELECT * FROM MEDIA WHERE date_sortie_media >= 2010'
    //LA REQUETE RENVERRA SOIT UNE ERREUR "err" SOIT UN RESULTAT "row" QUI CONTIENT CHAQUE LIGNE ENREGISTREES...
    db.query(selectionFilms, (err, rows, fields) =>{
        //ICI SI IL Y A UNE ERREUR ON NOU LA MONTRE
        if(err){
            res.send(err.message);
        }else{
            //SI NON ON MONTRE TOUTES LES LIGNES
            res.send(rows);
        }
    })
});
//EXPORT DE LA ROUTE CREATION CREEE QUI VA DEVENIR UN MODULE
module.exports = app