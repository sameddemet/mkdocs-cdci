const fs = require('fs');
const cowsay = require('cowsay');

function genererVacheHTML(message) {
    const vacheDessin = cowsay.say({ text: message });
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vache Dessinée</title>
        </head>
        <body>
            <pre>${vacheDessin}</pre>
        </body>
        </html>
    `;
}

function ecrireDansFichierHTML(nomFichier, contenu, callback) {
    fs.writeFile(nomFichier, contenu, callback);
}

const messageVache = "Les vaches sont d'excellentes amies, elles vous écoutent toujours !";
const contenuHTML = genererVacheHTML(messageVache);
const nomFichierHTML = "vache_dessinee.html";

ecrireDansFichierHTML(nomFichierHTML, contenuHTML, (err) => {
    if (err) {
        console.error("Erreur lors de l'écriture dans le fichier HTML :", err);
    } else {
        console.log(`Fichier HTML avec une vache dessinée a été créé : ${nomFichierHTML}`);
    }
});
