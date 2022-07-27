const ul = document.querySelector('.booksList ul');
const forms = document.forms;

// delete books
ul.addEventListener('click', (s) => {
    if (s.target.className == 'booksList__delete') {
        const li = s.target.parentElement;
        li.parentNode.removeChild(li);
    }
});

// filter books
// const searchBook = forms['books__search'];
// searchBook.addEventListener('keyup', (e) => {
//     e.preventDefault();

//     const input = searchBook.querySelector('input');
//     const filter = input.value.toUpperCase();
//     const li = ul.querySelectorAll('li');

//     for(let i = 0; i < li.length; i++){
//         const span = li[i].querySelector('.booksList__name');
//         const name = span.textContent;
//         if(name.toUpperCase().indexOf(filter) > -1){
//             console.log(name.toUpperCase().indexOf(filter))
//             li[i].style.display = '';
//         } else {
//             console.log(name.toUpperCase().indexOf(filter))
//             li[i].style.display = 'none';
//         }
//     }
// })

const searchBook = forms['books__search'];
searchBook.addEventListener('keyup', (e) => {
    e.preventDefault();

    const input = searchBook.querySelector('input');
    const filter = input.value.toUpperCase();
    const li = ul.querySelectorAll('li');
    for (let i = 0; i < li.length; i++) {
        const span = li[i].querySelector('.booksList__name');
        const name = span.textContent;
        if (name.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}
)
