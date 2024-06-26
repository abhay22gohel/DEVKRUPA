document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("product-title");
  const titleContent = title ? title.textContent.trim() : "";
  const button = document.getElementById("whatsapp-button");

  function sendMessage() {
    const phoneNumber = "+919825999415";
    try {
      const message = `Hello, I am interested in purchasing the ${titleContent} Set. Could you please provide more details and pricing?`;
      const encodedMessage = encodeURIComponent(message);
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
      window.open(url, "_blank");
    } catch (error) {}
  }

  if (button) {
    button.addEventListener("click", sendMessage);
  }
});
