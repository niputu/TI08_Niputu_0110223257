
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username !== 'ahmad2017' && password !== 'integrity') {
      return alert('login gagal!');
    }

    document.querySelector('body').innerHTML = '<h1>Login Berhasil</h1>';
  }