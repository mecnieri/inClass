let Task = function(name){
    this.name = name,
    this.completed = false
}

Task.prototype.complete = function(){
    console.log(`Completing task: ${this.name}`);
}

Task.prototype.save = function(){
    console.log(`Saving task: ${this.name}`);
}

let myTask = new Task('I have to learn JS');

myTask.complete();
myTask.save();

let decorateMyTask = new Task("Decorated Task");
decorateMyTask.priority = 2;
decorateMyTask.notify = function(){
    console.log("Notifying important people!....");
}
decorateMyTask.complete();
decorateMyTask.save = function(){
    this.notify();
    Task.prototype.save.call(this);
}

decorateMyTask.save();