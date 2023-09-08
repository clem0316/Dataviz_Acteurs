// let view = document.getElementById('container');
// let image = document.getElementById('image');
// let name = document.getElementById('name');
// Scraping => thème  
// title, year,  

function getValue1() {
  // On sélectionne l'élément input et on récupère sa valeur
  let input = document.getElementById("in1").value
  let recherche = "https://imdb-api.com/en/API/SearchName/k_5lsv0goy/" + input

  // On affiche la valeur
  alert(recherche)
  return recherche
}
const userRequest1 = getValue1()
fetch(userRequest1)
  .then(response => {
    return response.json()
  })
  .then(datas => {
    console.log(datas)
  })

function getValue2() {
  // On sélectionne l'élément input et on récupère sa valeur
  let input = document.getElementById("in2").value
  let recherche = "https://imdb-api.com/en/API/SearchName/k_5lsv0goy/" + input

  // On affiche la valeur
  alert(recherche)
  return recherche
}
const userRequest2 = getValue2()
fetch(userRequest2)
  .then(response => {
    return response.json()
  })
  .then(datas => {
    console.log(datas)
  })
