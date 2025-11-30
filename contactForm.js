const form = document.getElementById("contactForm");

const fields = ["firstName", "lastName", "email", "phone", "message"];

// Simple validation
function validateForm(data) {
  const errors = {};

  if (!data.firstName.trim()) errors.firstName = "First name is required";
  if (!data.lastName.trim()) errors.lastName = "Last name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = "Email is invalid";
  if (!data.phone.trim()) errors.phone = "Phone number is required";
  if (!data.message.trim()) errors.message = "Message cannot be empty";

  return errors;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear previous error messages
  fields.forEach(f => document.getElementById(f + "Error").innerText = "");
  document.getElementById("formSuccess").innerText = "";

  // Collect form data
  const contactData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  // Validate
  const errors = validateForm(contactData);
  if (Object.keys(errors).length > 0) {
    Object.keys(errors).forEach(f => {
      document.getElementById(f + "Error").innerText = errors[f];
    });
    return;
  }

  // ✅ Create Gmail compose link
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=carloshatech@gmail.com` +
                    `&su=Customer Inquiry from ${encodeURIComponent(contactData.firstName + " " + contactData.lastName)}` +
                    `&body=Name: ${encodeURIComponent(contactData.firstName + " " + contactData.lastName)}%0A` +
                    `Email: ${encodeURIComponent(contactData.email)}%0A` +
                    `Phone: ${encodeURIComponent(contactData.phone)}%0A` +
                    `Message: ${encodeURIComponent(contactData.message)}`;

  // Open Gmail in new tab
  window.open(gmailLink, "_blank");

  // Show success message and reset form
  document.getElementById("formSuccess").innerText = "✅ Your email is ready to send via Gmail!";
  form.reset();
});
