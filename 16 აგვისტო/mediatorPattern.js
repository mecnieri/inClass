let Task = require('./script');
// import ES6
// CommonJS
let notificationService = function () {
    let message = 'Notifying';
    this.update = function (task) {
        console.log(`${message} ${task.user} for task ${task.name}`);
    }
}


let loggingService = function () {
    let message = 'Logging';
    this.update = function (task) {
        console.log(`${message} ${task.user} for task ${task.name}`);
    }
}


let auditingService = function () {
    let message = 'Auditing';
    this.update = function (task) {
        console.log(`${message} ${task.user} for task ${task.name}`);
    }
}

let mediator = (function () {
    let channels = {}
    let subcribe = function (channel, context, func) {
        if (!mediator.channels[channel]) {
            mediator.channels[channel] = []
        }
        mediator.channels[channel].push({
            context,
            func,
        });
    }

    let publish = function (channel, ...args) {
        if (!this.channels[channel]) {
            return false
        }
        // let args = Array.prototype.slice.call(arguments, 1)


        for (let i = 0; i < mediator.channels[channel].length; i++) {
            let sub = mediator.channels[channel][i];
            sub.func.apply(sub.context, args)
        }
    }
    return {
        channels: {},
        subcribe,
        publish
    }


})();

let task1 = new Task({
    name: 'mediator pattern demo',
    user: 'john '
});

let not = new notificationService();
let ls = new loggingService();
let Audit = new auditingService()

mediator.subcribe('complete', not, not.update)
mediator.subcribe('complete', ls, ls.update)
mediator.subcribe('complete', audit, audit.update)

task1.complete = function () {
    mediator.publish('complete', this)
    Task.prototype.complete.call(this)
}

task1.complete()