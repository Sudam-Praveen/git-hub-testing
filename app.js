

const item = document.getElementById("iteminput");
const itemList = document.getElementById("itemList");


function addItem(){
    
    const  newItemText = item.value;
    if(newItemText !== ''){
        const newItem = createList(newItemText);
        itemList.appendChild(newItem);
    }
   
}

function createList(text){
    const listItem = document.createElement("li");
    listItem.textContent=text;
    return listItem;

}