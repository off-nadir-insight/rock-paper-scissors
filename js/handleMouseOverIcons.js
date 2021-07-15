function iconHover(event, content) {
  event.target.textContent = content
}

const btnRockIcon = document.getElementById("btn--rock")
const btnPaperIcon = document.getElementById("btn--paper")
const btnScissorsIcon = document.getElementById("btn--scissors")

btnRockIcon.addEventListener('mouseenter', e => iconHover(e, "🪨"))
btnRockIcon.addEventListener('mouseout', e => iconHover(e, "Rock"))
btnPaperIcon.addEventListener('mouseenter', e => iconHover(e, "🧾"))
btnPaperIcon.addEventListener('mouseout', e => iconHover(e, "Paper"))
btnScissorsIcon.addEventListener('mouseenter', e => iconHover(e, "✂️"))
btnScissorsIcon.addEventListener('mouseout', e => iconHover(e, "Scissors"))