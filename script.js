

 document.addEventListener("DOMContentLoaded", () => {
 const form = document.getElementById('formulaire');
    form.addEventListener('submit', (event) => {
        // arrret la soumission de la page
       event.preventDefault();

      let nickname = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let comment = document.getElementById('comment').value;

      document.getElementById('notification').innerHTML = `
        Votre ${email} et votre nom ${nickname} 
      `;

      console.log(nickname, email, comment);


    // $(".js-submit").serialize(),
    });
  });




