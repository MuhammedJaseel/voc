const logAccess = async () => {
  try {
    let logId = localStorage.getItem("logId");

    if (!logId) logId = "new";
    else if (logId?.length !== 24) logId = "new";

    const url = `https://api.anolabs.site/acces-status/${logId}/voc`;

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    localStorage.setItem("logId", data.id);
  } catch (err) {
    console.error("Error logging access:", err);
  }
};

logAccess();

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
joinTeam.onclick = () => {
  joinTeamPop.style.display = "flex";
  selectedPurpus = "Join Team";
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

joinTeamPop.onclick = () => {
  joinTeamPop.style.display = "none";
};
joinTeamPopClose.onclick = () => {
  joinTeamPop.style.display = "none";
};
joinTeamPopBody.onclick = (e) => {
  e.stopPropagation();
};

contactForm.onsubmit = (e) => {
  e.preventDefault();
  const name = e.target.f1_name.value;
  const phone = e.target.f1_phone.value;
  const email = e.target.f1_email.value;
  const msg = e.target.f1_note.value;
  // const date = Date().toString();

  if (name && phone) {
    alert(`Thank you ${name}, we will contact you soon!`);
    contactPop.style.display = "none";
    contactForm.reset();
    // fetch("https://my-mailer-taupe.vercel.app/voc/send-email", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     message: `Name: ${name}<br/>Phone: ${phone}<br/>Email: ${email}<br/>Note: ${note}<br/>${date}`,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => { })
    //   .catch((error) => { });
    fetch("https://api.vocindia.net/api/public/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email, msg }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Server responded with:", data);
      })
      .catch((error) => {
        // console.error("Error:", error);
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
  // const date = Date().toString();

  if (name && phone) {
    alert(`Thank you ${name}, we will contact you soon for ${selectedPurpus}!`);
    talkPop.style.display = "none";
    talkForm.reset();
    // fetch("https://my-mailer-taupe.vercel.app/voc/send-email", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     message: `Name: ${name}<br/>Phone: ${phone}<br/>Email: ${email}<br/>Purpose: ${selectedPurpus}<br/>${date}`,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => { })
    //   .catch((error) => { });
    fetch("https://api.vocindia.net/api/public/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email, msg: selectedPurpus }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Server responded with:", data);
      })
      .catch((error) => {
        // console.error("Error:", error);
      });
  } else {
    alert("Please fill in all required fields.");
  }
};

joinTeamForm.onsubmit = (e) => {
  e.preventDefault();
  const name = e.target.f3_name.value;
  const phone = e.target.f3_phone.value;
  const email = e.target.f3_email.value;
  // const date = Date().toString();

  if (name && phone) {
    alert(
      `Thank you ${name}, we will contact you soon for join our community!`,
    );
    joinTeamPop.style.display = "none";
    joinTeamForm.reset();
    // fetch("https://my-mailer-taupe.vercel.app/voc/send-email", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     message: `Name: ${name}<br/>Phone: ${phone}<br/>Email: ${email}<br/>Purpose: ${selectedPurpus}<br/>${date}`,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => { })
    //   .catch((error) => { });
    fetch("https://api.vocindia.net/api/public/join-team", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email, msg: "Join Community" }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Server responded with:", data);
      })
      .catch((error) => {
        // console.error("Error:", error);
      });
  } else {
    alert("Please fill in all required fields.");
  }
};

// //////////////////////////////////////////////////////////////////
upDownDrowerBtn.onclick = () => {
  upDownDrower.style.top = "0px";
  upDownDrowerClose.style.display = "block";
};
upDownDrowerClose.onclick = () => {
  upDownDrower.style.top = "-100%";
  upDownDrowerClose.style.display = "none";
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
    "_blank",
  );
};
