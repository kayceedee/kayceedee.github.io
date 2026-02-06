document.addEventListener("DOMContentLoaded", () => {
  // BASIC HOMEPAGE FUNCTIONS

  let runenv = "unknown"

  if (["http:", "https:"].includes(window.location.protocol)) {
    runenv = "web"
  } else if (window.location.protocol === "file:") {
    runenv = "local"
  }

  console.log(runenv)

  async function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }

  function getlink(link) {
    if (runenv == "web") {
      return "https://kayceedee.github.io/" + link
    } else if (runenv == "local") {
      return "file:///C:/Users/super/Documents/JamesCoding/helpful_things.html/" + link
    }
  }


  let torandomnum = document.getElementById("torandomnum")
  let tofractions = document.getElementById("tofractions")
  let toflashcards = document.getElementById("toflashcards")
  let totop = document.getElementsByClassName("totop")

  torandomnum.addEventListener("click", () => {
    window.location.href = getlink("#randomnum")
  })
  tofractions.addEventListener("click", () => {
    window.location.href = getlink("#fractions")
  })
  toflashcards.addEventListener("click", () => {
    window.location.href = getlink("#flashcards")
  })

  for (let i=0; i<totop.length; i++) {
    totop[i].addEventListener("click", () => {
      window.location.href = getlink("#")
    })
  }

  // RANDOM NUMBER GENERATOR FUNTIONALITY

  let randomnumdisplay = document.getElementById("randomnumdisplay")
  let randomnummin = document.getElementById("min")
  let randomnummax = document.getElementById("max")
  let genrandomnum = document.getElementById("genrandomnum")

  genrandomnum.addEventListener("click", () => {
    randomnumdisplay.innerHTML = (Math.floor(Math.random() * (randomnummax.value - randomnummin.value) + randomnummin.value))
  })

})
