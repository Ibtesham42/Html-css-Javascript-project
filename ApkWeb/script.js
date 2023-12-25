import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

import { getDatabase, ref, onValue, push, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://webapp01-92e32-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const ListDB = ref(database, "List")


const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoopingListEl = document.getElementById("shooping-list");

addButtonEl.addEventListener("click", function(){
    
     let inputvalue = inputFieldEl.value
    push(ListDB, inputvalue)
    ClearInputFieldEl()
    
    // console.log(`${inputvalue} added to database`);
    
   
    
})


// Geting Value From Db to below button 

onValue(ListDB, function(snapshot) {


    if(snapshot.exists()){

        let Listarray = Object.entries(snapshot.val())

    ClearShoopingListEl()

    for(let i = 0; i< Listarray.length; i++)
    {
        let currentValue = Listarray[i];
        let currentValueID = currentValue[0];
        let currentValueval = currentValue[1];

        addItemToShoopingList(currentValue)

        
    }

    }
    else{
        shoopingListEl.innerHTML ="No Item Here...to Display"
    }



    
    
})


function ClearShoopingListEl(){
    shoopingListEl.innerHTML = " "
}
function ClearInputFieldEl(){
    inputFieldEl.value = " "
}

function addItemToShoopingList(item){
    let valueId = item[0]
    let valueVal = item[1]
    let newEl = document.createElement("li");
    newEl.textContent = valueVal

    newEl.addEventListener("click", function(){
        let exactLocationOdItemInDB = ref(database,`List/${valueId}`)
        remove(exactLocationOdItemInDB)
    })






    shoopingListEl.append(newEl)

}