let colorRadio = document.forms.lesson.elements.color;

for (let i = 0; i < colorRadio.length; i++){
    colorRadio[i].addEventListener('change', function () {
        this.parentElement.parentElement.parentElement.style.backgroundColor = this.value;
    })
}

let langChecks = document.getElementsByName('lang[]');

for (let i = 0; i < langChecks.length; i++){
    langChecks[i].addEventListener('change', function () {
        console.log(this.value);
    })
}


let addInfoCheck = document.querySelector('fieldset[name=checkbox_fieldset] > div:last-child > label >input');
addInfoCheck.addEventListener('click', function () {
    let addInfoInput = document.querySelector('fieldset[name=checkbox_fieldset] > div:last-child > input');
    if(this.checked)
    {
        addInfoInput.removeAttribute('disabled');
    }
    else
    {
        addInfoInput.setAttribute('disabled', '');
    }
})