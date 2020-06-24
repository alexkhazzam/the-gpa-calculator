import { HandleInputs } from "./Components/handlingInputs.js";
import { HandlingCalculation } from "./Components/handlingCalculation.js";
import { AddRow } from "./app/DOMHelper.js";
import { ResetPage } from "./App/ResetPage.js";
import { ShowCalc } from "./App/ShowingCalculation.js";

class App {
    fetchClasses() {
        const handleInputs = new HandleInputs();
        handleInputs.getSumOfInputsAndListItems();
        const handlingCalculation = new HandlingCalculation();
        handlingCalculation.findGPA();
        const showCalc = new ShowCalc();
        showCalc.getNumbers();
    }

    fetchDOMClass() {
        const addRow = new AddRow();
        addRow.appendListItem();
    }

    reset() {
        const resetPage = new ResetPage();
        resetPage.getListItemsContent();
    }
}

const app = new App();
const submitInfoBtn = document.querySelector(".calculate");
submitInfoBtn.addEventListener("click", () => {
    app.fetchClasses();
})

const addRow = document.querySelector(".add-row");
addRow.addEventListener("click", () => {
    app.fetchDOMClass();
})

const resetPage = document.querySelector(".reset");
resetPage.addEventListener("click", () => {
    app.reset();
})