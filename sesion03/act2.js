 function whatToDo (job, name){
     switch (job){
        case 'developer':
             return name + " develops cool apps."
        case 'designer':
            return name + " design cool apps."
        case 'marketer':
            return name + " marketer cool apps."
     }
}
console.log(whatToDo('developer', 'Oscar'));