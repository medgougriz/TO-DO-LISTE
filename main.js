let UserName = document.getElementById('username').value ;
let title = document.getElementById('title').value;
let discription = document.getElementById('discription').value;
let status = document.getElementById('status').value;



// 2 localStorage
var dataBase
if(localStorage.todo !=null){
    dataBase = JSON.parse(localStorage.todo)
}else{
    dataBase = [];
}

// 1 fonction
function CreateTask(){
    var task =  {
        fullName: document.getElementById('username').value,
        title: document.getElementById('title').value,
        desrirtion: document.getElementById('discription').value,
        status: document.getElementById('status').value,
        createdAt: new Date().toLocaleString()
    }
    dataBase[dataBase.length] = task
    // local storage
    localStorage.setItem('todo', JSON.stringify(dataBase))
    seetodo ()
    console.log(dataBase);

    cleardata()
}

// 3 clear inputs
function cleardata(){
    document.getElementById('username').value ='';
    document.getElementById('title').value ='';
    document.getElementById('discription').value ='';
    document.getElementById('status').value ='';
}

// 4 read or outputs

function seetodo (){

    let table = '';
    for(let i = 0; i < dataBase.length; i++){
        table += `<tr>
                    <td>${dataBase[i].fullName}</td>
                    <td>${dataBase[i].title}</td>
                    <td>${dataBase[i].discription}</td>
                    <td>${dataBase[i].status}</td>
                    <td>${dataBase[i].createdAt}</td>
                    <td><button onclick="updaTe(${i})"id="update">update</button></td>
                    <td><button onclick="deleteOne(${i})" id="delete" >delete</button></td>
                    </tr>
        `
    }

    document.getElementById('see').innerHTML = table
}

seetodo ()

// 5 delete one
function deleteOne(i){
    // it delete from arry not localStorage
    dataBase.splice(i,1); 
    localStorage.todo = JSON.stringify(dataBase);
    seetodo ()
}

// 6 update 
function updaTe(i){

    document.getElementById('username').value = dataBase[i].fullName
    document.getElementById('title').value = dataBase[i].title
    document.getElementById('discription').value = dataBase[i].discription
    document.getElementById('status').value = dataBase[i].status
    document.getElementById('Create').innerHTML= 'Update'
}