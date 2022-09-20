const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnShow = document.querySelector('.btn-show');
const cancelBtn = document.querySelector('.cancel-btn');
const selectionArr = document.querySelectorAll('#selection');

const selections = document.querySelectorAll('.selection');
const selectionIcons = document.querySelectorAll('.selection__icon');
const compareBtns = document.querySelectorAll('.btn-click');
const selectionModals = document.querySelectorAll('.selection__modal');

selections.forEach((selection) => {
    selection.addEventListener('click', (e) => {
        const selectionModal = selection.querySelector('.selection__modal');
        selectionModals.forEach((selModal) => {
            selModal.classList.remove('show');
        })
        selectionModal.classList.toggle('show');
    });
})

compareBtns.forEach((compareBtn) => {
    compareBtn.addEventListener('click', (e) => {
        modal.classList.add('show');
        overlay.classList.add('show');
    });
});

// Close Modal Function
cancelBtn.addEventListener('click',() => {
    overlay.classList.remove('show');
    modal.classList.remove('show');
});

overlay.addEventListener('click',() => {
    overlay.classList.remove('show');
    modal.classList.remove('show');
});