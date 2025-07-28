const loginform = document.getElementById("loginform");
const beUrl = "https://url-shortener-lpie.onrender.com";

loginform.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Both Password and Email required");
    return;
  }
  try {
    const response = await fetch(`${beUrl}/login`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });

    const data = await response.json();

    console.log(data);
    if (response.ok) {
      alert("Login succesfully");
      window.location.href = "./url.html";
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.log(error);
    alert("some issue sendind data");
  }
});
