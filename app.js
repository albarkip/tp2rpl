const DB_USER = [
    {
        username: "barbar",
        password: "password"
    }
]

const inputUser = document.querySelector("#username");
const inputPass = document.querySelector("#password");
const buttonSubmit = document.querySelector("#submitForm");

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const valueInputPass = inputPass.value;
    const valueInputUser = inputUser.value;
    console.log(valueInputPass);
    console.log(valueInputUser);

    let flag = 0;
    
    DB_USER.map((data) => {
        if(data.username === valueInputUser && data.password === valueInputPass){
            flag = 1;
        }
    })
    const warningMsg = document.querySelector(".warning");
    console.log(warningMsg);

    if(flag === 0){
        warningMsg.className = "text-danger";
    }
    else{
        alert("selamat anda masuk home");
    }
})
