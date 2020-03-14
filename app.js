const DB_USER = [
    {
        username: "",
        password: ""
    }
]

const inputUser = document.querySelector("#username");
const inputPass = document.querySelector("#password");
const inputLagi = document.querySelector("#passwordLagi")
const buttonSubmit = document.querySelector("#submitForm");

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const valueInputPass = inputPass.value;
    const valueInputUser = inputUser.value;
    const valueInputLagi = inputLagi.value;
    
    console.log(valueInputPass);
    console.log(valueInputUser);
    console.log(valueInputLagi);
    DB_USER.map((data) => {
        data.username = valueInputUser;
        data.password = valueInputPass;
    })
    let flag = 0;
    
    DB_USER.map((data) => {
        if(data.password === valueInputLagi){
            flag = 1;
        }
    })
    const warningMsg = document.querySelector(".warning");
    console.log(warningMsg);

    if(flag === 0){
        warningMsg.className = "text-danger";
    }
    else{
        alert("selamat anda berhasil registrasi");
    }
})
