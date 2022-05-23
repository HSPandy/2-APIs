
document.querySelector('button').addEventListener('click', getDog)

function getDog(){
  const url = `https://animechan.vercel.app/api/random`

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.getElementById("anime").innerHTML = data.anime;
      document.getElementById("character").innerHTML = data.character;
      document.getElementById("quote").innerHTML = data.quote;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

