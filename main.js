//for dropdown menu
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
//end dropdown menu

const submitButton = document.querySelectorAll("submitButton")
submitButton.addEventListener("click", updateDB)

function updateDB(event){
    event.preventDefault()
    const name        = usernameElement.value
    const message         = messageElement.value

    usernameElement.value = ""
    messageElement.value  = ""

    console.log(username + " : " + message)

    //Update database here
    const rowData = {
        NAME: username,
        MESSAGE: message
    }
    database.push(rowData)
}


const database = firebase.database().ref();
// add an object to the database, we do:
// database.push({name: "Julian", age: "Nun ur biz"});

// do something with each object in our dataset
database.on("child_added", doSomethingWithData);

 function doSomethingWithData(objectReference){
     const object = objectReference.val();
    // displayObjectSomewhere(object)
 }
