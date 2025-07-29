const urlform = document.getElementById("urlform");
const beUrl = "https://url-shortener-lpie.onrender.com";

urlform.addEventListener("submit", async (event) => {
  event.preventDefault();

  const url = document.getElementById("url").value;
  const shorturlDiv = document.getElementById("shortUrl");

  if (!url) {
    alert("URL field cannot be empty");
    return;
  }

  try {
    const response = await fetch(`${beUrl}/url`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ url }),
      credentials: "include",
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      shorturlDiv.innerHTML = `<p>Shortened URL: <a href="${data.shorturl}">${data.shorturl}</a></p>`;
    } else {
      alert("something went worng");
    }
  } catch (error) {
    console.log(error.message);
    alert("some issiue");
  }
});
