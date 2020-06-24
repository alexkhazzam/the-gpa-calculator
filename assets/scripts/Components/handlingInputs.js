export class HandleInputs { 
  constructor() {
    this.blob = 5;
  };
  getSumOfInputsAndListItems() {
    const amountOfLi = [];
    let reducedMax = [];
    let reducedEarned = [];
    let listItemDuplicate = [];
    let listItemSiblingDuplicate = [];

    const listItems = document.querySelectorAll("li");
    const listItemEarned = document.querySelectorAll("li .points-earned");
    listItemEarned.forEach((listItem) => {
      if (
        (listItem.value.trim() === "" &&
          listItem.nextSibling.value.trim() === "") ||
        (listItem.value.trim() !== "" &&
          listItem.nextSibling.value.trim() === "") ||
        (listItem.value.trim() === "" &&
          listItem.nextSibling.value.trim() !== "")
      ) {
        amountOfLi.push(listItem);
        listItem.nextSibling.value = "";
        listItem.value = "";
        listItemDuplicate.push(0);
        listItemSiblingDuplicate.push(0);
      } else {
        listItemDuplicate.push(parseInt(listItem.value.trim()));
        listItemSiblingDuplicate.push(parseInt(listItem.nextSibling.value.trim()));
      }
    });
    reducedEarned = listItemDuplicate.reduce(
      (initVal, curVal) => initVal + curVal,
      0
    );
    reducedMax = listItemSiblingDuplicate.reduce(
      (initVal, curVal) => initVal + curVal,
      0
    );
    let totalLi = listItems.length - amountOfLi.length;
    this.forwardUserInformation(reducedEarned, reducedMax, totalLi);
    return reducedEarned, reducedMax, totalLi;
  }

  forwardUserInformation(sumOfEarned, sumOfMax, totalListItems) {
    this.earned = sumOfEarned;
    this.max = sumOfMax;
    this.listItems = totalListItems;
  }
}
