const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");


function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-100', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-100', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-100', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-100', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    }
})

// -------- Start light mode and dark mode --------//
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function toggleTheme(){
    document.documentElement.classList.toggle('dark')
    
    if (document.documentElement.classList.contains('dark')) {
       localStorage.theme = 'dark'; 
    }else{
        localStorage.theme = 'light';
    }
  }
  // -------- End of light mode and dark mode --------//

// -------- Start of Email Validation --------//
// Send Email
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "LJwk9ZWqW7qKhmSme",
  });  
})();

const msg = document.querySelector(".form-message");

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      document.querySelector(".loader").classList.add("show");
      // these IDs from the previous steps
      emailjs.sendForm("service_bhivkl3", "template_2riu0el", this).then(
        function (success) {
          document.getElementById("contact-form").reset();
          document.querySelector(".loader").classList.remove("show");
          msg.innerHTML = "";
          msg.innerHTML += "<span class='success-msg'>(Mail Successfully Sent)</span>";
          msg.classList.add("show");
          setTimeout(()=> msg.classList.remove("show"), 2000);
        },
        function (error) {
          document.querySelector(".loader").classList.toggle("show");
          msg.classList.add("show");
          msg.innerHTML += "<span class='error-msg'>(Mail Not Sent)</span>";
          msg.classList.add("show");
          setTimeout(()=> msg.classList.remove("show"), 2000);
        }
      );
    });
};