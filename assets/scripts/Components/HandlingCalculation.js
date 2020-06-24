import { HandleInputs } from "./handlingInputs.js";

export class HandlingCalculation extends HandleInputs {
  constructor() {
    super();
    this.getSumOfInputsAndListItems();
  }
  findGPA() {
    if (isNaN(this.earned / this.max)) {
      alert("Please enter valid inputs...");
      return;
    } else if (this.earned / this.max < 0) {
      alert("Negative numbers are not allowed...");
      return;
    }
    const finalGrade = document.querySelector(".final-grade");
    const letterGrade = document.querySelector(".letter-grade");
    const scaledValue = document.querySelector(".scale");

    let grade = ((this.earned / this.max) * 100).toFixed(2);
    finalGrade.value = grade + "%";

    let letter;
    let scaledGrade;
    if (grade >= 97) {
      scaledGrade = "4.0";
      letter = "A+";
    } else if (grade >= 93) {
      scaledGrade = "4.0";
      letter = "A";
    } else if (grade >= 90) {
      scaledGrade = "3.7";
      letter = "A-";
    } else if (grade >= 87) {
      scaledGrade = "3.3";
      letter = "B+";
    } else if (grade >= 84) {
      scaledGrade = "3.0";
      letter = "B";
    } else if (grade >= 80) {
      scaledGrade = "2.7";
      letter = "B-";
    } else if (grade >= 77) {
      scaledGrade = "2.3";
      letter = "C+";
    } else if (grade >= 73) {
      scaledGrade = "2.0";
      letter = "C";
    } else if (grade >= 70) {
      scaledGrade = "1.7";
      letter = "C-";
    } else if (grade >= 67) {
      scaledGrade = "1.3";
      letter = "D+";
    } else if (grade >= 65) {
      scaledGrade = "1.0";
      letter = "D";
    } else {
      scaledGrade = "0.0";
      letter = "F";
    }

    this.grade = grade;
    this.scaledGrade = scaledGrade;
    letterGrade.value = `${letter}`;
    scaledValue.textContent = scaledGrade;
  }
}
