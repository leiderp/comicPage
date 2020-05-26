import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let VillanosService = /** @class */ (() => {
    let VillanosService = class VillanosService {
        constructor() {
            // private villano:any[]= 
            this.villano = [
                {
              nombre: "GALACTUS",
              bio: "es un personaje ficticio que aparece en los cómics americanos publicados por Marvel Comics . Anteriormente un hombre mortal, Galactus es una entidad cósmica que originalmente consumió planetas para mantener su fuerza vital, y cumple un papel funcional en el mantenimiento de la continuidad primaria de Marvel . Galactus fue creado por Stan Lee y Jack Kirby y apareció por primera vez en el cómic Fantastic Four # 48, publicado en marzo de 1966.",
              img: "assets/villanos/Galactus.jpg",
              aparicion: "1966-03-22",
              casa:"Marvel"
            },
            {
              nombre: "VENOM",
              bio: "es un personaje ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics , comúnmente en asociación con Spider-Man . El personaje es un extranjero sensible simbionte con una forma amorfa, semi-líquido, que sobrevive mediante unión con un anfitrión, por lo general humano. Esta forma de doble vida recibe poderes mejorados y generalmente se refiere a sí misma como Veneno. El Symbiote se introdujo originalmente como un traje alienígena vivo en The Amazing Spider-Man # 252 (mayo de 1984), con una primera aparición completa como Venom en The Amazing Spider-Man # 300 (mayo de 1988).",
              img: "assets/villanos/venom.png",
              aparicion: "1984-05-01",
              casa:"Marvel"
            },
            {
              nombre: "MAGNETO",
              bio: "es un personaje ficticio que aparece en los cómics americanos publicados por Marvel Comics , comúnmente en asociación con el X-Men . Creado por el escritor Stan Lee y el artista Jack Kirby , el personaje aparece por primera vez en The X-Men # 1 ( con fecha de portada en septiembre de 1963) como un adversario de los X-Men. El personaje es un poderoso mutante , una de una subespecie ficticia de la humanidad nacida con habilidades sobrehumanas, que tiene la capacidad de generar y controlar campos magnéticos . Magneto considera a los mutantes como evolutivamente superiores a los humanos y rechaza la posibilidad de una coexistencia pacífica humano-mutante",
              img: "assets/villanos/magneto.jpg",
              aparicion: "1963-09-01",
              casa: "Marvel"
            },
            {
              nombre: "LOKI",
              bio: "es un personaje ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics . Creado por el escritor Stan Lee , el guionista Larry Lieber y el dibujante Jack Kirby , una versión del personaje apareció por primera vez en Venus # 6 (agosto de 1949). La encarnación moderna de Loki apareció por primera vez en Journey into Mystery # 85 (octubre de 1962). El personaje, que se basa en la deidad nórdica del mismo nombre , es el dios asgardiano de la travesura y el hijo adoptivo de Odin y hermano de los superhéroes Thor yAngela , que se muestra como supervillana y antihéroe . El personaje es de género fluido , ya que ha sido representado como hombre y mujer .",
              img: "assets/villanos/Loki.jpg",
              aparicion: "1962-10-01",
              casa:"Marvel"
            },
            {
              nombre: "JOKER",
              bio: "The Joker es un supervillano creado por Bill Finger , Bob Kane y Jerry Robinson, que apareció por primera vez en el primer número del cómic Batman (25 de abril de 1940), publicado por DC Comics . El crédito por la creación del Joker se disputa; Kane y Robinson se atribuyeron la responsabilidad del diseño del Joker al tiempo que reconocieron la contribución escrita de Finger.",
              img: "assets/villanos/joker.jpg",
              aparicion: "1940-04-01",
              casa: "DC"
            },
            {
              nombre: "BRAINIAC",
              bio: "es un supervillano ficticio que aparece en los cómics estadounidenses publicados por DC Comics , generalmente como un adversario de Superman . Brainiac es el segundo archienemigo más mortal de Superman después de Lex Luthor , y también un enemigo frecuente de la Liga de la Justicia. Brainiac generalmente se representa como un cyborg extraterrestre o android . Es responsable de reducir y robar Kandor , la ciudad capital del planeta natal de Superman, Krypton . En algunas continuidades, también es responsable de la destrucción de Krypton",
              img: "assets/villanos/Brainiac.png",
              aparicion: "1958-07-01",
              casa: "DC"
            },
            {
              nombre: "LEX LUTHOR",
              bio: "es una ficción supervillano que aparecen en las publicaciones de la editorial DC Comics . El personaje fue creado por Jerry Siegel y Joe Shuster . Lex Luthor apareció originalmente en Action Comics No. 23 (portada con fecha: abril de 1940). 1 Desde entonces ha resistido como el archienemigo de Superman .",
              img: "assets/villanos/Lex_Luthor.jpg",
              aparicion: "1940-04-01",
              casa: "DC"
            },
            {
              nombre: "DARKSEID",
              bio: "es un supervillano ficticio que aparece en los cómics estadounidenses publicados por DC Comics . Creado por el escritor y artista Jack Kirby , el personaje hizo un cameo en el Superman Pal Jimmy Olsen # 134 (noviembre de 1970) antes de debutar oficialmente en Forever People # 1 (febrero de 1971).Como el gobernante tiránico y antiguo príncipe del planeta Apokolips , Darkseid es un Dios del Mal superior interdimensional extremadamente poderoso y peligroso. El objetivo final de Darkseid es conquistar el universo y eliminar todo el libre albedrío y los seres sintientes.",
              img: "assets/villanos/Darkseid.png",
              aparicion: "1970-11-15",
              casa: "DC"
            }
            ];
            console.log('Servicio Villano listo para usar');
        }
        getVillanos() {
            return this.villano;
        }
        getVillano(id) {
            return this.villano[id];
        }
        buscarVillano(palabra) {
            let villanoArr = [];
            palabra = palabra.toLowerCase();
            for (let villano of this.villano) {
                let nombre = villano.nombre.toLowerCase();
                if (nombre.indexOf(palabra) >= 0) {
                    villanoArr.push(villano);
                }
            }
            return villanoArr;
        }
    };
    VillanosService = __decorate([
        Injectable()
    ], VillanosService);
    return VillanosService;
})();
export { VillanosService };
//# sourceMappingURL=villanos.service.js.map
