function init () {
        // TODO: create a handler
        window.addEventListener('load', function () {
            let form = document.querySelector("form");
            form.addEventListener("submit", function(event) {
            let setSearchEngine = document.querySelector("input[name=engine]:checked");
            console.log(setSearchEngine.value);
            let engine = setSearchEngine.value;
            let actions = {
                    google: 'https://www.google.com/',
                    duckduckgo: 'https://duckduckgo.com/',
                    bing: 'https://www.bing.com/search',
                    ask: 'https://www.ask.com/web'
                              
            };
            let url = actions[engine];
            let form = document.getElementById('search-form');
            form.setAttribute('action', url);
        });

        });
}

window.addEventListener("load", init);