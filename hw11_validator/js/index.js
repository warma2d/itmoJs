// name : правила
let config = {
    login:'required|min:3|max:6',
    password:'required|min:2|max:4',
    agree:'checked',
    comment:'max:10'
};

validator = new Validator(form, config);