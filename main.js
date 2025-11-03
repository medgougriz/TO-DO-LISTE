
var dataBase = []

function CreateTask(){
    var task =  {
        fullName: document.getElementById('username').value,
        title: 'sdfs',
        decrirtion: 'sdfsdfsdfwf ewr',
        status: 'to do',
        createdAt: Date.now()
    }

    dataBase[length] = task
    console.log(dataBase);
}
