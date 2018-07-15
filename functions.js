function isValidForm(passForm, form) {
    //проверка формы на валидность данных

    var fields = {
        'auth_username':'имя пользователя',
        'auth_pwd':'пароль',
        'reg_username':'имя пользователя',
        'reg_surname':'фамилию',
        'reg_name':'имя',
        'reg_email':'электронную почту',
        'reg_phone':'телефон',
        'reg_pwd':'пароль'
    };

    for(key in passForm){
        if(passForm[key]){
            var fieldName = passForm[key].name;
        }
        if(fieldName && fields[fieldName] && passForm[key].value==''){
            alert("Необходимо ввести " + fields[fieldName]);
            passForm[key].focus();
            return false;
        }
    }

    //проверки для пароля в форме регистрации
    if(form=='reg'){
        if(!isValidPassword(passForm.reg_pwd.value)){
            alert("Необходимо исправить пароль");
            passForm.reg_pwd.focus();
            return false;
        }

        if(passForm.reg_pwd.value != passForm.reg_confirmPwd.value){
            alert("Подтвержденный пароль не совпадает с паролем");
            passForm.reg_confirmPwd.focus();
            return false;
        }
    }

    return true;
}

function isFreeUsername(username){
    //сюда добавляем проверку логина на уникальность по данным из БД

    return true;
}

function isValidPassword(pwd) {
    const pwdPattern = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;

    //здесь будем получать паттерн для пароля с бэкенда
    //pattern = результат значения с бэкэнда
    //пока функция не сделана, используем константу

    var pattern = pwdPattern;

    return pattern.test(pwd);
}