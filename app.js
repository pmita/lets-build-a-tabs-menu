const buttons = [...document.querySelectorAll('.btn')];
const allArticles = [...document.querySelectorAll('.container-content')];
const buttonsContainer = document.querySelector('.container-left');

buttonsContainer.addEventListener('click', (event)=>{
    const buttonId = event.target.dataset.id;
    if(buttonId){
        buttons.forEach( button =>{
            button.classList.remove('active');
            if(button.dataset.id === buttonId){
                button.classList.add('active');
            }
        });
        allArticles.forEach( article =>{
            article.classList.remove('active');
            if(article.dataset.id === buttonId){
                article.classList.add('active');
            }
        });


    }
});