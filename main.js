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
    const question    = questionElement.value
    const link       = fileElement.value

    usernameElement.value = ""
    questionElement.value  = ""
    fileElement.value = ""

    //Update database here
    const rowData = {
        name: name,
        question: question,
        forum: forumName,
        link: link,
    }
    database.push(rowData)
}

const allMessagesContainer = document.querySelector("#allMessages_container")
allMessagesContainer.style.width = "80%"
allMessagesContainer.style.marginLeft = "10%"
allMessagesContainer.style.marginRight = "10%"
allMessagesContainer.style.marginTop = "5%"
allMessagesContainer.style.marginBottom = "20%"
allMessagesContainer.style.display = "flex"
allMessagesContainer.style.flexDirection = "column-reverse"
allMessagesContainer.style.backgroundColor = "rgba(128, 0, 128, 0.7)"
allMessagesContainer.style.border = "none"
allMessagesContainer.style.padding = "2%"
allMessagesContainer.style.borderRadius = "8px"
// do something with each object in our dataset
database.on("child_added", doSomethingWithData);

 function doSomethingWithData(objectReference){
    const object = objectReference.val();
    if(object.forum !== forumName){return;}
    const entryDiv = document.createElement("div")
    entryDiv.className = "entryDiv"
    allMessagesContainer.appendChild(entryDiv)
    const br = document.createElement("br")

    
    const nameContainer = document.createElement("p")
    nameContainer.className = "nameContainer"
    nameContainer.innerHTML = `Name: ${object.name}`
    nameContainer.style.display = "block"
    nameContainer.style.color = "whitesmoke"
    nameContainer.style.borderBottom = "3px solid whitesmoke"
    nameContainer.style.wordWrap = "break-word"
    nameContainer.style.fontFamily = "'Cormorant Garamond', serif"
    entryDiv.appendChild(nameContainer)

    //entryDiv.appendChild(br)

    const questionContainer = document.createElement("p")
    questionContainer.className = "questionContainer"
    questionContainer.innerHTML = `Message: ${object.question}`
    questionContainer.style.display = "block"
    questionContainer.style.color = "whitesmoke"
    questionContainer.style.wordWrap = "break-word"
    questionContainer.style.fontFamily = "'Cormorant Garamond', serif"
    entryDiv.appendChild(questionContainer)

    //entryDiv.appendChild(br)
    if(object.hasOwnProperty("link") && object.link !== ""){
        const a = document.createElement("a")
        a.setAttribute("href", `${object.link}`)
        a.setAttribute("target", "_blank")
        a.innerHTML = `${object.link}`
        a.style.fontFamily = "'Cormorant Garamond', serif"
        a.style.color = "whitesmoke"
        entryDiv.appendChild(a)
    }
 }