let villes = ['nantes','paris','saint-nazaire','angers','le mans'];

//forEach()
villes.forEach(element => console.log(element));

//every()
const contentA = (currentValue) => currentValue.search('a') > -1;
console.log("lettreADansToutesLesVilles = " + villes.every(contentA));

//some()
const chercheTiret = (element) => element.search('-') > -1;
console.log("auMoinsUneVilleAvecUnTiret = " + villes.some(chercheTiret));

//filter()
let villesSansTiretSansEspace = villes.filter(ville => ville.search('-') === -1 && ville.search(' ') === -1);
console.log(villesSansTiretSansEspace);

//Chainer les fonctions

const villeSeTerminantParS = villes.filter(ville => ville[ville.length-1] === 's');
const villesMajusculeSeTerminantParS = villeSeTerminantParS.map(ville => ville.toUpperCase());
console.log(villesMajusculeSeTerminantParS);
