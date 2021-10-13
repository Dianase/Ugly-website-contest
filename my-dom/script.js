function getCoffees(temp){
  const api = "https://api.sampleapis.com/coffee/" + temp
  fetch(api)
  .then(res => res.json())
  .then(data => {
    const coffees = data.map(coffee => {
      const ingredients = coffee.ingredients.map(elem => '<li>' + elem + '</li>')
      return '<h2>' + coffee.title + '</h2><p>' + coffee.description + '</p><ol>' + 
      ingredients.join(' ')+ '</ol>'
    })
    const coffeeList = document.getElementById('coffees')
    coffeeList.innerHTML = coffees.join(' ')
  
  })
  .catch(e => console.error(e))
}
