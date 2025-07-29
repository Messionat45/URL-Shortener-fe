const beUrl = "https://url-shortener-lpie.onrender.com";

const displayUrls = document.getElementById("displayUrls");

displayUrls.addEventListener("click", async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(`${beUrl}/url`, {
      method: "get",
      credentials: "include",
    });

    const data = await response.json();

    if (response.ok) {
      showUrls(data);
    } else {
      alert("Error" + data.message);
    }
  } catch (error) {
    console.log(error);
    alert("something went wrong");
  }
});

const showUrls = (urls) => {
  const displayUrlsDiv = document.getElementById("displayUrls");

  displayUrlsDiv.innerHTML = "";

  if (urls.length === 0) {
    displayUrlsDiv = "<p> NO URL's Present";
    return;
  }

  urls.forEach((urlObject) => {
    const longUrl = urlObject.longurl;
    const shortUrl = `${beUrl}/s/${urlObject.shorturl}`;

    const block = `
    <div> 
    <p> <strong> Short:</strong> <a href="${shortUrl}" >${shortUrl}</a></p>
    <p> <strong> Long:</strong> <a href="${longUrl}" >${longUrl}</a></p>
</div>
    `;

    displayUrlsDiv.innerHTML += block;
  });
};
