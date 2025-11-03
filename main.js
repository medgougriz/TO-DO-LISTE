
var dataBase = []

function CreateTask(){
    var task =  {
        fullName: document.getElementById('username').value,
        title: document.getElementById('title').value,
        desrirtion: document.getElementById('discription').value,
        status: document.getElementById('status').value,
        createdAt: Date.now()
    }

    dataBase[dataBase.length] = task
    console.log(dataBase);
}
