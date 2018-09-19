$(document).ready(function () {
    $('#loadBtn').click(function () {
        // $('#myDiv').load('template.html #small')
        // $('#myDiv').load('template.html', function (response, status, xhr) {

        // let myreq = new XMLHttpRequest();
        // Fetch API 
        // console.log(xhr);
        // console.log(status);
        // console.log(response);
        // if (status === 'error') {
        //     alert(xhr.statusText)
        // }
        // })
        // let request;
        // if (window.XMLHttpRequest) {
        //     request = new XMLHttpRequest()
        // }
        // else if (window.ActiveXObject) {

        // }

        //         request.addEventListener('progress', progressFunc)
        //         request.addEventListener('load', completed)
        //         request.addEventListener('error', errorFunc)
        //         request.addEventListener('abort', cancelFunction)

        //         request.onreadystatechange = function () {
        //             if (request.readyState == XMLHttpRequest.DONE) {
        //                 console.log(request.responseText);
        //             } else {
        //                 console.log("Request -", request.readyState );
        //             }
        //         }

        //         function progressFunc() {
        //             console.log("Progress Function");
        //         }

        //         function errorFunc() {
        //             console.log("eroor Function");
        //         }

        //         function completed() {
        //             console.log("Completed Function");
        //         }

        //         function cancelFunction() {
        //             console.log("Cancel Function");
        //         }
        //         request.open("GET", 'template.html', true)
        //         request.send()
        let url = 'https://jsonplaceholder.typicode.com/users'
        // $.get(url,data, callback)

        // $.get(url, function (data) {
        //     console.log(data);
        //     $('#myDiv').append(data.map((el) => {
        //         return `<h1> ${el.name} </h1>`
        //     }).join(' ')
        //     );

        // })

        // $.get(url, function (data) {
        //     console.log(data);
        //     $('#myDiv').append(data.map((el) => {
        //         return `<h1> ${el.name} </h1>`
        //     })
        //     );

        // })

        // AJAX Call
        // AJAX Call = .load(), .get(), .getJSON(), .post(), .ajax()
        // JSON, XML, HTML

        $.ajax({
            url: url,
            data: null,
            method: 'get',
            dataType: 'json',
            success(data, status, xhr) {
                console.log(data);
                $('#myDiv').append(data.map((el) => {
                    return `<h1> ${el.name} </h1>`
                }).join(' ')
                );
            },
            error(xhr, status, error) {
                console.log(error);
            },
        })

        // $.getJSON(url, { id: 1 }, function (data) {
        //     console.log(data);
        // })

    });
});