let loginform = `<h1 id="secondary" class="secondary"> <img src="../res/logo.png" alt="" id="logoinour"> Acfoods</h1>
<input type="text" class="logininput" id="logininput-1" placeholder="Enter Your Username">
<input type="password" class="logininput" id="logininput-2" placeholder="Enter Your Password">
<input type="submit" class="logininput" id="logininput-3" value="Log In">`

let signupform = `<h1 id="secondary" class="secondary"> <img src="../res/logo.png" alt="" id="logoinour">Acfoods</h1>
<input type="text" class="signupinput" id="signupinput1" placeholder="Enter your Name" name="name">
<input type="email" class="signupinput" id="signupinput2" placeholder="Enter your Email" name="email">
<input type="number" class="signupinput" id="signupinput3" placeholder="Enter your Mo. Number" name="number">
<input type="text" class="signupinput" id="signupinput4" placeholder="Enter your Username" name="Username">
<input type="text" class="signupinput" id="signupinput5" placeholder="Enter your Adderess" name="Adderess">
<input type="password" class="signupinput" id="signupinput6" placeholder="Enter your Password" name="password">
<input type="password" class="signupinput" id="signupinput7" placeholder="Re-Enter your Password " name="re-password">
<input type="submit" class="signupinput" id="signupinput8" value="Submit Now">`

function login() {
    let loginformvar = document.getElementById('loginform');
    loginformvar.innerHTML = signupform;
    let underline = document.getElementById('logsign-2');
    let underline2 = document.getElementById('logsign-1');
    underline.style.borderBottom = "2px solid black";
    underline.style.fontWeight = "bolder";
    underline2.style.border = "none";
    underline2.style.fontWeight = "normal";


}

function signup() {
    let signinformvar = document.getElementById('loginform');
    signinformvar.innerHTML = loginform;
    let underline = document.getElementById('logsign-1');
    let underline2 = document.getElementById('logsign-2');
    underline.style.borderBottom = "2px solid black";
    underline.style.fontWeight = "bolder";
    underline2.style.border = "none";
    underline2.style.fontWeight = "normal";

}