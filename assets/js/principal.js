//déclaration de variables globales pour le numéro des images actuelles et un tableau contenant les images   
var imgNum = 0;
    var tblImages = ["images/poster.jpg","images/environnements.jpg","images/gameplay.jpg"];

//fonction pour créer un diaporama pour faire défiler des images du jeu
function defileImage() {
    
    imgNum++;
    if(imgNum==3){imgNum=0;}
    document.querySelector("#imageDiapo").setAttribute("src",tblImages[imgNum]);

return true
}

//faire afficher l'image en plus grand dans un viewer
function afficheGrandeImage() {
    
    document.querySelector("#iViewer img").setAttribute("src",document.querySelector("#imageDiapo").getAttribute("src"));
    document.querySelector("#iViewer").style.display = "block";
    
}
//faire retourner l'image a sa position d'origine
function affichePetiteImage() {
    
    document.querySelector("#iViewer img").setAttribute("src", "");
    document.querySelector("#iViewer").style.display = "none";
    
}