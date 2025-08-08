VOC.onclick = () => {
  window.open("https://vocindia.net", "_self");
};
// //////////////////////////////////////////////////////////////////
let selectedPurpus = "";
architectural.onclick = () => {
  talkPop.style.display = "flex";
  selectedPurpus = "Architectural";
};
construction.onclick = () => {
  talkPop.style.display = "flex";
  selectedPurpus = "Construction";
};
interior.onclick = () => {
  talkPop.style.display = "flex";
  selectedPurpus = "Interior";
};
products.onclick = () => {
  // talkPop.style.display = "flex";
};

talkPop.onclick = () => {
  talkPop.style.display = "none";
};
talkPopClose.onclick = () => {
  talkPop.style.display = "none";
};
talkPopBody.onclick = (e) => {
  e.stopPropagation();
};

contactForm.onsubmit = (e) => {
  e.preventDefault();
  const name = e.target.f1_name.value;
  const phone = e.target.f1_phone.value;
  const email = e.target.f1_email.value;
  const note = e.target.f1_note.value;
  const date = Date().toString();

  if (name && phone) {
    alert(`Thank you ${name}, we will contact you soon!`);
    contactPop.style.display = "none";
    contactForm.reset();
    fetch("https://my-mailer-taupe.vercel.app/voc/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `Name: ${name}<br/>Phone: ${phone}<br/>Email: ${email}<br/>Note: ${note}<br/>${date}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server responded with:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    alert("Please fill in all required fields.");
  }
};

talkForm.onsubmit = (e) => {
  e.preventDefault();
  const name = e.target.f2_name.value;
  const phone = e.target.f2_phone.value;
  const email = e.target.f2_email.value;
  const date = Date().toString();

  if (name && phone) {
    alert(`Thank you ${name}, we will contact you soon for ${selectedPurpus}!`);
    talkPop.style.display = "none";
    talkForm.reset();
    fetch("https://my-mailer-taupe.vercel.app/voc/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `Name: ${name}<br/>Phone: ${phone}<br/>Email: ${email}<br/>Purpose: ${selectedPurpus}<br/>${date}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server responded with:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    alert("Please fill in all required fields.");
  }
};

// //////////////////////////////////////////////////////////////////
bAaC.onclick = () => {
  contactPop.style.display = "flex";
};
contactPop.onclick = () => {
  contactPop.style.display = "none";
};
contactPopBody.onclick = (e) => {
  e.stopPropagation();
};
contactPopClose.onclick = () => {
  contactPop.style.display = "none";
};

// //////////////////////////////////////////////////////////////////

wa.onclick = () => {
  window.open("https://wa.me/919496590017?text=Hi", "_blank");
};
insta.onclick = () => {
  window.open("https://instagram.com/voc_india", "_blank");
};
fb.onclick = () => {
  window.open(
    "https://www.facebook.com/share/175BAMMF8p/?mibextid=wwXIfr",
    "_blank"
  );
};
mail.onclick = () => {
  alert("mail");
};
