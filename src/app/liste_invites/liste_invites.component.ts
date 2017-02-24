import { Component} from '@angular/core';

@Component({
  selector: 'app-liste-invites',
  templateUrl: './liste_invites.component.html',
  styleUrls: ['./liste_invites.component.css']
})
export class ListeInvitesComponent {
    invites = [
      { nom: "So ngec", image: 'images/icone_fille.png'},
      { nom: "Ngi", image: 'images/icone_garcon.png'},
      { nom: "Karine", image: 'images/icone_fille.png'},
      { nom: "Bounkong", image: 'images/icone_garcon.png'},
      { nom: "Sylvie & Sophie", image: 'images/sylvie_sophie.jpg'},
      { nom: "Dominique", image: 'images/icone_fille.png'},
      { nom: "Jacques", image: 'images/icone_garcon.png'},
      { nom: "Nathalie", image: 'images/icone_fille.png'},
      { nom: "Stéphanie", image: 'images/icone_fille.png'},
      { nom: "Benjamin", image: 'images/icone_garcon.png'},
      { nom: "Eric", image: 'images/icone_garcon.png'},
      { nom: "Guillaume", image: 'images/icone_garcon.png'},
      { nom: "Jany", image: 'images/jany.jpg'},
      { nom: "Aurore", image: 'images/icone_fille.png'},
      { nom: "Viviane", image: 'images/icone_fille.png'},
      { nom: "Patrick", image: 'images/icone_garcon.png'},
      { nom: "William", image: 'images/icone_garcon.png'},
      { nom: "Suzel", image: 'images/icone_garcon.png'},
      { nom: "Daisy", image: 'images/icone_fille.png'},
      { nom: "Victor", image: 'images/icone_garcon.png'},
      { nom: "Sandrine", image: 'images/icone_fille.png'},
      { nom: "Jenani", image: 'images/icone_fille.png'},
      { nom: "Delphine", image: 'images/icone_fille.png'},
      { nom: "Filipe", image: 'images/icone_garcon.png'},
      { nom: "Youcef", image: 'images/icone_garcon.png'},
      { nom: "Gina & Pierre", image: 'images/icone_garcon.png'},
      { nom: "Magali", image: 'images/icone_fille.png'},
      { nom: "Maissa", image: 'images/icone_fille.png'},
      { nom: "Maly", image: 'images/icone_fille.png'},
      { nom: "Henan", image: 'images/icone_fille.png'},
      { nom: "Romain", image: 'images/icone_garcon.png'},
      { nom: "Romain", image: 'images/icone_garcon.png'},
      { nom: "Catherine", image: 'images/icone_fille.png'},
      { nom: "Christian", image: 'images/icone_garcon.png'},
      { nom: "Céline", image: 'images/icone_fille.png'},
      { nom: "Jean-Baptiste", image: 'images/icone_garcon.png'},
      { nom: "Claire", image: 'images/icone_fille.png'},
      { nom: "Nicolas", image: 'images/icone_garcon.png'},
      { nom: "Benjamin & Adeline", image: 'images/icone_garcon.png'},
      { nom: "Rémi", image: 'images/icone_garcon.png'},
      { nom: "Louis", image: 'images/icone_garcon.png'},
      { nom: "Clément", image: 'images/icone_garcon.png'},
      { nom: "Florent", image: 'images/icone_garcon.png'},
      { nom: "Bertrand & Alexandra", image: 'images/icone_garcon.png'},
      { nom: "Jean-Christophe", image: 'images/icone_garcon.png'},
      { nom: "Yannis", image: 'images/icone_garcon.png'},
      { nom: "Simon", image: 'images/icone_garcon.png'},
      { nom: "Bastien", image: 'images/icone_garcon.png'},
      { nom: "Victor", image: 'images/icone_garcon.png'},
      { nom: "Diana", image: 'images/diana.jpg'},
      { nom: "Vincent", image: 'images/icone_garcon.png'},
      { nom: "Nicolas & Elodee", image: 'images/icone_garcon.png'},
      { nom: "William", image: 'images/icone_garcon.png'},
      { nom: "Clément", image: 'images/icone_garcon.png'},
      { nom: "Paulette", image: 'images/icone_fille.png'},
      { nom: "Bertrand", image: 'images/icone_garcon.png'},
      { nom: "Mado", image: 'images/icone_fille.png'},
      { nom: "Rémi", image: 'images/icone_garcon.png'},
      { nom: "Laurent", image: 'images/icone_garcon.png'},
      { nom: "Jérôme", image: 'images/icone_garcon.png'},
      { nom: "Erika", image: 'images/icone_fille.png'},
      { nom: "Laurie", image: 'images/icone_fille.png'},
      { nom: "Jeevethan", image: 'images/jeev.jpg'},
      { nom: "Vincent", image: 'images/icone_garcon.png'},
      { nom: "Jean-Baptiste", image: 'images/icone_garcon.png'},
      { nom: "Margherita", image: 'images/margherita.jpg'},
      { nom: "Boris", image: 'images/icone_garcon.png'},
      { nom: "Fernando", image: 'images/icone_garcon.png'},
      { nom: "Leton", image: 'images/icone_garcon.png'},
      { nom: "Aurélia", image: 'images/aurelia.jpg'},
      { nom: "Charlotte", image: 'images/icone_fille.png'},
      { nom: "Adrien & Margaux", image: 'images/adrien_margaux.jpg'},
      { nom: "Walid", image: 'images/icone_garcon.png'},
      { nom: "Linh & Côme", image: 'images/icone_garcon.png'},
      { nom: "Claire", image: 'images/icone_fille.png'},
      { nom: "Souad", image: 'images/icone_fille.png'},
      { nom: "Raphaëlle", image: 'images/icone_fille.png'},
      { nom: "Thibault", image: 'images/icone_garcon.png'},
      { nom: "Virgil", image: 'images/icone_garcon.png'},
      { nom: "Thierry", image: 'images/icone_garcon.png'},
      { nom: "Mickaël", image: 'images/icone_garcon.png'},
      { nom: "Henrique", image: 'images/icone_garcon.png'},
      { nom: "Mme Misley",  image: 'images/icone_fille.png'},
      { nom: "Mme Talamona",  image: 'images/icone_fille.png'},
      { nom: "Anne-Laure",  image: 'images/icone_fille.png'},
      { nom: "Mme Oliva",  image: 'images/icone_fille.png'},
      { nom: "Famille Chengsavang", image: 'images/icone_fille.png'},
      { nom: "Famille Bounthanh", image: 'images/icone_fille.png'}
    ]

    getInvites() {
      this.invites.sort((a: any, b: any) => {
        if (a.nom < b.nom) {
          return -1;
        } else if (a.nom > b.nom) {
          return 1;
        } else {
          return 0;
        }
        });
      return this.invites;
    }

    over($event, invite) {
        var elem = $event.target || $event.srcElement || $event.currentTarget;

        var block = document.getElementById("imgRender");

        var img = block.getElementsByTagName("img")[0];
        
        if (img) {
            img.setAttribute("src", invite.image);

            var hauteurDiff = $event.clientY + 10;
            var largeurDiff = $event.clientX + 10;

            var hauteur = hauteurDiff + img.height > window.innerHeight;
            var largeur = largeurDiff + img.width > window.innerWidth;

            if (largeur && hauteur) {
                block.setAttribute("style", "display: block; bottom: " + (window.innerHeight - hauteurDiff) + "px; right: " + (window.innerWidth - largeurDiff) + "px");
            }
            else if (largeur && !hauteur) {
                block.setAttribute("style", "display: block; top: " + hauteurDiff + "px; right: " + (window.innerWidth - largeurDiff) + "px");
            }
            else if (!largeur && hauteur) {
                block.setAttribute("style", "display: block; bottom: " + (window.innerHeight - hauteurDiff) + "px; left: " + largeurDiff + "px");
            }
            else {
                block.setAttribute("style", "display: block; top: " + hauteurDiff + "px; left: " + largeurDiff + "px");
            }
        }

        
    }

    leave($event) {
        var block = document.getElementById("imgRender");

        block.setAttribute("style", "");
    }
}