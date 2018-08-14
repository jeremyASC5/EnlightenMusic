const sublists = document.querySelectorAll(".hasSublist")
for(const sublist of sublists){
    const title = sublist.children[0]
    title.href = "#"
    const list = sublist.children[1]
    list.style.display = "none"
    function toggleDisplay(){
        if(list.style.display == "none"){
            list.style.display = "initial"
        } else {
            list.style.display = "none"
        }
    }
    title.addEventListener("click", toggleDisplay)
}




const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
const allMessages = document.getElementById("allMessages");

button.addEventListener("click",updateDB);

const database = firebase.database().ref();

//Set database object here


/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
    const rowData = {
        NAME: username,
        MESSAGE: message
    }
    database.push(rowData);

}

// Set database "child_added" event listener here
database.on("child_added", addMessageToBoard);

 function addMessageToBoard(rowDataRef){
     const row = rowDataRef.val();
     const name = row.NAME;
     const message = row.MESSAGE;

     const paragraph = document.createElement("p");
     paragraph.innerText = name + " : " + message;
     allMessages.appendChild(paragraph);

 }
