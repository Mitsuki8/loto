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


function refresh(){
	for (let t = 0; t <11; t++){
	document.getElementById("r"+t)
	}
	for (let w = 0; w <6; w++){
	document.getElementById("n"+w)
	}
	for (let y = 0; y <6; y++){
	document.getElementById("e"+y)
	}
	r1.setAttribute("class","")
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
	
	tirage()
}
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
function comparer() {
	nombre1 = n1.value
	nombre2 = n2.value
	nombre3 = n3.value
	nombre4 = n4.value
	nombre5 = n5.value
	nombre6 = n6.value

	for (i = 0; i <5; i++) {
		if (resultat[i] == nombre1) cpt++;
		if (resultat[i] == nombre2) cpt++;
		if (resultat[i] == nombre3) cpt++;
		if (resultat[i] == nombre4) cpt++;
		if (resultat[i] == nombre5) cpt++;
		
	}
	if (tirage6 == nombre6) {
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

function coloriage(){
	if (cpt==5 && cpt2==true){
		r1.setAttribute("class","is-selected")
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
	e1.value=resultat[0]
	e2.value=resultat[1]
	e3.value=resultat[2]
	e4.value=resultat[3]
	e5.value=resultat[4]
	e6.value=tirage6
	
}

function semaine(){
	if(resultat!=resultat2){
		resultat.length=0
		let t1=Math.floor(Math.random() * Math.floor(49) + 1)
		let t2=Math.floor(Math.random() * Math.floor(49) + 1)
		let t3=Math.floor(Math.random() * Math.floor(49) + 1)
		let t4=Math.floor(Math.random() * Math.floor(49) + 1)
		let t5=Math.floor(Math.random() * Math.floor(49) + 1)
		resultat=[t1,t2,t3,t4,t5]
		duree++
		semaine()
		}
		else{
			win.innerHTML=("Avec cette combinaison vous auriez gagné en "+duree+" semaines")
	}
}

btnValider.addEventListener("click",refresh)