window.onload = () => {
    let Views = {
        home: {
            title: "Index page",
            url: " ./views/home.html",
            content: ''
        }, contact: {
            title: "contact page",
            url: " ./views/contact.html",
            content: ''
        }, portfolio: {
            title: "portfolio page",
            url: " ./views/portfolio.html",
            content: ''
        }, about_us: {
            title: "About us page",
            url: " ./views/about_us.html",
            content: ''
        }
    }

    const Links = document.querySelectorAll('.menu--item')
    const titleElement = document.querySelector('#title')
    const contentElement = document.getElementById('content')

    Links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const url = event.target.attributes['href'].value
            const viewData = Views[url.split('.')[0]]
            // console.log(viewData)

            fetch(url)
                .then(data => data.text())
                .then(data => console.log(contentElement.innerHTML = data))
                .catch(err => console.log(err))

            renderContent(viewData)
            history.pushState(viewData, viewData.title, url)
        })
    })

    function renderContent(state) {
        if (state) {
            document.title = state.title;
            titleElement.innerHTML = state.title;
            contentElement.innerHTML = state.content;
        }
    }


    window.addEventListener('popstate', function (event) {
        console.log(event)
        renderContent(event.state)
    })

    // renderContent(Views.home);

    history.replaceState(Views.home, Views.home.title, '')

}