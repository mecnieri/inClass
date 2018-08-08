let PubSub = (function () {
    let events = {};
    return {
        subscribe(event, callback) {
            if (!events[event]) {
                events[event] = {
                    queue: []

                }
            }
            let index = events[event].queue.push(callback) - 1;
            return (function () {
                return {
                    remove() {
                        delete events[event].queue[index]
                    }
                }
            })(event, index);
        },
        publish(event, detail) {
            if (!events[event] || !events[event].queue.length) return;
            let callbacks = events[event].queue;
            for (let i = 0, ln = callbacks.length; i < ln; i++) {
                if (typeof callbacks[i] === 'function') {
                    callbacks[i](detail || {})
                }
            }
        }
    }
})()