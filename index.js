const { isThisTypeNode } = require("typescript")

const cart1 = {
    listPeople:[],
    mean: function(name1,firstName1,age1){
    this.listPeople.push({name:name1, fio:firstName1, age:age1})
        
    },
    print: function(){
       for(let i=0;i<this.listPeople.length;i++){
           console.log(this.listPeople[i])
       }
    },
}



let fio ={
    name: '',
    firstName: '',
    age: '',
}

let mass =[fio,fio,fio]
