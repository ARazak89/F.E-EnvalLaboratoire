const datas = {
    users: [
        {
            id: 1,
            name: "test1",
            pass: "test1",
            email: "test1@enval.com",
            question: "CodeLoccol",
            profil: "Image/test1.png",
            bio: "bonjour Cs 3e cohorte",
        },
        {
            id: 2,
            name: "test2",
            pass: "test2",
            email: "test2@enval.com",
            question: "CodeLoccol",
            profil: "Image/test2.png",
            bio: "bonjour Cs 2e cohort"

        },
        {
            id: 3,
            name: "test3",
            pass: "test3",
            email: "test3@enval.com",
            question: "CodeLoccol",
            profil: "Image/test3.png",
            bio: "bonjour Cs 1ere cohort"

        }
    ],
    factures: [
        {
            idFacture: 1,
            laboratoire: 'Enval',
            dateFacture: '10/03/2023'
        },
        {
            idFacture: 2,
            laboratoire: 'Biochimie',
            dateFacture: '10/03/2023'
        },
        {
            idFacture: 3,
            laboratoire: 'Biologie',
            dateFacture: '11/03/2023'
        },
        {
            idFacture: 4,
            laboratoire: 'Bioligie',
            dateFacture: '12/03/2023'
        },
        {
            idFacture: 5,
            laboratoire: 'Enval',
            dateFacture: '12/03/2023'
        },
        {
            idFacture: 6,
            laboratoire: 'Biochime',
            dateFacture: '12/03/2023'
        },
        {
            idFacture: 7,
            laboratoire: 'Enval',
            dateFacture: '13/03/2023'
        },
        {
            idFacture: 8,
            laboratoire: 'Géologie',
            dateFacture: '13/03/2023'
        },
        {
            idFacture: 9,
            laboratoire: 'Enval',
            dateFacture: '13/03/2023'
        },
    ],
    commandes: [
        {
            idCommande: 1,
            laboratoire: 'Enval',
            date: '10/03/2023',
            statut: 'En cours'
        },
        {
            idCommande: 2,
            laboratoire: 'Codeloccol',
            date: '10/03/2023',
            statut: 'En cours'
        },
        {
            idCommande: 3,
            laboratoire: 'ANSI',
            date: '12/03/2023',
            statut: 'Terminée'
        },
        {
            idCommande: 4,
            laboratoire: 'CIPMEN',
            date: '12/03/2023',
            statut: 'En cours'
        },
        {
            idCommande: 5,
            laboratoire: 'ADU',
            date: '13/03/2023',
            statut: 'Terminée'
        },
        {
            idCommande: 6,
            laboratoire: 'Codeloccol',
            date: '14/03/2023',
            statut: 'En cours'
        },
        {
            idCommande: 7,
            laboratoire: 'Enval',
            date: '14/03/2023',
            statut: 'En cours'
        },
        {
            idCommande: 8,
            laboratoire: 'ANSI',
            date: '16/03/2023',
            statut: 'En cours'
        },
        {
            idCommande: 9,
            laboratoire: 'ADU',
            date: '16/03/2023',
            statut: 'En cours'
        },
        {
            idCommande: 10,
            laboratoire: 'Codeloccol',
            date: '17/03/2023',
            statut: 'Terminée'
        },
    ],
    suivis: [
        {
            lot: 'Conductivité électrique',
            etat: 'Non Reçu',
            date: '15/03/2023',
            rapport: 'Non disponible'
        },
        {
            lot: 'Chlorure',
            etat: 'Non Reçu',
            date: '15/03/2023',
            rapport: 'Non disponible'
        },
        {
            lot: 'E202302023',
            etat: 'Non Reçu',
            date: '12/03/2023',
            rapport: 'Non disponible'
        },
        {
            lot: 'Cyanure libre',
            etat: 'Reçu',
            date: '20/03/2023',
            rapport: 'Disponible'
        },
        {
            lot: 'Couleur brute',
            etat: 'Reçu',
            date: '17/03/2023',
            rapport: 'Non disponible'
        },
        {
            lot: 'Ph/Temperature',
            etat: 'Reçu',
            date: '16/03/2023',
            rapport: 'Disponible'
        },
        {
            lot: 'CO2 libre',
            etat: 'Reçu',
            date: '15/03/2023',
            rapport: 'Disponible'
        },
        {
            lot: 'Carbonate',
            etat: 'Reçu',
            date: '14/03/2023',
            rapport: 'Disponible'
        },
        {
            lot: 'TE20230290',
            etat: 'Reçu',
            date: '14/03/2023',
            rapport: 'Non disponible'
        },
        {
            lot: 'TE2023303001',
            etat: 'Non Reçu',
            date: '12/03/2023',
            rapport: 'Disponible'
        },
    ]
}
// Code commun à toutes les pages
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(datas.users));
}
if (!localStorage.getItem('suivis')) {
    localStorage.setItem('suivis', JSON.stringify(datas.suivis));
}
// Code commun à toutes les pages
// Vérifier la page actuelle et exécuter le code spécifique
if (window.location.pathname.includes('index.html')) {
    // Code spécifique à la page index.html
    document.addEventListener("DOMContentLoaded", function () {
        let loginAttempts = 0; // Compteur de tentatives de connexion infructueuses
        let secretAnswer = ''; // Variable pour stocker la réponse secrète

        document.getElementById('loginForm').addEventListener('submit', function (e) {
            e.preventDefault(); // Empêche la soumission du formulaire par défaut

            // Récupérez les valeurs des champs email et mot de passe
            let email = document.getElementById('login').value;
            let password = document.getElementById('pass').value;
            // let btSub = document.getElementById('con');
            const message = document.querySelector('.message');
            const spanMessage = document.querySelector('.spanCorps');
            const users = JSON.parse(localStorage.getItem('users'));

            let loginSuccessful = false;
            for (let i = 0; i < users.length; i++) {
                if (email.trim() === users[i].name && password.trim() === users[i].pass) {
                    console.log("héhéhéhé");
                    localStorage.setItem('utilisateurConnecte', JSON.stringify(users[i]));
                    window.location.href = 'dashboard.html';
                    loginSuccessful = true;
                    break; // Sortez de la boucle une fois la connexion réussie
                }
            }
            // Hassane Abdel-Razak
            if (!loginSuccessful) {
                message.setAttribute('style', 'display:block');
                setTimeout(function () {
                    message.setAttribute('style', 'display:none');
                }, 3000);
                loginAttempts++;

                if (loginAttempts === 3) {
                    spanMessage.textContent = 'votre compte est temporairement bloqué!'
                    message.style.display = 'block';
                    setTimeout(function () {
                        message.style.display = 'none';
                        secretAnswer = prompt("Question secrète : Quelle est le nom de l'école ?");


                        // ============================================= test =====================

                        if (secretAnswer === users[0].question) {
                            console.log('question ' + secretAnswer);
                            console.log('reponse ' + users.question);
                            alert("Réponse correcte ! Vous êtes autorisé à accéder au tableau de bord.");
                            window.location.href = 'dashboard.html'
                            // window.location.replace='dashboard.html';
                        } else {

                            spanMessage.textContent = 'votre compte est definitevement bloqué!'
                            message.style.display = 'block';
                            document.querySelector('.sub').style.display = 'none';
                            setTimeout(function () {
                                message.style.display = 'none';
                                document.querySelector('.sub').style.display = 'none';
                            }, 3000);
                            // =================== timer =====================
                            // Définir la durée en minutes
                            document.querySelector('.chrono').style.display = 'block';
                            const dureeEnMinutes = 5;
                            // const dureeEnMillisecondes = dureeEnMinutes * 60 * 1000;

                            const compteur = document.getElementById('compteur');

                            function miseAJourCompteur(tempsRestant) {
                                const heures = Math.floor(tempsRestant / 3600);
                                const minutes = Math.floor((tempsRestant % 3600) / 60);
                                const secondes = tempsRestant % 60;

                                compteur.textContent = `0${heures}:0${minutes}:${secondes}`;


                                if (tempsRestant <= 0) {
                                    clearInterval(intervalId); // Arrêter le décompte lorsque le temps est écoulé
                                    document.querySelector('.sub').style.display = 'block';
                                    document.querySelector('.chrono').style.display = 'none';

                                }
                            }

                            let tempsRestant = dureeEnMinutes * 60; // Temps restant en secondes
                            miseAJourCompteur(tempsRestant);

                            const intervalId = setInterval(() => {
                                tempsRestant--;
                                miseAJourCompteur(tempsRestant);
                            }, 1000); // Mettre à jour le compteur toutes les secondes

                            // =================== timer =====================
                        }
                    }, 3000);

                } else {
                    message.style.display = 'block';
                    setTimeout(function () {
                        message.style.display = 'none';
                    }, 3000);
                }
            }
        });
    });
} else if (window.location.pathname.includes('dashboard.html')) {
    document.addEventListener("DOMContentLoaded", function () {
        const profilImage = document.getElementById('profil');
        // Récupérez les informations de l'utilisateur connecté depuis localStorage
        const utilisateurConnecte = JSON.parse(localStorage.getItem('utilisateurConnecte'));
        // Vérifiez si l'utilisateur est connecté
        if (utilisateurConnecte) {
            // Mise à jour de la source de l'image de profil avec l'URL de la photo de profil de l'utilisateur connecté
            profilImage.src = utilisateurConnecte.profil;
        }

    });
} else if (window.location.pathname.includes('facture.html')) {
    document.addEventListener("DOMContentLoaded", function () {
        const profilImage = document.getElementById('profil');
        // Récupérez les informations de l'utilisateur connecté depuis localStorage
        const utilisateurConnecte = JSON.parse(localStorage.getItem('utilisateurConnecte'));

        // Vérifiez si l'utilisateur est connecté
        if (utilisateurConnecte) {
            // Mise à jour de la source de l'image de profil avec l'URL de la photo de profil de l'utilisateur connecté
            profilImage.src = utilisateurConnecte.profil;
        }
        // Appeler la fonction pour ajouter les lignes de manière dynamique
        ajouterLignesDynamiquementFacture();

        // Ajouter un gestionnaire d'événement à l'input de recherche
        const searchInput = document.getElementById('searchInputFacture');
        searchInput.addEventListener('input', function () {
            filtrerParLaboratoireFacture(this.value);  // Hassane Abdel-Razak
        });

        // Ajouter un gestionnaire d'événement à l'en-tête de colonne facture
        const thElements = document.querySelectorAll('thead th[data-sort-direction]');
        thElements.forEach(function (th) {
            th.addEventListener('click', function () {
                trierTableauFacture(this.cellIndex, this.getAttribute('data-sort-direction'));
            });
        });

    });

} else if (window.location.pathname.includes('commande.html')) {
    // Code spécifique à la page dashboard.html
    document.addEventListener("DOMContentLoaded", function () {

        const profilImage = document.getElementById('profil');
        const avatarImage = document.getElementById('avatarImage');

        // Récupérez les informations de l'utilisateur connecté depuis localStorage
        const utilisateurConnecte = JSON.parse(localStorage.getItem('utilisateurConnecte'));

        // Vérifiez si l'utilisateur est connecté
        if (utilisateurConnecte) {
            // Mise à jour de la source de l'image de profil avec l'URL de la photo de profil de l'utilisateur connecté
            profilImage.src = utilisateurConnecte.profil;

        }
        // Appeler la fonction pour ajouter les lignes de manière dynamique
        ajouterLignesDynamiquementCommande()

        // Ajouter un gestionnaire d'événement à l'input de recherche
        const searchInput = document.getElementById('searchInputCommande');
        searchInput.addEventListener('input', function () {
            filtrerParLaboratoireCommande(this.value);
        });

        const thElements = document.querySelectorAll('thead th[data-sort-direction]');
        thElements.forEach(function (th) {
            th.addEventListener('click', function () {
                trierTableauCommande(this.cellIndex, this.getAttribute('data-sort-direction'));
            });
        });

    });
} else if (window.location.pathname.includes('suivi.html')) {
    // Code spécifique à la page dashboard.html 
    document.addEventListener("DOMContentLoaded", function () {  // Hassane Abdel-Razak

        const profilImage = document.getElementById('profil');

        // Récupérez les informations de l'utilisateur connecté depuis localStorage
        const utilisateurConnecte = JSON.parse(localStorage.getItem('utilisateurConnecte'));

        // Vérifiez si l'utilisateur est connecté
        if (utilisateurConnecte) {
            // Mise à jour de la source de l'image de profil avec l'URL de la photo de profil de l'utilisateur connecté
            profilImage.src = utilisateurConnecte.profil;
        }
        // Appeler la fonction pour ajouter les lignes de manière dynamique
        ajouterLignesDynamiquementSuivi()

        // Ajouter un gestionnaire d'événement à l'input de recherche
        const searchInput = document.getElementById('searchInputSuivi');
        searchInput.addEventListener('input', function () {
            filtrerParLotSuivi(this.value);
        });

        const thElements = document.querySelectorAll('thead th[data-sort-direction]');
        thElements.forEach(function (th) {
            th.addEventListener('click', function () {
                trierTableauSuivi(this.cellIndex, this.getAttribute('data-sort-direction'));
            });
        });

    });
} else if (window.location.pathname.includes('compte.html')) {
    //    code specifique au parametre de compte
    document.addEventListener("DOMContentLoaded", function () {
        // Sélectionnez l'élément de la photo de profil dans votre page HTML
        const profilImage = document.getElementById('profil');
        const avatarImage = document.getElementById('avatarImage');
        const titreNotif = document.querySelector('.titreNotif');
        const corpsNotif = document.querySelector('.corpsNotif');
        const supAvatar = document.getElementById('supAvatarBouton');
        const notif = document.querySelector('.notif');
        // Récupérez les informations de l'utilisateur connecté depuis localStorage
        const utilisateurConnecte = JSON.parse(localStorage.getItem('utilisateurConnecte'));
        const users = JSON.parse(localStorage.getItem('users'));

        // Vérifiez si l'utilisateur est connecté
        if (utilisateurConnecte) {
            // Mise à jour de la source de l'image de profil avec l'URL de la photo de profil de l'utilisateur connecté
            profilImage.src = utilisateurConnecte.profil;
            avatarImage.src = utilisateurConnecte.profil;  // Hassane Abdel-Razak
        }
        recup();
        // Sélectionnez le bouton "Modifier la photo" par son ID
        const modifierAvatarButton = document.getElementById('modifierAvatarButton');
        // Sélectionnez également l'input de type "file" que nous avons ajouté
        const fileInput = document.getElementById('fileInput');
        // Ajoutez un gestionnaire d'événement pour le bouton "Modifier la photo"
        modifierAvatarButton.addEventListener('click', function () {
            // Cliquez sur l'input de type "file" pour ouvrir la boîte de dialogue de sélection de fichier
            corpsNotif.innerHTML = `<span> Votre photo à été ajouter avec success </span>`;
            titreNotif.innerHTML = `<h2>Modification de l'Avatar</h2>`;
            fileInput.click();
        });
        // Ajoutez un gestionnaire d'événement pour l'input de type "file" lors de la sélection d'une nouvelle photo
        fileInput.addEventListener('change', function (event) {
            const selectedFile = event.target.files[0];
            if (selectedFile) {
                // L'utilisateur a sélectionné un fichier, vous pouvez maintenant mettre à jour l'image de l'avatar
                const objectURL = URL.createObjectURL(selectedFile);
                avatarImage.src = objectURL;
                profilImage.src = objectURL;
                // Mise à jour de la source de l'image de profil dans le localStorage
                utilisateurConnecte.profil = objectURL;
                localStorage.setItem('utilisateurConnecte', JSON.stringify(utilisateurConnecte));
                for (let i = 0; i < users.length; i++) {
                    if (users[i].name === utilisateurConnecte.name) {
                        // Mettez à jour les propriétés de l'utilisateur avec les nouvelles valeurs
                        users[i].profil = objectURL;
                        // Vous pouvez enregistrer les données mises à jour dans le localStorage ici si nécessaire
                        localStorage.setItem('users', JSON.stringify(users));
                    }
                }
                notif.style.display = 'block';
                setTimeout(function () {
                    notif.style.display = 'none';
                }, 3000);
            }
        });
        // Ajoutez un gestionnaire d'événement pour l'input de type "file" lors de la sélection d'une nouvelle photo  
        // Sélectionnez le formulaire de mise à jour du compte
        const compteForm = document.getElementById('parametreCompte');
        // Ajoutez un gestionnaire d'événements pour la soumission du formulaire
        compteForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Empêchez la soumission du formulaire par défaut

            // Récupérez les nouvelles valeurs du nom, de l'email et de la biographie
            const nouveauNom = document.getElementById('nom').value;
            const nouvelEmail = document.getElementById('email').value;
            const nouvelleBiographie = document.getElementById('biographie').value;

            corpsNotif.innerHTML = `<span> La mise à jour à été éffectuée avec success </span>`;
            titreNotif.innerHTML = `<h2>Données personnelles</h2>`;

            // Appelez la fonction de mise à jour du profil avec les nouvelles valeurs
            mettreAJourProfil(nouveauNom, nouvelEmail, nouvelleBiographie);
        });
        // Ajoutez un écouteur d'événements de clic au bouton
        supAvatar.addEventListener('click', function () {
            // Définissez l'attribut src de l'élément avatarImage avec l'URL de l'image par défaut
            avatarImage.src = 'Image/default-avatar.png'; // Remplacez par l'URL réelle de l'image par défaut
            profilImage.src = 'Image/default-avatar.png';  // Hassane Abdel-Razak

            corpsNotif.innerHTML = `<span> La photo de profil a bien été supprimée </span>`;
            titreNotif.innerHTML = `<h2>Photo de profil</h2>`;

            // Affichez un message ou effectuez d'autres actions pour confirmer la mise à jour
            notif.style.display = 'block';
            setTimeout(function () {
                notif.style.display = 'none';
            }, 3000);
            // Vous pouvez également mettre à jour les informations de profil de l'utilisateur dans localStorage si nécessaire
            const utilisateurConnecte = JSON.parse(localStorage.getItem('utilisateurConnecte'));
            if (utilisateurConnecte) {
                utilisateurConnecte.profil = avatarImage.src;
                localStorage.setItem('utilisateurConnecte', JSON.stringify(utilisateurConnecte));
            }
        });
        // ====================   modifier MP ===================
        // Sélectionnez le bouton "Modifier le mot de passe" par son ID
        const ModMp = document.querySelector('#ModMp');
        const MpModifier = document.querySelector('.MpModifier');
        // Ajoutez un gestionnaire d'événement pour le clic sur le bouton "Modifier le mot de passe"
        ModMp.addEventListener('click', function (e) {
            MpModifier.style.display = 'block'
        });
        // Sélectionnez le formulaire de mise à jour du mot de passe (MMPForm)
        const mmpForm = document.getElementById('MMPForm');
        // Ajoutez un gestionnaire d'événements pour la soumission du formulaire
        mmpForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Empêchez la soumission du formulaire par défaut
            // Récupérez les valeurs du formulaire MMPForm
            const ancienMotDePasse = document.getElementById('ancienMP').value;
            const nouveauMotDePasse = document.getElementById('newMp').value;
            const confirmationNouveauMotDePasse = document.getElementById('confNewMp').value;
            const utilisateurConnecte = JSON.parse(localStorage.getItem('utilisateurConnecte'));
            const users = JSON.parse(localStorage.getItem('users'));
            if (utilisateurConnecte) {
                if (ancienMotDePasse === utilisateurConnecte.pass) {
                    if (nouveauMotDePasse === confirmationNouveauMotDePasse) {
                        const utilisateurConnecte = JSON.parse(localStorage.getItem('utilisateurConnecte'));
                        utilisateurConnecte.pass = nouveauMotDePasse;
                        localStorage.setItem('utilisateurConnecte', JSON.stringify(utilisateurConnecte));
                        for (let i = 0; i < users.length; i++) {
                            if (users[i].name === utilisateurConnecte.name) {
                                // Mettez à jour les propriétés de l'utilisateur avec les nouvelles valeurs
                                users[i].pass = nouveauMotDePasse;
                                // Vous pouvez enregistrer les données mises à jour dans le localStorage ici si nécessaire
                                localStorage.setItem('users', JSON.stringify(users));
                            }
                        }
                        titreNotif.textContent = "Modifier mot de passe";
                        corpsNotif.textContent = "Mot de passe modiffier avec success";
                        notif.style.display = 'block';
                        setTimeout(function () {
                            notif.style.display = 'none';
                        }, 3000);
                    } else {
                        titreNotif.textContent = "Modifier mot de passe";
                        corpsNotif.textContent = "Nouveau mot de passe non confirmer";
                        notif.style.display = 'block';
                        setTimeout(function () {  // Hassane Abdel-Razak
                            notif.style.display = 'none';
                        }, 3000);
                    }
                } else {
                    titreNotif.textContent = "Modifier mot de passe";
                    corpsNotif.textContent = "Modification impossible Mot de passe incorect";
                    notif.style.display = 'block';
                    setTimeout(function () {
                        notif.style.display = 'none';
                    }, 3000);
                }
            }
            MpModifier.style.display = 'none';
        });
        // ====================   modifier MP ===================
        // ====================   Supprimer compte ===================
        const SupMp = document.getElementById('SupMp');
        SupMp.addEventListener('click', function (e) {

            const notif = document.querySelector('.notif');
            const titreNotif = document.querySelector('.titreNotif');
            const corpsNotif = document.querySelector('.corpsNotif');

            const confirmation = prompt("Voulez-vous vraiment supprimer le compte? Entrez 'Y' pour Oui ou 'N' pour Non");
            // Vérifiez la réponse de l'utilisateur
            if (confirmation !== null) {
                if (confirmation.toUpperCase() === 'Y') {
                    // Récupérez la liste des utilisateurs depuis le localStorage
                    const users = JSON.parse(localStorage.getItem('users'));

                    console.log(users);

                    // Récupérez l'ID de l'utilisateur connecté
                    const utilisateurConnecteId = JSON.parse(localStorage.getItem('utilisateurConnecte')).id;
                    console.log(utilisateurConnecteId);

                    // Filtrer la liste des utilisateurs pour supprimer l'utilisateur connecté
                    const nouveauxUtilisateurs = users.filter(user => user.id !== utilisateurConnecteId);
                    console.log(nouveauxUtilisateurs);

                    // Mettez à jour la liste des utilisateurs dans le localStorage
                    localStorage.setItem('users', JSON.stringify(nouveauxUtilisateurs));

                    // Supprimez également l'utilisateur connecté du localStorage
                    localStorage.removeItem('utilisateurConnecte');

                    titreNotif.textContent = 'Suppression de compte';
                    corpsNotif.textContent = 'Compte supprimé avec succès';
                    notif.style.display = 'block';
                    setTimeout(function () {
                        notif.style.display = 'none';
                        window.location.href = "index.html";
                    }, 3000);
                    console.log("Compte supprimé avec succès");  // Hassane Abdel-Razak
                } else {
                    titreNotif.textContent = 'Suppression de compte';
                    corpsNotif.textContent = 'Suppression du compte annulée';
                    notif.style.display = 'block';
                    setTimeout(function () {
                        notif.style.display = 'none';
                    }, 3000);
                    console.log("Suppression du compte annulée");
                }
            } else {
                titreNotif.textContent = 'Suppression de compte';
                corpsNotif.textContent = 'Suppression du compte annulée';
                notif.style.display = 'block';
                setTimeout(function () {
                    notif.style.display = 'none';
                }, 3000);
                console.log("Suppression du compte annulée");
            }
        })
        // ====================   Supprimer compte ===================

    })
} else if (window.location.pathname.includes('serviceClient.html')) {
    document.addEventListener("DOMContentLoaded", function () {
        const profilImage = document.getElementById('profil');
        // Récupérez les informations de l'utilisateur connecté depuis localStorage
        const utilisateurConnecte = JSON.parse(localStorage.getItem('utilisateurConnecte'));
        // Vérifiez si l'utilisateur est connecté
        if (utilisateurConnecte) {
            // Mise à jour de la source de l'image de profil avec l'URL de la photo de profil de l'utilisateur connecté
            profilImage.src = utilisateurConnecte.profil;

        }

    });
} else if (window.location.pathname.includes('detail.html')) {
    document.addEventListener("DOMContentLoaded", function () {
        const profilImage = document.getElementById('profil');
        // Récupérez les informations de l'utilisateur connecté depuis localStorage
        const utilisateurConnecte = JSON.parse(localStorage.getItem('utilisateurConnecte'));
        // Vérifiez si l'utilisateur est connecté
        if (utilisateurConnecte) {
            // Mise à jour de la source de l'image de profil avec l'URL de la photo de profil de l'utilisateur connecté
            profilImage.src = utilisateurConnecte.profil;
        }
        // Obtenez la valeur du paramètre "lot" de l'URL
        const lot = getParametreURL('lot');
        // Faites quelque chose avec la valeur du "lot", par exemple, affichez-la dans la console
        console.log('Valeur du paramètre "lot" :', lot);
        // Vous pouvez maintenant utiliser la valeur du "lot" comme bon vous semble dans votre page "détail"
        const rapportFor = document.querySelector('#rap');
        rapportFor.innerHTML = `<h2 class=""> <b>Rapport:</b> R-${lot}</h2>`
        console.log(rapportFor.innerHTML);
        const rapportFor1 = document.querySelector('.rap1');
        rapportFor1.innerText = `Rapport d'Analyse (${lot})`;
        console.log(rapportFor1.innerText);

    });
}
// ... Autres pages ...

// ============================ Fonctions ===========================
// Fonction pour ajouter les éléments du tableau Facture de manière dynamique
function ajouterLignesDynamiquementFacture() {
    var table = document.getElementById("facture");
    var tbody = table.querySelector('.tbodyFacture');

    // Parcours des données des factures dans datas.factures
    datas.factures.forEach(function (facture) {
        var newRow = tbody.insertRow(tbody.rows.length);

        // Créez des cellules pour chaque propriété de l'objet facture
        var idFactureCell = newRow.insertCell(0);
        idFactureCell.innerHTML = facture.idFacture;

        var laboratoireCell = newRow.insertCell(1);
        laboratoireCell.innerHTML = facture.laboratoire;
        // Hassane Abdel-Razak
        var dateFactureCell = newRow.insertCell(2);
        dateFactureCell.innerHTML = facture.dateFacture;

        var btnFactureCell = newRow.insertCell(3);
        btnFactureCell.innerHTML = `<button type="button" class="btn btn-md" style="background: #4A96A6; color:#fff">VOIR</button>`;

        // Vous pouvez ajouter d'autres propriétés de l'objet facture si nécessaire
    });
}
// Fonction pour ajouter les éléments du tableau Facture de manière dynamique

// Fonction de filtre par laboratoire facture
function filtrerParLaboratoireFacture(keyword) {
    const tbody = document.querySelector('.tbodyFacture');
    const rows = tbody.querySelectorAll('tr');

    rows.forEach(function (row) {
        const laboratoireCell = row.cells[1].textContent;

        // Comparer le laboratoire avec le mot-clé de recherche
        if (laboratoireCell.toLowerCase().includes(keyword.toLowerCase())) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
}
// Fonction de filtre par laboratoire facture

// Fonction de tri du tableau facture
function trierTableauFacture(colonne, direction) {
    const tbody = document.querySelector('.tbodyFacture');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    // Trier les lignes en fonction de la colonne spécifiée
    rows.sort(function (a, b) {
        const cellA = a.cells[colonne].textContent.trim();
        const cellB = b.cells[colonne].textContent.trim();

        if (direction === 'asc') {
            return cellA.localeCompare(cellB);
        } else {
            return cellB.localeCompare(cellA);
        }
    });

    // Réinsérer les lignes triées dans le tableau
    rows.forEach(function (row) {
        tbody.appendChild(row);
    });

    // Mettre à jour la direction de tri dans l'en-tête de colonne
    const thElements = document.querySelectorAll('thead th[data-sort-direction]');
    thElements.forEach(function (th, index) {
        th.setAttribute('data-sort-direction', index === colonne && direction === 'asc' ? 'desc' : 'asc');
    });
}
// Fonction de tri du tableau facture

// Fonction pour ajouter les éléments du tableau Commande de manière dynamique
function ajouterLignesDynamiquementCommande() {
    var table = document.getElementById("commande");
    var tbody = table.querySelector('.tbodyCommande');

    // Parcours des données des factures dans datas.factures
    datas.commandes.forEach(function (commande) {
        var newRow = tbody.insertRow(tbody.rows.length);

        // Créez des cellules pour chaque propriété de l'objet facture
        var idCommandeCell = newRow.insertCell(0);
        idCommandeCell.innerHTML = commande.idCommande;

        var laboratoireCell = newRow.insertCell(1);
        laboratoireCell.innerHTML = commande.laboratoire;
        // Hassane Abdel-Razak
        var dateCommandeCell = newRow.insertCell(2);
        dateCommandeCell.innerHTML = commande.date;

        var statutCommandeCell = newRow.insertCell(3);
        statutCommandeCell.innerHTML = commande.statut;

        var btnCommandeCell = newRow.insertCell(4);
        btnCommandeCell.innerHTML = `<button type="button" class="btn btn-md" style="background: #4A96A6; color:#fff">VOIR</button>`;

        // Vous pouvez ajouter d'autres propriétés de l'objet facture si nécessaire
    });
}
// Fonction pour ajouter les éléments du tableau Commande de manière dynamique


// Fonction de filtre par laboratoire commande
function filtrerParLaboratoireCommande(keyword) {
    const tbody = document.querySelector('.tbodyCommande');
    const rows = tbody.querySelectorAll('tr');

    rows.forEach(function (row) {
        const laboratoireCell = row.cells[1].textContent;

        // Comparer le laboratoire avec le mot-clé de recherche
        if (laboratoireCell.toLowerCase().includes(keyword.toLowerCase())) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
}
// Fonction de filtre par laboratoire commande

// Fonction de tri du tableau commande
function trierTableauCommande(colonne, direction) {
    const tbody = document.querySelector('.tbodyCommande');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    // Trier les lignes en fonction de la colonne spécifiée
    rows.sort(function (a, b) {
        const cellA = a.cells[colonne].textContent.trim();
        const cellB = b.cells[colonne].textContent.trim();

        if (direction === 'asc') {
            return cellA.localeCompare(cellB);
        } else {
            return cellB.localeCompare(cellA);
        }
    });

    // Réinsérer les lignes triées dans le tableau
    rows.forEach(function (row) {
        tbody.appendChild(row);
    });  // Hassane Abdel-Razak

    // Mettre à jour la direction de tri dans l'en-tête de colonne
    const thElements = document.querySelectorAll('thead th[data-sort-direction]');
    thElements.forEach(function (th, index) {
        th.setAttribute('data-sort-direction', index === colonne && direction === 'asc' ? 'desc' : 'asc');
    });
}
// Fonction de tri du tableau commande

// Fonction pour ajouter les éléments du tableau suivi de manière dynamique
function ajouterLignesDynamiquementSuivi() {
    var table = document.getElementById("suivi");
    var tbody = table.querySelector('.tbodySuivi');
    const suivis = JSON.parse(localStorage.getItem('suivis'));

    // Parcours des données des factures dans datas.factures
    datas.suivis.forEach(function (suivi) {
        var newRow = tbody.insertRow(tbody.rows.length);

        // Créez des cellules pour chaque propriété de l'objet facture
        var lotCell = newRow.insertCell(0);
        lotCell.innerHTML = suivi.lot;

        var etatCell = newRow.insertCell(1);
        etatCell.innerHTML = suivi.etat;

        var dateSuiviCell = newRow.insertCell(2);
        dateSuiviCell.innerHTML = suivi.date;

        var rapportCell = newRow.insertCell(3);
        rapportCell.innerHTML = suivi.rapport;

        var btnFactureCell = newRow.insertCell(4);
        btnFactureCell.innerHTML = `<button type="button" class="btn btn-md" style="background: #4A96A6; color:#fff" onclick="versDetail(this)">VOIR</button>`;

        // Vous pouvez ajouter d'autres propriétés de l'objet facture si nécessaire
    });
}
// Fonction pour ajouter les éléments du tableau suivi de manière dynamique

// Fonction de filtre par lot suivi
function filtrerParLotSuivi(keyword) {
    const tbody = document.querySelector('.tbodySuivi');
    const rows = tbody.querySelectorAll('tr');

    rows.forEach(function (row) {
        const lotCell = row.cells[0].textContent;

        // Comparer le laboratoire avec le mot-clé de recherche
        if (lotCell.toLowerCase().includes(keyword.toLowerCase())) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
}// Fonction de filtre par lot suivi

// Fonction de tri du tableau suivi
function trierTableauSuivi(colonne, direction) {
    const tbody = document.querySelector('.tbodySuivi');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    // Trier les lignes en fonction de la colonne spécifiée
    rows.sort(function (a, b) {
        const cellA = a.cells[colonne].textContent.trim();
        const cellB = b.cells[colonne].textContent.trim();

        if (direction === 'asc') {
            return cellA.localeCompare(cellB);
        } else {
            return cellB.localeCompare(cellA);
        }
    });  // Hassane Abdel-Razak

    // Réinsérer les lignes triées dans le tableau
    rows.forEach(function (row) {
        tbody.appendChild(row);
    });

    // Mettre à jour la direction de tri dans l'en-tête de colonne
    const thElements = document.querySelectorAll('thead th[data-sort-direction]');
    thElements.forEach(function (th, index) {
        th.setAttribute('data-sort-direction', index === colonne && direction === 'asc' ? 'desc' : 'asc');
    });
}
// Fonction de tri du tableau suivi
//  fonction de récupération et d'affichages des informations
function recup() {
    const nom = document.querySelector('#nom');
    const mail = document.querySelector('#email');
    const bio = document.querySelector('#biographie');
    const avatar = document.querySelector('.compteAvatar');
    const utilisateurConnecte = JSON.parse(localStorage.getItem('utilisateurConnecte'));
    if (utilisateurConnecte) {
        nom.value = utilisateurConnecte.name;
        mail.value = utilisateurConnecte.email;
        bio.textContent = utilisateurConnecte.bio;
    }
}
//  fonction de récupération et d'affichages des informations
// Fonction pour mettre à jour le profil de l'utilisateur
function mettreAJourProfil(nouveauNom, nouvelEmail, nouvelleBiographie) {
    // Récupérez l'utilisateur connecté depuis le localStorage
    const utilisateurConnecte = JSON.parse(localStorage.getItem('utilisateurConnecte'));
    const users = JSON.parse(localStorage.getItem('users'));
    const notif = document.querySelector('.notif');
    if (utilisateurConnecte) {
        // Récupérez le nom de l'utilisateur connecté
        const nomUtilisateurConnecte = utilisateurConnecte.name;
        // Parcourez tous les utilisateurs dans le tableau users
        for (let i = 0; i < users.length; i++) {
            if (users[i].name === nomUtilisateurConnecte) {
                // Mettez à jour les propriétés de l'utilisateur avec les nouvelles valeurs
                users[i].name = nouveauNom;
                users[i].email = nouvelEmail;
                users[i].bio = nouvelleBiographie;
                // Vous pouvez enregistrer les données mises à jour dans le localStorage ici si nécessaire
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('utilisateurConnecte', JSON.stringify(users));
                // Affichez un message ou effectuez d'autres actions pour confirmer la mise à jour
                notif.style.display = 'block';
                setTimeout(function () {
                    notif.style.display = 'none';
                }, 3000);
            }
        }
    } else {
        // Gérez le cas où l'utilisateur connecté n'est pas trouvé
        alert('Impossible de mettre à jour les informations du compte.');
    }

}
// Fonction pour mettre à jour le profil de l'utilisateur
// fonction qui gere la redirection vers la page de detail
// Définissez la fonction pour rediriger vers la page "détail"
function versDetail(bouton) {
    // Obtenez la ligne du tableau la plus proche (tr)
    let ligne = bouton.closest('tr');  // Hassane Abdel-Razak

    // Obtenez le contenu de la cellule "lot" de la ligne
    let valeurLot = ligne.cells[0].innerHTML; // En supposant que "lot" est dans la première cellule (indice 0)
    let valeurRapport = ligne.cells[3].textContent; // En supposant que "rapport" est dans la Quatrieme cellule (indice 3)
    // Vérifiez si un rapport est disponible (vous pouvez ajouter votre logique ici)
    // let rapportDisponible = true; // Exemple : en supposant qu'un rapport est disponible

    // Redirigez vers la page "détail" si un rapport est disponible
    if (valeurRapport === 'Disponible') {
        // alert(valeurLot);
        // Construisez l'URL pour la page "détail" et incluez la valeur de lot en tant que paramètre de requête
        var urlPageDetail = 'detail.html?lot=' + encodeURIComponent(valeurLot);
        window.location.href = urlPageDetail;
        // window.open("detail.html", "_self");
    } else {
        // Gérez le cas où un rapport n'est pas disponible
        alert('Rapport non disponible pour le lot : ' + valeurLot);
    }
}
// Fonction pour obtenir les paramètres de l'URL
function getParametreURL(nom) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(nom);
}

// fonction qui gere la redirection vers la page de detail
// ============================ Fonctions ===========================