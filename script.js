const typed = new Typed(".multiple-text", {
  strings: ["ServiceNow Developer", "Frontend Developer", "Data Analyst"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// Google Sheet form
const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(() => {
      msg.innerHTML = "Message sent successfully!";
      form.reset();
    });
});
