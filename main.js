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

const forumName = decodeURI(window.location.href.split("/").slice(-1)[0].split(".")[0]);
document.getElementById("mainHeader").innerText = forumName;

const database = firebase.database().ref();

const submitButton = document.querySelector(".submitButton")
submitButton.addEventListener("click", updateDB)

const usernameElement = document.querySelector('#usernameElement');
const questionElement = document.querySelector('#questionElement');
const fileElement = document.querySelector("#fileElement");

function updateDB(event){
    event.preventDefault()
    const name        = usernameElement.value
    const question     = questionElement.value
    const files = []; // fileElement.whatever

    usernameElement.value = ""
    questionElement.value  = ""

    //Update database here
    const rowData = {
        name: name,
        question: question,
        forum: forumName,
        files: files,
    }
    database.push(rowData)
}

const allMessagesContainer = document.querySelector(".allMessages_container")
// do something with each object in our dataset
database.on("child_added", doSomethingWithData);

 function doSomethingWithData(objectReference){
    const object = objectReference.val();
    if(object.forum != forumName){return;}
    const entryDiv = document.createElement("div").className("entryDiv")
    const nameContainer = document.createElement("p").className("nameContainer")
    
 }
