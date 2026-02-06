document.addEventListener("DOMContentLoaded", () => {
  let runenv = "unknown"

  if (["http:", "https:"].includes(window.location.protocol)) {
    runenv = "web"
  } else if (window.location.protocol === "file:") {
    runenv = "local"
  }

  console.log(runenv)


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

  for (let i=0; i<totop.length; i++)
    totop[i].addEventListener("click", () => {
      window.location.href = getlink("#")
    })
})


