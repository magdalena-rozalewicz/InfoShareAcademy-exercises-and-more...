import { API_URL } from "./url.js";

const Form = document.forms.registrForm;
const registrationButton = Form.querySelector('#registration');
const inputNameUser = Form.querySelector("#name");
const inputEmailUser = Form.querySelector("#email");
const inputAdressUser = Form.querySelector("#adress");
const usersList = document.querySelector("#users-list");
const usersListButton = document.querySelector("#list-button");



    registrationButton.addEventListener(("click"), () =>{
        if(inputNameUser.value && inputEmailUser.value && inputAdressUser.value){   
        const newUser = {
            username: Form.name.value,
            email: Form.email.value,
            adress: Form.adress.value
        };

        const li = document.createElement("li");
        li.textContent = `${newUser.username}, e-mail:${newUser.email}, Adress: ${newUser.adress}`;
        usersList.prepend(li) ;

        inputNameUser.value = "";
        inputEmailUser.value ="";
        inputAdressUser.value = "";
    }
});


Form.addEventListener(("submit"), (event) =>{
    event.preventDefault();
});


usersListButton.addEventListener(("click"), () => {
    const listLenght = document.querySelectorAll(".fromAPI");
    if (!listLenght.length) {
        fetch(API_URL)
            .then((resp) => resp.json())
            .then((users) => {
                    const allUsers = users.map((user) => {
                    return `${user.name}, e-mail: ${user.email},  Adress: ${user.address.street}, ${user.address.city}`;
                });

                allUsers.map((person) => {
                    const li = document.createElement("li");
                    li.classList.add("fromAPI");
                    li.textContent = person;
                    usersList.append(li);
                });
            });
    };
});


