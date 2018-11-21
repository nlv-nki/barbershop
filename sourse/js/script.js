'usr strict'
 let btn = document.querySelector('.modal-form-login__close')
 let login = document.querySelector('.user-main-nav li')
 let fadeout = document.querySelector('.fade-out');
 let form = document.querySelector('.modal-form-login')
 btn.addEventListener('click', function() { form.style.display = "none";  fadeout.style.display = "none";} );
 login.addEventListener('click', function(e) {   form.style.display = "block"; fadeout.style.display = "block";  })


class Gallery {
  constructor({element,opt}) {
    this._element = element;
    console.log(element)
    this._render()
  }

  _render() {
      this._element.innerHTML = `
              <img src="img/barbershopinner.jpg" />
              <div class="gallery__controls">
                <a class="button" href="#">Назад</a>
                <a class="button" href="#">Вперед</a>
              </div>
      `;
  }
}
//new Gallery({element: document.querySelector('.gallery')})
