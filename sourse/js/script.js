'usr strict'
 let btn = document.querySelector('.modal-form-login__close')
 let login = document.querySelector('.user-main-nav li')
 let fadeout = document.querySelector('.fade-out');
 let form = document.querySelector('.modal-form-login')
 btn.addEventListener('click', function() { form.style.display = "none";  fadeout.style.display = "none";} );
 login.addEventListener('click', function(e) {   form.style.display = "block"; fadeout.style.display = "block";  })
