// creating main container
let main = document.createElement("main");
main.className = "container";
document.body.append(main);

// creating header
let header = document.createElement("h1");
header.innerHTML = "Let's do it";
main.append(header);

// creating main block

let mainBlock = document.createElement("div");
mainBlock.className = "mainBlock";
main.append(mainBlock);

// creating div for input date and button
let firstDiv = document.createElement("div");
mainBlock.append(firstDiv);

// creating input for todo
let textIn = document.createElement("input");
textIn.className = "textIn";
textIn.setAttribute("placeholder", "Gonna do...");
firstDiv.append(textIn);

// creating todo input with type date
let inputDate = document.createElement("input");
inputDate.type = "date";
// inputDate.setAttribute('type', 'date')
firstDiv.append(inputDate);

// creating addButton for todos

let addBtn = document.createElement("button");
addBtn.innerHTML = "Add Todos";
addBtn.id = "addBtn";
firstDiv.append(addBtn);

// create list for the future todos
let list = document.createElement("ul");
list.className = "list";
mainBlock.append(list);
