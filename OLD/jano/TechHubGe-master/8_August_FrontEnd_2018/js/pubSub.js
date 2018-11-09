let PubSub = (function(){
    let events = {};
    return {
        subscribe(event, callback){
            if( !events[event] ) {
                events[event] = {
                    callbacksArray: []
                }
            }
            let index = events[event].callbacksArray.push(callback) - 1;
            return (function(){
                // console.log(events);
                return {
                    remove(){
                        delete events[event].callbacksArray[index];
                    }
                }
            })(event, index);
        },
        publish(event, detail){
            if( !events[event] || !events[event].callbacksArray.length) return;
            
            let callbacks = events[event].callbacksArray;
            for( let i = 0, ln = callbacks.length; i < ln; i++ ){
                if ( typeof callbacks[i] === 'function') {
                    callbacks[i](detail || {})
                }
            }
        }
    }
})()

let sub_1 = PubSub.subscribe('/onAdd', (data) => {
    console.log('sub_1', data);
})

let sub_2 = PubSub.subscribe('/onAdd', (data) => {
    console.log('sub_2', data);
})

PubSub.subscribe('/onRemove', (data) => {
    console.log('onRemove', data);
})

PubSub.publish('/onAdd', { name: "PubSub Pattern Example"});
PubSub.publish('/onRemove', { name: "PubSub Pattern Example"});

// console.log(PubSub.toString());
// console.log(sub_1);
// console.log(sub_2);

/*
    events{
        '/onAdd': {
            callbacksArray: [
                (data) => {
                    console.log('sub_2', data);
                },
                (data) => {
                    console.log('sub_1', data);
                }
            ]
        }
    }
*/