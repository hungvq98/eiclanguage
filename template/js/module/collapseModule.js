export default function () {
    var itemCol = document.querySelectorAll('.collapsejs');
    itemCol.forEach(e => {
        e.querySelector('.collapseHead-js').addEventListener('click', ()=> {
            e.classList.toggle('active');
        })
    })
}