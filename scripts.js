// 'DOMContentLoaded' event handler on document
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    // Creates/appends <elementName id="idName" class="className">, returns result
    const createElement = (elementName, idName, className, appendTo) => {
        const element = document.createElement(elementName);
        element.id = idName;
        element.className = className;
        appendTo.appendChild(element);
        return element;
    }

    // Creates/appends <appendTo>textContent, returns result
    const createTextNode = (textContent, appendTo) => {
        const element = document.createTextNode(textContent);
        appendTo.appendChild(element);
        return element;
    }

    // <div class="header-container"> 
    //      <div class="row">
    //          <h1>My Singing Friends
    const divContainer = createElement('div', '', 'header-container', body);
    const divRow1 = createElement('div', 'divRow1', 'row justify-content-center align-items-start', divContainer);
    const h1 = createElement('h1', '', 'h1 text-dark text-center col-12 mt-4', divRow1);
    const h1Txt = createTextNode('My Singing Friends', h1);

    //      <div class="row">
    //          <button>Sing!
    const divRow2 = createElement('div', 'divRow2', 'row justify-content-center align-items-center', divContainer);
    const singBtn = createElement('button', '', 'btn btn-lg btn-secondary text-center col-4 px-2 py-2 mx-2 my-4', divRow2);
    const singBtnTxt = createTextNode('Sing!', singBtn);

    let divRowNum = 3; // Initializes divRowNum
    let singBtnCount = 0; // Initializes singBtnCount 

    // 'click' event handler on singBtn
    singBtn.addEventListener('click', () => {
        singBtnCount += 1; // Adds 1 to singBtnCount each time 'click' event handler on SingBtn runs

        //  If singBtnCount is equal to 1...
        if(singBtnCount === 1) {
            const myFriends = ['Olivia', 'Cody', 'Megan', 'Emily', 'Toast'];
            for(let i = 0; i < myFriends.length; i += 1) { 
                const myFriend = myFriends[i];

                //          <div class="row">
                //              <div class="card" style="width: __rem;">
                //                  <img class="card-img-top" src="my-friends/..." alt="This is my friend, ...">
                //                  <div class="card-body">
                //                      <h5 class="card-title">myFriend
                //                      <p class="card-text">
                const divRow = createElement('div', `divRow${divRowNum}`, 'row justify-content-center align-items-center', divContainer);
                divRowNum += 1; // Adds 1 to divRowNum w/ each iteration of loop
                const divCard = createElement('div', '', 'friend card col-4 px-2 py-2 mx-3 my-3', divRow);
                divCard.setAttribute('style', 'width: 40rem;'); 
                const img = createElement('img', `img${myFriend}`, 'card-img-top', divCard);
                img.setAttribute('src', `my-friends/${myFriend}.jpg`); 
                img.setAttribute('alt', `This is my friend, ${myFriend}.`);
                const divCardBody = createElement('div', '', 'card-body', divCard);
                const h3Card = createElement('h3', '', 'card-title text-dark', divCardBody);
                const h3Txt = createTextNode(myFriend, h3Card);
                const pCard = createElement('p', '', 'card-text text-secondary', divCardBody);

                for(let j = 99; j > 0; j -= 1) {
                    let song = ``;
                    if(j > 2) { 
                        song += `${j} lines of code in the file, ${j} lines of code; ${myFriend} strikes one out, clears it all out, 
                        ${(j - 1)} lines of code in the file.`;
                    } else if(j == 2) { 
                        song += `${j} lines of code in the file, ${j} lines of code; ${myFriend} strikes one out, clears it all out, 
                        ${(j - 1)} more line of code in the file.`;
                    } else if (j == 1) { 
                        song += ` ${j} line of code in the file, ${j} line of code; ${myFriend} strikes one out, clears it all out, 
                        no more lines of code in the file!`;
                    }
                    const pCardTxt = createTextNode(`${song}`, pCard);
                }
            }
            //  Else if singBtnCount is greater than 1...
        }  else if(singBtnCount > 1) {
            alert(`Your friends are already singing!`);
        }
    })
})