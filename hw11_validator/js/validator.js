function Validator(form, config) {

    this._form = form;
    this._config = config;
    this._errors = [];

    this._form.addEventListener('submit', function(evt){

        if(! validator.test())
        {
            evt.preventDefault();
            console.log('Errors');
        }
    });
}

Validator.prototype.test = function () {

    this._errors = [];
    let inputs = form.querySelectorAll('input');
    let inputName = '';
    let rules = [];
    let subRules = [];
    let min = 1;
    let max = 1;

    for(let i=0; i<inputs.length; i++)
    {
        inputName = inputs[i].name;// login
        if(inputName)
        {
            rules = this._config[inputName].split('|');
        }

        for(let k=0; k<rules.length; k++)
        {
            if(inputs[i].type !== 'checkbox' && rules[k] === 'required')
            {
                if(inputs[i].value == '')
                {
                    this._errors.push('Поле ' + inputName + ' следует заполнить');
                    break;
                }
            }
            else
            {
                subRules = rules[k].split(':');
                if (subRules[0] == 'min') {
                    if (subRules[1] !== undefined) {
                        min = subRules[1];

                        if (inputs[i].value.length < min) {
                            this._errors.push('Поле ' + inputName + ' должно состоять минимум из ' + min + ' символов');
                        }
                    }
                } else if (subRules[0] == 'max') {
                    if (subRules[1] !== undefined) {
                        max = subRules[1];

                        if (inputs[i].value.length > max) {
                            this._errors.push('Поле ' + inputName + ' должно состоять максимум из ' + max + ' символов');
                        }
                    }
                }
            }

            if (inputs[i].type === 'checkbox' && rules[k] == 'checked')
            {
                if(inputs[i].checked === false)
                {
                    this._errors.push('Чекбокс ' + inputName + ' следует отметить');
                }
            }
        }
    }
    console.log(this._errors);

    if(this._errors.length == 0 )
    {
        return true;
    }
    else
    {
        return false;
    }

};