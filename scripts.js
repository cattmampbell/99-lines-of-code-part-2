// 'DOMContentLoaded' event handler on document
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    // Creates <elementName id="idName" class="className"> and appends the element via appendTo
    const createElement = (elementName, idName, className, appendTo) => {
        const element = document.createElement(elementName);
        element.id = idName;
        element.className = className;
        appendTo.appendChild(element);
        return element;
    }

    const divContainer = createElement('div', '', 'header-container', body);
    const divRow1 = createElement('div', 'row1', 'row', divContainer);
    const divCol1 = createElement('div', 'column1', 'col-12 text-center', divRow1);
    const h1 = createElement('h1', '', 'h1 text-secondary justify-content-center align-items-center mt-4', divCol1);
    const h1Txt = document.createTextNode('My Singing Friends');
    h1.appendChild(h1Txt);

    const divRow2 = createElement('div', 'row2', 'row', divContainer);
    const divCol2 = createElement('div', 'column2', 'col-12 text-center', divRow2);
    const singBtn = createElement('button', '', 'btn btn-lg btn-secondary col-4 px-2 py-2 mx-2 my-4', divCol2);
    const singBtnTxt = document.createTextNode('Sing!'); 
    singBtn.appendChild(singBtnTxt);
     
    // 'click' event handler on singBtn
    singBtn.addEventListener('click', () => {
        const myFriends = ['Olivia', 'Cody', 'Megan', 'Emily', 'Toast'];
        for(let i = 0; i < myFriends.length; i += 1) {
            let myFriend = myFriends[i];
            console.log(myFriend);

            for(let j = 99; j > 0; j -= 1) {
                if(j > 2) { 
                    console.log(j + " lines of code in the file, " + j + " lines of code; " + myFriend + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file.");
                } else if(j == 2) { 
                    console.log(j + " lines of code in the file, " + j + " lines of code; " + myFriend + " strikes one out, clears it all out, " + (j - 1 ) + " line of code in the file.");
                } else if (j == 1) { 
                    console.log(j + " line of code in the file, " + j + " line of code; " + myFriend + " strikes one out, clears it all out, no more lines of code in the file!");
                }
            }
        }  
    })
})