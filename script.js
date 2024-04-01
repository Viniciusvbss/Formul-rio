
//Isso e uma função utilizada para obter um elemento do documento HTML com o ID. O elemento retornado será armazenado em uma variável, previsivelmente para ser utilizado posteriormente no código.
 
const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passworConfrimation = document.getElementById("password-confirmation")

//Isso e um  ouvinte de evento ao formulário (form) no momento em que ele é submetido (submit). Quando o formulário é submetido, a função de callback é executada. Nesse caso, a função de callback utiliza event.preventDefault() para evitar que o formulário seja submetido normalmente, ou seja, ele impede o comportamento padrão de recarregar a página após o envio do formulário.

form.addEventListener("submit", (event) => {
    event.preventDefault();

    
   checkFrom();
})

// Evento "bluer" e quando vc esta no foco e tira o foco quanto clicar com o mause fora do formulario e ira fazer o check novamente
email.addEventListener("bluer", () => {
    checkInputEmail();
})

username.addEventListener("bluer", () => {
    checkInputUsername();
})

password.addEventListener("bluer", () => {
    checkInputPassword();
})
//função chamada checkInputUsername que verifica se o campo de nome de usuário está vazio. Se estiver vazio, a função chama outra função chamada errorInput para exibir uma mensagem de erro e aplicar uma classe CSS para indicar o erro visualmente.

function checkInputUsername(){
    const usernameValue = username.value;
    //Declaração onde ele vai ver se username esta vazio ou não. se estiver vazio irá mostrar "Preencha um username" caso tenha algum valor ele ira validar e guarda
    if (usernameValue === ""){
        errorInput(username, "Preencha um username!")
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;
    //Declaração onde ele vai ver se o Email esta vazio ou não. se estiver vazio irar mostra na tela "O email e obrigatorio", caso tenha algum valor ele ira validar e guarda
    if (emailValue === ""){
        errorInput(email, "O email é obrigatorio!")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPassword(){
    const passwordValue = password.value;
    //Declaração onde ele vai ver se o password esta vazio ou não. se estiver vazio irar mostra na tela "Asenha e obrigatoria", caso tenha valor ele ira verificar se o password e maior ou menor que 8. Se for menor vai mostra "A senha precisa ter no mínimo 8 caracteres" caso tenha 8 caracteres ele vai validar é guarda 
    if (passwordValue === ""){
        errorInput(password, "A senha é obrigatoria.")
    }else if(passwordValue.length < 8){
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres.")
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}



function checkInputPassworConfrimation(){
    const passwordValue = password.value;
    const confrimationPasswordValue = passworConfrimation.value;
    //Confirma a senha  e valida ela 

    if (confrimationPasswordValue === ""){
        errorInput(passworConfrimation, "A confrimaçãp da senha é obrigatoria.")
    }else if(confrimationPasswordValue != passwordValue){
        errorInput(passworConfrimation, "A senha não é igual.")
    }else{
        const formItem = passworConfrimation.parentElement;
        formItem.className = "form-content"
    }
}

function checkFrom() {

    checkInputUsername(); 
    checkInputEmail();
    checkInputPassword();
    checkInputPassworConfrimation();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    });

    if (isValid) {
        alert("CADASTRADO COM SUCESSO!!!")
    }
}


function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}