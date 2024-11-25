var newsxhr = new XMLHttpRequest();
var newsurl = './news.json';

newsxhr.open(`GET`, newsurl, true);
newsxhr.responseType = 'json';

newsxhr.onload = function() {
    var news = newsxhr.response.news;
    var newsDiv = document.getElementById('news');

    news.forEach(function(newsItem) {
        var newsItemDiv = document.createElement('div');
        newsItemDiv.classList.add('news');
    
        var title = document.createElement('h2');
        title.textContent = newsItem.title;
    
        var description = document.createElement('p');
        description.textContent = newsItem.description;
    
        var keysHeader = document.createElement('h3');
        keysHeader.textContent = 'Key Points:';
    
        var keysList = document.createElement('ul');
        newsItem.key_points.forEach(function(key) {
            var listItem = document.createElement('li');
            listItem.textContent = key;
            keysList.appendChild(listItem);
        });
    
        var impactHeader = document.createElement('h3');
        impactHeader.textContent = 'Impacts:';
    
        var impactList = document.createElement('ul');
        newsItem.impact.forEach(function(impact) {
            var listItem = document.createElement('li');
            listItem.textContent = impact;
            impactList.appendChild(listItem);
        });
    
        newsItemDiv.appendChild(title);
        newsItemDiv.appendChild(description);
        newsItemDiv.appendChild(keysHeader);
        newsItemDiv.appendChild(keysList);
        newsItemDiv.appendChild(impactHeader);
        newsItemDiv.appendChild(impactList);
    
        newsDiv.appendChild(newsItemDiv);
    });
};

newsxhr.send();
