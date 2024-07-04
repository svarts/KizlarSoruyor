document.addEventListener('DOMContentLoaded', () => {
    const mainModal = document.getElementById('vacationModal');
    const loadingModal = document.getElementById('loadingModal');
    const btn = document.querySelector('.plan-vacation-trigger');
    const mainModalClose = document.querySelector('.close');
    const loadingModalClose = document.getElementById('loadingModalClose');
    const planNowButton = document.querySelector('.plan-now');
    const questions = document.querySelectorAll('.modal-question');

    btn.onclick = () => mainModal.style.display = 'block';
    mainModalClose.onclick = () => mainModal.style.display = 'none';
    loadingModalClose.onclick = () => loadingModal.style.display = 'none';

    window.onclick = (event) => {
        event.target === mainModal ? mainModal.style.display = 'none' : null;
        event.target === loadingModal ? loadingModal.style.display = 'none' : null;
    };

    questions.forEach(question => {
        question.onclick = (event) => {
            event.preventDefault();
            questions.forEach(q => q.classList.remove('selected'));
            question.classList.add('selected');
        };
    });

    planNowButton.onclick = () => {
        const isSelected = document.querySelector('.modal-question.selected') !== null;
        isSelected ? showLoadingModal() : alert("Please select a question first.");
    };

    function showLoadingModal() {
        mainModal.style.display = 'none';
        loadingModal.style.display = 'block';
        setTimeout(() => {
            loadingModal.style.display = 'none';
        }, 5000);
    }
});