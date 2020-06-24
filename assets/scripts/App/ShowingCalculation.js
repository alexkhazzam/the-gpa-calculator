export class ShowCalc {
  getNumbers() {
    const pointsEarned = document.querySelectorAll(".points-earned");
    const pointsMax = document.querySelectorAll(".max-points");
    const calculations = document.querySelector(".calculations");
    const finalGrade = document.querySelector(".final-grade");

    let count = 0;
    let text = "";
    pointsEarned.forEach((point) => {
      if (point.value === "") {
        return;
      } else {
        count++;
        text += `${""} (${point.value}) + ${" "}`;
      }
    });
    let earned = text.slice(0, text.lastIndexOf("+")) + "/";

    let secondCount = 0;
    let maxText = "";
    pointsMax.forEach((point) => {
      if (point.value === "") {
        return;
      } else {
        maxText += `${" "} (${point.value}) +`;
        secondCount++;
      }
    });
    if (count === 0 && secondCount === 0) {
      return;
    } else {
      let maxed = maxText.slice(0, maxText.lastIndexOf("+")) + "";
      calculations.textContent = `${earned} ${maxed} = ${finalGrade.value}`;
    }
  }
}
