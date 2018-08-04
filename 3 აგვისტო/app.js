let mainModule = (
    function () {
        let people = ['Person 1', 'Person 2'];
        // DOM caching 
        let $element = $('#peopleModule');
        let $button = $element.find('button');
        let $input = $element.find('input');
        let $ul = $element.find('ul');
        function template(items) {
            return items.map(item => {
                return `
                            <li>

                                <span>${item}</span>

                                <i class="del">    X</i>

                            </li>
                        `}).join('')
        }

        // event bindings
        $button.on('click', addPerson);
        // selector, eventName, callback   დეფოლტად კლიკი
        $ul.delegate('i.del', 'click', removePerson);
        _updateDOM()
        // DRY. SRP 

        function _updateDOM() {
            $ul.html(template(people));
        }

        function addPerson(newVal) {
            let name = (typeof newVal === 'string') ? newVal : $input.val()
            people.push(name);
            _updateDOM();
            $input.val('')
            console.log(newVal);
        }

        function removePerson(event) {
            console.log(event);
            let index;
            if (event !== 0) {
                if (typeof event === 'number') {
                    event = event - 1;
                    index = event;


                }
                else {
                    let $remove = $(event.target).closest('li')
                    index = $ul.find('li').index($remove)
                }
                people.splice(index, 1);
                _updateDOM();
            }
        }

        return {
            addPerson,
            removePerson,
        }
    }
)() //IIFE 