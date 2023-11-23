(function () {
  "use strict";

  // Pilih semua formulir dengan kelas 'php-email-form'
  let forms = document.querySelectorAll('.php-email-form');

  // Iterasi melalui setiap formulir
  forms.forEach(function (form) {
    // Tambahkan event listener untuk menghandle submit
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Dapatkan formulir saat ini
      let thisForm = this;

      // Dapatkan nilai atribut 'action' dan 'data-recaptcha-site-key'
      let action = thisForm.getAttribute('action');
      let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');

      // Validasi atribut 'action'
      if (!action) {
        displayError(thisForm, 'The form action property is not set!');
        return;
      }

      // Tampilkan loading spinner
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      // Dapatkan data formulir
      let formData = new FormData(thisForm);

      // Jika menggunakan reCAPTCHA
      if (recaptcha) {
        if (typeof grecaptcha !== "undefined") {
          grecaptcha.ready(function () {
            try {
              grecaptcha.execute(recaptcha, { action: 'php_email_form_submit' })
                .then(token => {
                  formData.set('recaptcha-response', token);
                  php_email_form_submit(thisForm, action, formData);
                })
            } catch (error) {
              displayError(thisForm, error);
            }
          });
        } else {
          displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
        }
      } else {
        // Jika tidak menggunakan reCAPTCHA
        php_email_form_submit(thisForm, action, formData);
      }
    });
  });

  // Fungsi untuk mengirim formulir menggunakan Fetch API
  function php_email_form_submit(thisForm, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    })
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error(`${response.status} ${response.statusText} ${response.url}`);
        }
      })
      .then(data => {
        // Sembunyikan loading spinner
        thisForm.querySelector('.loading').classList.remove('d-block');
        if (data.trim() == 'OK') {
          // Tampilkan pesan sukses jika respons 'OK'
          thisForm.querySelector('.sent-message').classList.add('d-block');
          thisForm.reset();
        } else {
          // Tampilkan pesan error jika respons bukan 'OK'
          throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action);
        }
      })
      .catch((error) => {
        // Tangani kesalahan
        displayError(thisForm, error);
      });
  }

  // Fungsi untuk menampilkan pesan kesalahan
  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
