window.onload = () => {
    const loginInput = document.querySelector('.login')
    const passwordInput = document.querySelector('.password')
    const checkDataBtn = document.querySelector('.btn-check-auth')


    checkDataBtn.addEventListener('click', () => {
        if (!loginInput.value && loginInput.value === "" || !passwordInput.value && passwordInput.value === "") {
            alert("Введите данные")
        }
        else {
            alert("Ну тут типа будет проверка данные :D")
        }
    })
}