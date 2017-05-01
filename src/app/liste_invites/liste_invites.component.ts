import { Component} from '@angular/core';

@Component({
  selector: 'app-liste-invites',
  templateUrl: './liste_invites.component.html',
  styleUrls: ['./liste_invites.component.css']
})
export class ListeInvitesComponent {
    invites = [
      { nom: "So ngec & Ngi", image: 'images/photos/parents_lee.jpg'},
      { nom: "Sophie & Sylvie", image: 'images/photos/sylvie_sophie.jpg'},
      { nom: "Jany", image: 'images/photos/jany.jpg'},
      { nom: "Viviane", image: 'images/photos/viviane.jpg'},
      { nom: "Magali", image: 'images/photos/magali.jpg'},
      { nom: "Henan & Françis", image: 'images/photos/henan.png'},
      { nom: "Romain", image: 'images/photos/romain_z.jpg'},
      { nom: "Diana", image: 'images/photos/diana.jpg'},
      { nom: "Margherita", image: 'images/photos/margherita.jpg'},
      { nom: "Boris", image: 'images/photos/boris.jpg'},
      { nom: "Fernando", image: 'images/photos/fernando.jpg'},
      { nom: "Jeevethan", image: 'images/photos/jeev.jpg'},
      { nom: "Aurélia", image: 'images/photos/aurelia.jpg'},
      { nom: "Adrien & Margaux", image: 'images/photos/adrien_margaux.jpg'},
      { nom: "Linh & Côme", image: 'images/photos/linh.jpg'},
      { nom: "Souad", image: 'images/photos/souad.jpg'},
      { nom: "Nathalie", image: 'images/photos/nathalie.jpg'},
      { nom: "Suzel & Céline", image: 'images/photos/suzel_celine.jpg'},
      { nom: "Delphine", image: 'images/photos/delphine.jpg'},
      { nom: "Bounthanh & Sok Phan", image: 'images/photos/bounthanh.jpg'},
      { nom: "Leton & Nolwen", image: 'images/photos/leton_nolwen.jpg'},
      { nom: "Romain", image: 'images/photos/romain_a.jpg'},
      { nom: "William", image: 'images/photos/william.jpg'},  
      { nom: "Filipe", image: 'images/photos/filipe.jpeg'},
      { nom: "Aurore", image: 'images/photos/Aurore.png'},
      { nom: "Victor", image: 'images/photos/victor_c.jpg'},
      { nom: "Bastien", image: 'images/photos/bastien.jpg'},
      { nom: "Bounkong & Karine", image: 'images/photos/boun_karine.jpg'},
      { nom: "Gina & Pierre", image: 'images/photos/gina.jpg'},
      { nom: "Benjamin, Adeline, Juliette & Roxane", image: 'images/photos/benj_adeline.jpg'},
      { nom: "Jenani & Thuraisamy", image: 'images/photos/jenani.jpg'},      
      { nom: "Yedda & Jean-Baptiste", image: 'images/photos/jb_c.jpg'},      
      { nom: "Benjamin, Stéphanie, Jean, Valentin & Roméo", image: 'images/photos/stephanie_benjamin.jpg'},
      { nom: "Rémi", image: 'images/photos/remi.jpg'},
      { nom: "Bertrand & Alexandra", image: 'images/photos/bertrand_alex.jpg'},
      { nom: "Dominique", image: 'images/photos/dominique.jpg'},
      { nom: "Jacques", image: 'images/photos/jacques.jpg'},      
      { nom: "Maissa", image: 'images/photos/maissa.jpg'},
      { nom: "Céline & Jean-Baptiste", image: 'images/photos/celine_jb.jpg'},
      { nom: "Claire & Nicolas", image: 'images/photos/claire.jpg'},  
      { nom: "Simon", image: 'images/photos/simon.jpg'},      
      { nom: "Chitta & Khamseng", image: 'images/photos/chitta.jpg'},
      { nom: "Valentine & Hélène", image: 'images/photos/valentine.jpg'},
      { nom: "Claire", image: 'images/photos/claire_l.jpg'},
      { nom: "Charlotte", image: 'images/photos/charlotte.jpg'},
      { nom: "Nicolas & Elodee", image: 'images/photos/nicolas_elodee.jpg'},
      { nom: "Victor", image: 'images/photos/victor_d.jpg'},
      { nom: "Jean-Christophe", image: 'images/photos/jc.jpg'},
      { nom: "Florent", image: 'images/photos/florent.jpg'}, 
      { nom: "Clément", image: 'images/photos/clement_d.jpg'},
      { nom: "Eric", image: 'images/photos/eric.jpg'},
      { nom: "Catherine", image: 'images/photos/catherine.jpg'},
      
      { nom: "Christian", image: 'images/photos/christian.jpg'},      
      { nom: "Sandrine", image: 'images/photos/sandrine.jpg'},      
      { nom: "Louis", image: 'images/photos/louis.jpg'},
      { nom: "Yannis", image: 'images/photos/yannis.jpg'},      
      { nom: "Vincent", image: 'images/photos/vincent.jpg'},      
      { nom: "William", image: 'images/photos/william_c.jpg'},
      { nom: "Clément", image: 'images/photos/clement_f.jpg'},
      { nom: "Paulette", image: 'images/photos/paulette.jpg'},
      { nom: "Bertrand", image: 'images/photos/bertrand.jpg'},
      { nom: "Mado", image: 'images/photos/mado.jpg'},
      { nom: "Rémi", image: 'images/photos/remi_b.jpg'},
      { nom: "Laurent", image: 'images/photos/laurent.jpg'},
      { nom: "Jérôme", image: 'images/photos/jerome.jpg'},
      { nom: "Erika", image: 'images/photos/erika.jpg'},
      { nom: "Laurie", image: 'images/photos/laurie.jpg'},
      { nom: "Vincent", image: 'images/photos/vincent_d.jpg'},      
      { nom: "Walid", image: 'images/photos/walid.jpg'},      
      { nom: "Raphaëlle", image: 'images/photos/raphaelle.jpg'},
      { nom: "Thibault", image: 'images/photos/thibault.jpg'},
      { nom: "Virgil", image: 'images/photos/virgil.jpg'},
      { nom: "Thierry", image: 'images/photos/thierry.jpg'},
      { nom: "Mickaël", image: 'images/photos/mickael.jpg'},
      { nom: "Henrique", image: 'images/photos/henrique.jpg'},
      
      
      { nom: "Mme Misley",  image: 'images/icone_fille.png'},
      { nom: "Mme Talamona",  image: 'images/icone_fille.png'},
      { nom: "Anne-Laure",  image: 'images/icone_fille.png'},
      { nom: "Mme Oliva",  image: 'images/icone_fille.png'},
      
      { nom: "Patrick", image: 'images/photos/patrick.jpg'},    
      { nom: "Youcef", image: 'images/icone_garcon.png'},
      { nom: "Daisy", image: 'images/icone_fille.png'},
      { nom: "Guillaume", image: 'images/photos/icone_garcon.png'}
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
        }
        
    }

    leave($event) {
        var block = document.getElementById("imgRender");

    }
}
