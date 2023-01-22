import "babel-polyfill"
async function handleSubmit(event) {
  event.preventDefault()

  // check the text into the form
  let formText = document.getElementById("name").value
  if (!formText) {
    alert("insert a url")
    return
  }
  Client.checkForName(formText)
  // test url from server
  let data = await fetchingAPI("http://localhost:8081/api", { url: formText })

  document.getElementById("agreement").innerText = "Agreement: " + data.agreement
  document.getElementById("polarity").innerText = "Polarity: " + checkPolarity(data.score_tag)
  document.getElementById("subjectivity").innerText = "Subjectivity: " + data.subjectivity
}

async function fetchingAPI(url = "", data = {}) {
  console.log("begin fetching ...")
  let response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  try {
    let data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
  console.log("end fetching ...")
}

function checkPolarity(polarityScore) {
  let result = ""
    // data from Api  https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/response
   //but P = positive, NEU = neutral , N= negative ,  N+ = strong negative
  switch (polarityScore) {
    case "P+":
      result = "strong positive"
      break
    case "P":
      result = "positive"
      break
    case "NEU":
      result = "neutral"
      break
    case "N":
      result = "negative"
      break
    case "N+":
      result = "strong negative"
      break
    case "NONE":
      result = "without polarity"
      break
  }
  return result.toUpperCase()
}

export { handleSubmit }
