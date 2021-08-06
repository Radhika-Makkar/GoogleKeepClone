const addNewNote=(text='')=>{
const note=document.createElement("div");
note.classList.add("note");

const htmlData=`
<div class="operation">
<button class="edit"><i class="fa fa-edit"></i></button>
<button class="delete"><i class="fa fa-trash"></i></button>
</div>

<div class="main text1 ${text ? "" : "hidden" } ">${text}</div>
<textarea class="${text ? "hidden" : "" }">${text}</textarea>`

note.insertAdjacentHTML("afterbegin",htmlData);

const main=note.querySelector(".main");
const textarea=note.querySelector("textarea");

const toggleText=()=>{
main.classList.toggle("hidden");
textarea.classList.toggle("hidden");

}
console.log(text)
const deleteNote=()=>{
   note.remove();
}

const updateLSData=()=>{
const textAreaData=document.querySelectorAll("textarea");
const notes=[];
console.log(textAreaData);
textAreaData.forEach((note)=>{
    return notes.push(note.value);
})
localStorage.setItem("notes",JSON.stringify(notes));
}

textarea.addEventListener("change",(event)=>{
const value=event.target.value;
main.innerHTML=value;

updateLSData();

});

note.querySelector(".edit").addEventListener("click",toggleText);
note.querySelector(".delete").addEventListener("click",deleteNote);


document.getElementById("main-container").appendChild(note);
}

const notes=JSON.parse(localStorage.getItem("notes"));
if(notes){
notes.forEach((note)=>{
 
addNewNote(note);
});
}
document.getElementById("add").addEventListener("click",()=>addNewNote());

