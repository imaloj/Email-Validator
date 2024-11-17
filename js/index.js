
submitBtn.addEventListener("click", async (e) => {
  e.preventDefault()
  console.log("CLicked!")
  resultCont.innerHTML = `<img src="img/searching.svg">`
  let key = "ema_live_qEoQRhnyJGllNOU7ZtJoZ933qaK0ltoUwxSlTrpc"
  let email = document.getElementById("Email").value
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`//put you own url from api
  let res = await fetch(url)
  let result = await res.json()
  let str = ''

  for (key of Object.keys(result)) {
    if (result[key] !== "" && result[key] !==" ") { //condition to not display blank result
      str = str + `<div>${key}: ${result[key]}</div>`
    }

  }
  console.log(str)
  resultCont.innerHTML = str
})


