

$(function() {

    document.getElementById('search-input').addEventListener('keyup', getJson);

    function getJson() {
        const server = 'http://192.168.1.66:9342'
        const question = $('#search-input').val();
        fetch(`${server}/api/Search/SearchAskedQuestions?title=${question}`)
            .then((response) => response.json())
            .then((searchResults) => {

                var htmlToAppend = '';

                // build the html list
                searchResults.Documents.forEach(function(searchResult) {
                    htmlToAppend += `
                        <li class="result-item">
                            <div>${searchResult.Title}</div>
                            <i class="fas fa-greater-than"></i>
                        </li>`;
                });

                document.getElementById('search-results').innerHTML = htmlToAppend;

            }).catch(error => {
                console.error(error);
              });

    }


    const drop = new Drop({
      target: document.querySelector('#search-input'),
      position: 'bottom left',
      openOn: 'focus',
      content: `<ul id="search-results">
                </ul>`,
               
      classes: 'drop-theme-arrows'
    });

});