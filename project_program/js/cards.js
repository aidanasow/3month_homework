const cards = document.querySelector('.cards__item');
const cardCount = 12;
const defaultUserPhoto = "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2019/10/14084818/abstract-robot-thinking.jpg";

const createCard = () => {
    const infoCard = document.createElement('div');
    infoCard.classList.add('infoCard');
    infoCard.innerHTML = `
        <div class="defaultImg">
            <img class="card_img" src="${defaultUserPhoto}" alt="">
        </div>
        <p class="cardTitle"></p>
        <p class="cardBody"></p>
    `;
    return infoCard;
};

const getInfo = async () => {
    try {
        const infoCard = document.querySelectorAll('.infoCard');
        for (let i = 0; i < cardCount; i++) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${i + 1}`);
            const data = await response.json();
            const currentCard = infoCard[i];
            currentCard.innerHTML = `
            <div class="defaultImg">
                <img class="card_img" src="${defaultUserPhoto}" alt="">
            </div>
            <p class="cardTitle" >${data.title}</p>
            <p class="cardBody">${data.body}</p>
        `;
        }
    }catch (e){
        console.log(e.message)
    }
};

for (let i = 0; i < cardCount; i++) {
    cards.appendChild(createCard());
}

getInfo();
