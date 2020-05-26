import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let VillanosService = /** @class */ (() => {
    let VillanosService = class VillanosService {
        constructor() {
            // private villano:any[]= 
            this.villano = [
                {
                    nombre: "Thanos",
                    bio: "Thanos es un Titán que nació en el planeta con el mismo nombre. Originalmente fue creado por Jim Starlin y Mike Friedrich como uno de los enemigos de Iron-Man en 1973.",
                    img: "assets/villanos/thanos.png",
                    aparicion: "1973-02-01",
                    casa: "Marvel"
                },
                {
                    nombre: "Ultron",
                    bio: "es un ficticio supervillano que aparece en los cómics americanos publicados por Marvel . Es más reconocido como un enemigo del grupo de superhéroes de los Vengadores y su relación cuasifamiliar con su creador Hank Pym .",
                    img: "assets/villanos/Ultron.jpg",
                    aparicion: "1968-06-01",
                    casa: "Marvel"
                },
                {
                    nombre: "Magneto",
                    bio: "Mutante capaz de controlar los campos magnéticos, pudiendo manipular el metal con su mente. Suele entrar en conflicto con los héroes de Marvel debido su ideología supremacista, que propugna suplantar a la especie humana en favor de la población mutante.",
                    img: "assets/villanos/magneto.jpg",
                    aparicion: "1963-08-01",
                    casa: "Marvel"
                },
                {
                    nombre: "Apocalipsis",
                    bio: "Gran enemigo de los X-men, yendo un paso más allá de los postulados del Amo del Magnetismo. En Sabah Nur (nombre real de este maloso) es el primer mutante de la historia, nacido allá por el Antiguo Egipto, Fue criado por una tribu nómada que le inculcó el principio de la supervivencia del más fuerte, por el cual basaría toda su existencia.",
                    img: "assets/villanos/apocalipsis.jpg",
                    aparicion: "1986-06-01",
                    casa: "Marvel"
                },
                {
                    nombre: "Joker",
                    bio: "The Joker es un supervillano creado por Bill Finger , Bob Kane y Jerry Robinson, que apareció por primera vez en el primer número del cómic Batman (25 de abril de 1940), publicado por DC Comics . El crédito por la creación del Joker se disputa; Kane y Robinson se atribuyeron la responsabilidad del diseño del Joker al tiempo que reconocieron la contribución escrita de Finger.",
                    img: "assets/villanos/joker.jpg",
                    aparicion: "1940-04-01",
                    casa: "DC"
                },
                {
                    nombre: "Lex Luthor",
                    bio: "Originalmente presentado como un científico loco cuyos esquemas Superman frustraría rutinariamente, la representación de Lex ha evolucionado a lo largo de los años y su caracterización se ha profundizado. En las historias contemporáneas, Lex es retratado como un magnate de los negocios estadounidense rico, loco por el poder , ingenioso ingeniero, filántropo de la ciudad de Metrópolis y una de las personas más inteligentes del mundo.",
                    img: "assets/villanos/lex.png",
                    aparicion: "1940-04-01",
                    casa: "DC"
                },
                {
                    nombre: "Darkseid",
                    bio: "Como el gobernante tiránico y antiguo príncipe del planeta Apokolips , Darkseid es un Dios del Mal superior interdimensional extremadamente poderoso y peligroso. El objetivo final de Darkseid es conquistar el universo y eliminar todo el libre albedrío y los seres sintientes.",
                    img: "assets/villanos/darkseid.jpg",
                    aparicion: "1970-11-01",
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