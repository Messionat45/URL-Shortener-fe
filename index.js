const signupform = document.getElementById("signupform");
const beUrl = "https://url-shortener-lpie.onrender.com";

signupform.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  // console.log(username, password);
  if (!username || !password) {
    alert("both pass and email needed");
    return;
  }
  try {
    const response = await fetch(`${beUrl}/signup`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Signup succesfully");
      window.location.href = "./login.html";
    } else alert(data.message);
  } catch (error) {
    console.log(error);
    alert("some issue sendind data");
  }
});
