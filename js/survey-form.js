const fieldsets = document.querySelectorAll('fieldset');
const previousButton = document.querySelector('#previousButton');
const nextButton = document.querySelector('#nextButton');
const submitButton = document.querySelector('#submitButton');

let currentStep = 0;
updateButtons();

nextButton.addEventListener('click', function() {
    if (currentStep + 1 < fieldsets.length) {
        fieldsets[currentStep].style.display = 'none';
        currentStep++;
        fieldsets[currentStep].style.display = 'block';
        updateButtons();
    } else {
        previousButton.style.display = 'none';
        nextButton.style.display = 'none';
        fieldsets[currentStep].nextSibling.style.display = 'block';
        submitButton.style.display = 'block';
    }
});

previousButton.addEventListener('click', function() {
    if (currentStep > 0) {
        fieldsets[currentStep].style.display = 'none';
        currentStep--;
        fieldsets[currentStep].style.display = 'block';
        updateButtons();
    }
});

const fields = document.querySelectorAll('input[type=text], input[type=tel], input[type=radio], input[type=checkbox]');
fields.forEach(function(field) {
    field.addEventListener('change', function() {
        if (checkRequiredFields()) {
            submitButton.style.display = 'block';
        } else {
            submitButton.style.display = 'none';
        }
    });
});

function checkRequiredFields() {
    let requiredFields = document.querySelectorAll('input[type=text][required], input[type=tel][required], input[type=radio][required], input[type=checkbox][required]');
    let filledRequiredFields = document.querySelectorAll('input[type=text][required]:not(:empty), input[type=tel][required]:not(:empty), input[type=radio][required]:checked, input[type=checkbox][required]:checked');
    return requiredFields.length === filledRequiredFields.length;
}

function updateButtons() {
    if (currentStep === 0) {
        previousButton.classList.add('disabled');
        previousButton.disabled = true;
    } else {
        previousButton.classList.remove('disabled');
        previousButton.disabled = false;
    }

    if (currentStep === fieldsets.length - 1) {
        nextButton.textContent = 'Отправить ответы';
    } else {
        nextButton.textContent = 'Далее';
    }
}

