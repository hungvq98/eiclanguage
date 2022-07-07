export default function () {
    var itemCol = document.querySelectorAll('.collapsejs');

    itemCol.forEach(e => {
        e.querySelector('.collapseHead-js').addEventListener('click', () => {
            e.classList.toggle('active');


            // e.style.height = e.querySelector('.body-js').clientHeight + 110 + 'px';

        })
        e.querySelectorAll('.collapseChild-js').forEach(k => {
            k.addEventListener('click', () => {
                k.classList.toggle('active');
                // e.style.height = e.querySelector('.body-js').clientHeight + 100 + 'px'
            })
        })
    })
}


