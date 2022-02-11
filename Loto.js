//Ce code permet de simuler une grille de loto.
//Un joueur entre ses numéros dans le formulaire HTML et clique sur le bouton "Valider".
//Cela appelera une fonction qui générera une tirage aleatoire et le comparera au tirage du joueur.
//Nous avons inclu un cheat code, il s'active avec le code Konami et l'image devient cliquable.
//Les fonctions ci-dessous sont dans l'ordre dans lesquelles elles sont appelées hormis le cheat code.

//Amandine : tirage alétoire, formulaire HTML, fonction de vérification
//Franck : fonction de comparaison, affichage du rang, cheat code

//Déclaration des variables
let btnValider = document.getElementById("btnValider")
let result = document.getElementById("result")
let result2 = document.getElementById("result2")
let resultat = ""
let test = document.getElementById("test")
let test2 = document.getElementById("test2")
let win=document.getElementById("win")
let cpt = 0
let cpt2 = ""
let duree=""
let duree2=""
let triomphe=document.getElementById("triomphe")
let becassine=[]
let cousine=""
for (let t = 0; t <11; t++){  //Boucle permettant de déclarer r1 -> r11 (rang)
	document.getElementById("r"+t)
	}
for (let w = 0; w <6; w++){ //Boucle permettant de déclarer n1 -> n6 (nombres du joueur)
		document.getElementById("n"+w)
		}
for (let y = 0; y <6; y++){ //Boucle permettant de déclarer e1 -> e6 (affichage des nombres aléatoires)
		document.getElementById("e"+y)
		}

//Fonction permettant générer les 6 champs automatiquement, merci M. Roumanet !
function createFields(n) {
			let gamerNumbers=document.getElementById("gamerNumbers")
			let computerNumbers = document.getElementById("computerNumbers")
			for (let t=1; t<=n; t++) {
				console.log(t)
				gamerNumbers.innerHTML = gamerNumbers.innerHTML + '<input type="text" class="input is-rounded" id="n'+t+'" required value=""/>'
				computerNumbers.innerHTML = computerNumbers.innerHTML + '<input type="text" class="input is-rounded" id="e'+t+'" required value=""/>'
			}
			console.log(gamerNumbers.innerHTML)
		}
		
		createFields(6)


//Fonction permettant d'éviter de devoir Refresh la page après avoir joué et/ou activé le cheat code.
//Elle permet de remettre les compteurs à 0 et d'annuler les modifications d'affichages.
function refresh(){
	verif.innerHTML="" //Enlever l'avertissement si les valeurs sont incorrectes/incomplètes
	verif.setAttribute("class","") //Enlever la coloration de l'affichage de l'avertissement de valeur incorrectes/incomplètes
	win.innerHTML="" //Réinitialiser l'affichage du nombre d'années nécessaires pour gagner
	cousine=0 //Remettre à 0 le compteur pour éviter une addition
	let	year=0 //Remettre à 0 le compteur d'années pour éviter une addition
	duree=0 //Remettre à 0 le compteur pour éviter une addition
	duree2=0 //Remettre à 0 le compteur pour éviter une addition
	
	
	
	r1.setAttribute("class","") //Réinitialiser l'affichage du rang dans le tableau
	r2.setAttribute("class","")
	r3.setAttribute("class","")
	r4.setAttribute("class","")
	r5.setAttribute("class","")
	r6.setAttribute("class","")
	r7.setAttribute("class","")
	r8.setAttribute("class","")
	r9.setAttribute("class","")
	r10.setAttribute("class","")
	r11.setAttribute("class","")
	
	verification()
}

//Fonction permettant de vérifier les valeurs entrées par le joueur.
//Si le joueur entre une grille incomplète (<6 nombres) cela signalera une erreur.
//Si le joueur entre une valeur incorrecte (>49 ou >10) cela signalera une erreur.
//Si le joueur entre 2 nombres identiques ou plus cela signalera une erreur. (si le compteur >5 alors c'est qu'il y a au moins 2 valeurs identiques)
function verification(){
	let verif=document.getElementById("verif")
	nombre1 = n1.value
	nombre2 = n2.value
	nombre3 = n3.value
	nombre4 = n4.value
	nombre5 = n5.value
	nombre6 = n6.value
	becassine=[nombre1,nombre2,nombre3,nombre4,nombre5]
	for (i = 0; i <5; i++) { //boucle qui va comparer les nombres entrés par le joueur entre eux 
		if (becassine[i] == nombre1) cousine++; //et ajouter +1 au compteur si il y a une correspondance.
		if (becassine[i] == nombre2) cousine++;
		if (becassine[i] == nombre3) cousine++;
		if (becassine[i] == nombre4) cousine++;
		if (becassine[i] == nombre5) cousine++;
		}
	if(nombre1>49 || nombre1<1||nombre2>49 ||nombre2<1||nombre3>49||nombre3<1||nombre4>49||nombre4<1||nombre5>49||nombre5<1||nombre6>10||nombre6<1){ //Vérification des valeurs du joueur (>49 et <1)
verif.innerHTML="Veuillez vérifier vos valeurs"
verif.setAttribute("class","notification is-danger is-light")
	}
	else if(cousine>5){
verif.innerHTML="Veuillez vérifier vos valeurs"
verif.setAttribute("class","notification is-danger is-light")
	}
	else{
		tirage()
	}

}

//Fonction qui tire aléatoirement 6 nombres et les entre dans un tableau.
//A chaque fois qu'elle tire un nombre elle appelle une fonction qui a pour rôle
//de vérifier que ce nombre n'a pas déjà été tiré. Si il a déja été tiré alors
//on effectue un nouveau tirage.
function tirage() {
	cpt = 0
	cpt2 = 0
	resultat = []
	for (let i = 0; i < 5; i++) {

		let tirageAleatoire = Math.floor(Math.random() * Math.floor(49) + 1)

		// Tant que la nouvelle valeur aleatoire est deja dans le tableau des tirages on refait une nouvelle selection
		while (recherche(resultat, tirageAleatoire)) {
			tirageAleatoire = Math.floor(Math.random() * Math.floor(49) + 1)
		}

		resultat.push(tirageAleatoire)
	}


	tirage6 = Math.floor(Math.random() * Math.floor(10) + 1) // Contient nombre complémentaire.


	comparer(resultat)
}

// Fonction retournant 'True' si l'element se trouve déjà dans le tableau 'False' sinon
function recherche(tab, valeur) {
	let test = false

	// On parcourt le tableau et pour chaque valeur on verifie si cette valeur est egale a la variable "valeur" et si oui on retourne 'vrai' et on arrete la boucle
	for (let i = 0; i < tab.length; i++) {

		if (valeur == tab[i]) {
			test = true
			break
		}
	}
	return test
}

//Fonction qui compare le tableau du joueur avec le tableau généré aléatoirement.
//Pour chaque correspondance on ajoute 1 à un compteur.
//Pour le nombre numéro 6, cela retourne 'true' si il correspond.
function comparer() {


	for (i = 0; i <5; i++) {
		if (resultat[i] == nombre1) cpt++;//Ajouter +1 au compteur si il y a une correspondance
		if (resultat[i] == nombre2) cpt++;//Entre les numéros du joueurs et les numéros aléatoires
		if (resultat[i] == nombre3) cpt++;
		if (resultat[i] == nombre4) cpt++;
		if (resultat[i] == nombre5) cpt++;
		
	}
	if (tirage6 == nombre6) {//Renvoie 'true' si le nombre 6 du joueur correspond au nombre 6 du tirage aléatoire
		cpt2 = true
	}
	else {
		cpt2 = false
	}
	resultat2 = [nombre1, nombre2, nombre3, nombre4, nombre5]
	//result.innerHTML =(resultat + "," +tirage6)
	//result2.innerHTML = (resultat2)
	//test.innerHTML = (cpt)
	//test2.innerHTML=(cpt2)
	coloriage()
}

//Fonction qui montre le tirage aléatoire dans le second tableau du formulaire HTML.
//Elle montre également si le joueur a gagné ou non.
function coloriage(){
	if (cpt==5 && cpt2==true){ //Si le joueur obtient le rang maximum, jouera un effet sonore
		r1.setAttribute("class","is-selected")
		let audio2 = new Audio('ff.mp3')
		audio2.play()
	}
	else if (cpt==5 && cpt2==false){
		r2.setAttribute("class","is-selected")
	}
	else if (cpt==4 && cpt2==true){
		r3.setAttribute("class","is-selected")
	}
	else if (cpt==4 && cpt2==false){
		r4.setAttribute("class","is-selected")
	}
	else if (cpt==3 && cpt2==true){
		r5.setAttribute("class","is-selected")
	}
	else if (cpt==3 && cpt2==false){
		r6.setAttribute("class","is-selected")
	}
	else if (cpt==2 && cpt2==true){
		r7.setAttribute("class","is-selected")
	}
	else if (cpt==2 && cpt2==false){
		r8.setAttribute("class","is-selected")

	}
	else if (cpt==1 && cpt2==true){
		r9.setAttribute("class","is-selected")
	}
	else if (cpt==0 && cpt2==true){
		r10.setAttribute("class","is-selected")
	}
	else{
		r11.setAttribute("class","is-selected")
	}
	e1.value=resultat[0] //Affichage du tirage aléatoire dans le second tableau du formulaire HTML
	e2.value=resultat[1]
	e3.value=resultat[2]
	e4.value=resultat[3]
	e5.value=resultat[4]
	e6.value=tirage6
	semaine1()
	
}

//Fonction permettant de calculer au bout de combien d'années le joueur aurait gagné 
//avec sa combinaison à raison d'un tirage par semaine.
//Dû à une difficulé technique nous avons dû séparer cette fonction en 2 compteurs (maximum call stack exceeded).
//Le duree2 aura +1 à chaque fois que le duree atteindra 4000.
 function semaine1(){
	year=((duree2*4000)+duree)/52
	year=Math.round(year)
	let boucle=0
	 for (i = 0; i <5; i++) {
		if (resultat[i] == nombre1) boucle++;
		if (resultat[i] == nombre2) boucle++;
		if (resultat[i] == nombre3) boucle++;
		if (resultat[i] == nombre4) boucle++;
		if (resultat[i] == nombre5) boucle++;
	}
		if(boucle==5){
		win.innerHTML="Avec cette combinaison vous auriez gagné en "+year+" années"
	 }
		 
	else if(boucle!=5&&duree<4000){
		duree++
		semaine2()
	}
	else{
		duree=0
		duree2++
		setTimeout(semaine2)//Permet de 'vider' le call stack du navigateur et d'éviter une erreur
		}
	
 } 

//Fonction qui relance un tirage aléatoire et appelle la fonction ci-dessus.
function semaine2(){
		resultat.shift()//Permet de vider le tableau
		let x1=Math.floor(Math.random() * Math.floor(49) + 1)
		let x2=Math.floor(Math.random() * Math.floor(49) + 1)
		let x3=Math.floor(Math.random() * Math.floor(49) + 1)
		let x4=Math.floor(Math.random() * Math.floor(49) + 1)
		let x5=Math.floor(Math.random() * Math.floor(49) + 1)
		resultat=[x1,x2,x3,x4,x5]
		semaine1()
}



//Déclaration des variables pour le cheat code et ajout de son déclencheur.
let cursor = 0;
const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39]; //Haut Haut Bas Bas Gauche Droite Gauche Droite
document.addEventListener('keydown', (e) => { //Ajout du déclencheur
  cursor = (e.keyCode == KONAMI_CODE[cursor]) ? cursor + 1 : 0;
  if (cursor == KONAMI_CODE.length) cheatcode();
});

//Fonction qui rend l'image cliquable et joue un effet sonore pour indiqué que le cheat code est activé.
function cheatcode(){
	let audio = new Audio('son.wav')//Déclare le son en variable (son présent en local)
	audio.play()//Joue un effet sonore pour indiquer l'activation du cheat code
	axoloto.setAttribute("onclick","jackpot()")//Active une fonction si on clique sur l'image
	axoloto.setAttribute("onmouseover","")//Change le curseur quand on passe sur l'image
	axoloto.setAttribute("style","cursor: pointer;")
	
}

//Fonction qui permet de faire gagner instanténement.
function jackpot(){
r1.setAttribute("class","")//Réinitialiser le tableau des rangs
r2.setAttribute("class","")
r3.setAttribute("class","")
r4.setAttribute("class","")
r5.setAttribute("class","")
r6.setAttribute("class","")
r7.setAttribute("class","")
r8.setAttribute("class","")
r9.setAttribute("class","")
r10.setAttribute("class","")
r11.setAttribute("class","")
e1.value=nombre1//Met les numéros rentrés par le joueur dans le second tableau
e2.value=nombre2
e3.value=nombre3
e4.value=nombre4
e5.value=nombre5
e6.value=nombre6
position.innerHTML=""
r1.setAttribute("class","is-selected")//Active le rang 1 dans le tableau
triomphe.innerHTML="<em>À vaincre sans péril, on triomphe sans gloire.</em>"
let audio2 = new Audio('ff.mp3')//Déclare le son en variable (son présent en local)
audio2.play()////Joue un effet sonore pour indiquer le jackpot
cursor=0//Permet de réinitialiser le compteur pour pouvoir réactiver le cheat code
axoloto.removeAttribute("onclick","jackpot()")//Enlever le déclenchement d'une fonction si clic sur l'image
axoloto.removeAttribute("onmouseover","")//Enlever le changement de curseur si on passe sur l'image
axoloto.removeAttribute("style","cursor: pointer;")
win.innerHTML=""
}


btnValider.addEventListener("click",refresh)