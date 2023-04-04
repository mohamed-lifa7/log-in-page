let eye = (document.getElementsByClassName('fa-eye'))[0];
let eyeClosed = (document.getElementsByClassName('fa-eye-slash'))[0];
let pswd = (document.getElementsByClassName('pswd'))[0];

eye.onclick = function () {
  pswd.setAttribute('type', 'text');
  eye.style.display = 'none';
  eyeClosed.style.display = 'inline-block';
}

eyeClosed.onclick = function () {
  pswd.setAttribute('type', 'password');
  eyeClosed.style.display = 'none';
  eye.style.display = 'inline-block';
}