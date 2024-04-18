async function fetchData() {

    const currentTime = Date.now();
    const initialTime = currentTime - (30 * 24 * 60 * 60 * 1000); 
    const finalTime = currentTime;

    const url = `https://fashion-industry-news-data-collection.p.rapidapi.com/?category=FashionIndustry&country=us&query=Gucci%20AND%20Styles&initial=${initialTime}&final=${finalTime}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b71e405267msh0916301778bf1ebp19ed37jsna3463db32063',
            'X-RapidAPI-Host': 'fashion-industry-news-data-collection.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            const result = await response.json();
            console.log(result);
            displayData(result.response.data);
        } else {
            throw new Error('Network response was not ok.');
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function displayData(articles) {
    const articlesContainer = document.getElementById('articles-container');

    articlesContainer.innerHTML = '';

    if (articles && articles.length > 0) {
        articles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            const titleElement = document.createElement('h2');
            titleElement.textContent = article.title;
            titleElement.style.fontFamily = 'Sitka Text, sans-serif';

            const authorElement = document.createElement('p');
            authorElement.textContent = 'Author: ' + article.author;

            articleDiv.appendChild(titleElement);
            articleDiv.appendChild(authorElement);

            const paragraphs = article.text.split('\n');
            paragraphs.forEach(paragraph => {
                const paragraphElement = document.createElement('p');
                paragraphElement.textContent = paragraph;
                paragraphElement.style.fontFamily = "'Times New Roman', Times, serif"; 
                paragraphElement.style.fontSize = '16px';
                paragraphElement.style.letterSpacing = '1px';
                articleDiv.appendChild(paragraphElement);
            });

            const buttonElement = document.createElement('button');
            buttonElement.textContent = 'Read more';
            buttonElement.style.fontFamily = 'Arial, sans-serif';
            buttonElement.style.textTransform = 'uppercase'; 
            buttonElement.style.backgroundColor = 'green';
            buttonElement.style.color = 'white';
            buttonElement.style.border = 'none';
            buttonElement.style.borderRadius = '5px';

            buttonElement.addEventListener('click', () => {
                window.open(article.url, '_blank');
            });

            articleDiv.appendChild(buttonElement);

            articlesContainer.appendChild(articleDiv);
        });
    } else {
        const noArticlesMessage = document.createElement('p');
        noArticlesMessage.textContent = 'No news articles available.';
        articlesContainer.appendChild(noArticlesMessage);
    }
}

fetchData();













  
  

