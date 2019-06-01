
//fonction anonyme auto-exécutante qui initialise la page avec quelques écouteurs d'événements pour que l'afficheur d'image fonctionne correctement
(function () {
    
    //initialisation des div pour le viewer d'images
    var petiteImage = document.querySelector("#imageDiapo");
    var grandeImage = document.querySelector("#iViewer img");
    
    //ajout des écouteurs d'événements pour le viewer d'image
    petiteImage.addEventListener("mouseup",afficheGrandeImage);
    grandeImage.addEventListener("mouseup",affichePetiteImage);
    
})();