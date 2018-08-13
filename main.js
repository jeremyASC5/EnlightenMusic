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