document.getElementById("contactForm").addEventListener("submit", async function (event) {
  event.preventDefault();
  let form = event.target;
  let status = document.getElementById("formStatus");
  let data = new FormData(form);
  let response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    status.textContent = "✅ Your message has been sent!";
    status.style.color = "green";
    form.reset();
  } else {
    status.textContent = "❌ Oops! Something went wrong. Please try again.";
    status.style.color = "red";
  }
});
document.querySelector(".btn-cv").addEventListener("click", function () {
  const form = document.getElementById("contactForm");
  
  // Scroll smoothly to the form
  form.scrollIntoView({ behavior: "smooth" });

  // After scrolling, highlight the form
  setTimeout(() => {
    form.style.transition = "box-shadow 0.3s ease, background-color 0.3s ease";
    form.style.boxShadow = "0 0 25px rgba(180, 123, 255, 0.7)";
    

    // Remove highlight after 1.5 seconds
    setTimeout(() => {
      form.style.boxShadow = "none";
      
    }, 1500);
  }, 600); // small delay so animation starts after scroll
});
