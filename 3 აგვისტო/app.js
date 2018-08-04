//
//  let mainModule = (
//     function () {
//         let people = ['Person 1', 'Person 2'];
//         // DOM caching 
//         let $element = $('#peopleModule');
//         let $button = $element.find('button');
//         let $input = $element.find('input');
//         let $ul = $element.find('ul');
//         function template(items) {
//             return items.map(item => {
//                 return `
//                             <li>

//                                 <span>${item}</span>

//                                 <i class="del">    X</i>

//                             </li>
//                         `}).join('')
//         }

//         // event bindings
//         $button.on('click', addPerson);




//         // selector, eventName, callback   დეფოლტად კლიკი
//         $ul.delegate('i.del', 'click', removePerson);
//         _updateDOM()
//         // DRY. SRP 
        
//         function _updateDOM() {
//             $ul.html(template(people));
//         }
        
//         function addPerson(newVal) {
//             let name = (typeof newVal === 'string') ? newVal : $input.val()
//             people.push(name);
//             console.log(newVal);
//             let storage = window.localStorage;
//             let firstName = $input.val();
//             let old = storage.getItem("user")
//             storage.setItem('user', people)
//             _updateDOM();
//             $input.val('')
//         }
        
//         function removePerson(event) {
//             console.log(event);
//             let index;
//             if (event !== 0) {
//                 if (typeof event === 'number') {
//                     event = event - 1;
//                     index = event;
                    
                    
//                 }
//                 else {
//                     let $remove = $(event.target).closest('li')
//                     index = $ul.find('li').index($remove)
//                     _updateDOM();
//                 }
                
//                 let storage = window.localStorage;
//                 let firstName = $input.val();
//                 let old = storage.getItem("user")
//                 storage.setItem('user', people)
//                 people.splice(index, 1);
//                 storage.removeItem(people)
//                 _updateDOM();
//             }
//             _updateDOM()
//         }
        
//         return {
//             addPerson,
//             removePerson,
//         }
//     }
// )() //IIFE 


// let mainModule = ( function(){
//     const STORAGE_KEY = 'MyModule-Persons';


//     let people = ['Please add yours...'];
//     // DOM caching
//     let $element = $('#peopleModule');
//     let $button  = $element.find('button');
//     let $input   = $element.find('input');
//     let $ul      = $element.find('ul');
//     let ModuleStorage;
   

//     // event bindings
//     $button.on('click', addPerson);
//     // selector, eventName, callback
//     $ul.delegate('i.del', 'click',removePerson);


//     _createStorage();
//     _getStorage();
//     _updateDOM();

//     // DRY, SRP
//     function template(items){
//         return items.map( item => {
//             return `<li><span>${item}</span><i class="del">X</i></li>`
//         }).join('');
//     }

//     function _updateDOM(){
//         $ul.html( template(people) );
//     }

//     function _updateStorage(){   
//         ModuleStorage.setItem(STORAGE_KEY, JSON.stringify(people));  
//     }

//     function _createStorage(){
//         if( (ModuleStorage = window.sessionStorage) && !ModuleStorage.getItem(STORAGE_KEY) ){
//             ModuleStorage.setItem(STORAGE_KEY, JSON.stringify(people));
//         }
//     }

//     function _getStorage(){
//         people = JSON.parse(ModuleStorage.getItem(STORAGE_KEY));
//     }

//     function addPerson(newVal){
//         let name = (typeof newVal === 'string') ? newVal : $input.val();
//         people.push(name);
//         _updateStorage();
//         _updateDOM();
//         $input.val('');
//     }

//     function removePerson(event){
//         let index;
//         if( typeof event === 'number'){
//             index = event;
//         }
//         else {
//             let $remove = $(event.target).closest('li');
//             index = $ul.find('li').index($remove);
//         }
//         people.splice(index, 1);
//         _updateStorage(true);
//         _updateDOM();
//     }

//     // 
//     return {
//         addPerson,
//         removePerson,
//     }
// })() //IIFE

// console.log(mainModule);


// let newProp = 'newPropValue';
// let obj = {
//     'hello world'(){
//         console.log("Wow...");
//     },
//     [newProp]: "Key Example"
// }
