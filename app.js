let input = document.querySelector('.input');
let add = document.querySelector('.add');

function todo() {
    add.addEventListener('click', () => {
        let p = document.createElement('p');
        p.innerHTML = input.value;
        document.body.appendChild(p);
        input.focus();
        input.value = "";

        p.addEventListener('click', () => {
            p.style.textDecoration = 'line-through';
        })

        p.addEventListener('dblclick', () => {
            p.remove(p);
        })
    });
}
todo();