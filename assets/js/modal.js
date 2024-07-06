document.addEventListener("DOMContentLoaded", () => {
    const mainModal = document.getElementById("vacationModal");
    const loadingModal = document.getElementById("loadingModal");
    const travelGuideModal = document.getElementById("travelGuideModal");
    const btn = document.querySelector(".plan-vacation-trigger");
    const mainModalClose = document.querySelector(".close");
    const loadingModalClose = document.getElementById("loadingModalClose");
    const travelGuideModalClose = document.getElementById("travelGuideModalClose");
    const planNowButton = document.querySelector(".plan-now");
    const loadingModalPlanNowButton = document.querySelector("#loadingModal .plan-now");
    const questions = document.querySelectorAll(".modal-question");
    const inputs = document.querySelectorAll(".modal-input");
    const errorMessage = document.getElementById("error-message");
    let timeoutId;

    btn.onclick = () => {
        mainModal.style.display = "block";
        resetSelection();
    };

    mainModalClose.onclick = () => {
        mainModal.style.display = "none";
        resetSelection();
    };

    loadingModalClose.onclick = () => {
        clearTimeout(timeoutId);
        loadingModal.style.display = "none";
    };

    travelGuideModalClose.onclick = () => travelGuideModal.style.display = "none";

    window.onclick = (event) => {
        event.target === mainModal ? ((mainModal.style.display = "none"), resetSelection()) :
        event.target === loadingModal ? (clearTimeout(timeoutId), (loadingModal.style.display = "none")) :
        event.target === travelGuideModal ? (travelGuideModal.style.display = "none") :
        null;
    };

    questions.forEach((question) => {
        question.onclick = (event) => {
            event.preventDefault();
            questions.forEach((q) => q.classList.remove("selected"));
            question.classList.add("selected");
            errorMessage.style.display = "none";
        };
    });

    planNowButton.onclick = () => validateInputs() ? showLoadingModal() : (errorMessage.style.display = "block");

    loadingModalPlanNowButton.onclick = () => {
        clearTimeout(timeoutId);
        loadingModal.style.display = "none";
        travelGuideModal.style.display = "block";
    };

    function showLoadingModal() {
        mainModal.style.display = "none";
        loadingModal.style.display = "block";
        timeoutId = setTimeout(() => {
            loadingModal.style.display = "none";
            travelGuideModal.style.display = "block";
        }, 5000);
    }

    function resetSelection() {
        questions.forEach((q) => q.classList.remove("selected"));
        errorMessage.style.display = "none";
        inputs.forEach((input) => input.value = "");
    }

    function validateInputs() {
        return Array.from(inputs).every(input => input.value.trim() !== "");
    }
});