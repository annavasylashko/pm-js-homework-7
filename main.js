var body = document.querySelector("body"); 
var btnCreate = document.querySelector("#create"); 
var list = document.querySelector("#list"); 
var space = document.querySelector("#free_space"); 

//-------Create element-----// 
 
space.addEventListener('click', function (event) { 
    var x = event.clientX; 
    var y = event.clientY; 
 
    btnCreate.style.display = (btnCreate.style.display == 'none') ? 'block' : 'none'; 
          
    btnCreate.style.position = "absolute"; 
    btnCreate.style.left = `${x}px`; 
    btnCreate.style.top = `${y}px`; 
}) 
 
let files = ['file1.txt', 'index.html', 'style.css']; 
 
function updateUI() { 
    list.innerHTML = ""; 
    files.forEach((fileName, index) => createElem(fileName, index)); 
} 
 
function createElem(fileName, index) { 
    btnCreate.style.display = 'none';   
    var elem = document.createElement("div"); 
    elem.className = "file"; 
    elem.textContent = fileName; 
 
    elem.addEventListener('click', function(event) { 
        handleFileClick(event, index) 
    }) 
         
    list.appendChild(elem); 
} 
 
function addFile() { 
    let fileName = prompt("Enter file name:") 
    if(fileName) files.push(fileName);
    updateUI() 
} 
 
btnCreate.addEventListener('click', addFile); 
 
//-------Rename element-----// 
 
var file = document.querySelector(".file"); 
var btnRename = document.querySelector("#rename"); 
var options = document.querySelector("#options"); 
 
function handleFileClick(event, index) {   
    var x = event.clientX; 
    var y = event.clientY; 
 
    options.style.display = (options.style.display == 'none') ? 'block' : 'none'; 
 
    options.style.position = "absolute"; 
    options.style.left = `${x}px`; 
    options.style.top = `${y}px`; 
 
    btnRename = document.querySelector("#rename") 
    btnDelete = document.querySelector("#delete") 
    btnRename.addEventListener('click', function(){renameElem(index)}); 
    btnDelete.addEventListener('click', function(){deleteElem(index)}); 
} 
 
function renameElem(index) { 
    btnRename.replaceWith(btnRename.cloneNode(true)) 
 
    options.style.display = 'none'; 
 
    let newName = prompt("Enter new file name"); 
 
    if (newName && newName.length > 0) { 
        files[index] = newName 
        updateUI() 
    }  
} 
 
//-------Delete element-----// 
 
var btnDelete = document.querySelector("#delete"); 
 
function deleteElem(index) { 
    btnDelete.replaceWith(btnDelete.cloneNode(true)) 
    options.style.display = 'none'; 
    console.log(files) 
    files.splice(index, 1) 
    console.log(files) 
    updateUI() 
}