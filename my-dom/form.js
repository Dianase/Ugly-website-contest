function handleForm(event){
  event.preventDefault()
  const name = document.getElementById('name').value
  const age = document.getElementById('age').value
  const gender = document.getElementById('gender').value
  console.log({name , age, gender})
  alert('welcome' + ' ' + name)
  fetch('https://myfakeapi.com/user', {
    method: 'POST',
    headers:{
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({name, age, gender}),
  })
  .then(req => req.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))
}