export class AddRow {
  appendListItem() {
    const listItems = document.querySelectorAll("li");
    const ul = document.querySelector("ul");
    let listItem = document.createElement("li");
    const inputEarned = document.createElement("input");
    const inputMax = document.createElement("input");

    inputEarned.min = "0";
    inputEarned.type = "number";
    inputEarned.className = "points-earned";

    inputMax.min = "0";
    inputMax.type = "number";
    inputMax.className = "max-points";
    listItem.className = "added-on";

    let length = listItems.length + 1;
    listItem.append(length, inputEarned, inputMax);
    ul.append(listItem);
    listItem.scrollIntoView({ behavior: "smooth" });
  }
}
