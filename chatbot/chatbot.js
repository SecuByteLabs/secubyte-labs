// SecuByte Assistant - JS Chatbot

const btn = document.createElement("div");
btn.id = "sb-chatbot-btn";
btn.innerHTML = "💬";
document.body.appendChild(btn);

const box = document.createElement("div");
box.id = "sb-chatbot";
box.innerHTML = `
  <header>SecuByte Assistant</header>
  <div id="sb-messages"></div>
  <div id="sb-input">
    <input type="text" id="sb-text" placeholder="Type your message..." />
    <button id="sb-send">Send</button>
  </div>
`;
document.body.appendChild(box);

btn.onclick = () => {
  box.style.display = box.style.display === "flex" ? "none" : "flex";
  box.style.flexDirection = "column";
};

const messages = document.getElementById("sb-messages");
const input = document.getElementById("sb-text");
const sendBtn = document.getElementById("sb-send");

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = `sb-msg ${type}`;
  div.innerText = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

addMessage(
  "Hi 👋 I’m SecuByte Assistant. How can I help you today?\n\nYou can ask about services, pricing, or contact details.",
  "sb-bot"
);

function botReply(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("service")) {
    return "We offer Website Development, Cybersecurity Services, Data Analysis & Reporting, Graphic Design, Photo & Video Editing, and Social Media Handling.";
  }

  if (msg.includes("price") || msg.includes("cost")) {
    return "Pricing depends on your requirements. Please share your needs and we’ll guide you with the best option.";
  }

  if (msg.includes("contact") || msg.includes("reach")) {
    return "Please fill the contact form, Connect with us on LinkedIn, or the Contact page on our website.";
  }

  if (msg.includes("email")) {
    return "Please fill the contact form, Connect with us on LinkedIn, or the Contact page on our website.";
  }

  if (msg.includes("whatsapp")) {
    return "You can WhatsApp us directly for quick support.";
  }

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello 😊 How can I assist you today?";
  }

  return "Thanks for your message. Please share your requirement and our team will get back to you shortly.";
}

sendBtn.onclick = sendMessage;
input.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "sb-user");
  input.value = "";

  setTimeout(() => {
    addMessage(botReply(text), "sb-bot");
  }, 600);
}
