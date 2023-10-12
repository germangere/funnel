const form = document.querySelector('form')

form.onsubmit = (event) => sendMail(event)

function sendMail(event) {
    event.preventDefault()
    const params = {
      from_name: form[0].value,
      from_email: form[1].value,
      from_tel: form[2].value
    }
    emailjs.send('service_pnby88f', 'template_bh2byv3', params, 'i2cRPqkro4EpG3kFP')
      .then(function (response) {
        console.log('Correo enviado correctamente', response.status, response.text)
      }, function (error) {
        console.log('Error al enviar el correo: ', error)
      })
}