export class ResetPage {
  getListItemsContent() {

    const listItems = document.querySelectorAll("li");
    const maxPoints = document.querySelectorAll(".max-points");
    const pointsEarned = document.querySelectorAll(".points-earned");
    const finalGrade = document.querySelector(".final-grade"); 
    const letterGrade = document.querySelector(".letter-grade"); 
    const calculations = document.querySelector(".calculations");
    const scaled = document.querySelector(".scale");

    listItems.forEach((li) => {
      if (li.classList.contains("added-on")) {
        li.parentNode.removeChild(li);
      }
    });


    maxPoints.forEach((item) => {
      item.value = "";
    })
    pointsEarned.forEach((item) => {
      item.value = "";
    })

    finalGrade.value = "";
    letterGrade.value = "";
    calculations.textContent = "";
    scaled.textContent = "";
  }
}
