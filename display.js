const beUrl = "https://url-shortener-lpie.onrender.com";

const displayUrls = document.getElementById("displayUrls");

window.onload = async () => {
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
};

const showUrls = (urls) => {
  const displayUrlsDiv = document.getElementById("displayUrls");

  displayUrlsDiv.innerHTML = "";

  if (urls.length === 0) {
    displayUrlsDiv.innerHTML = "<p> NO URL's Present";
    return;
  }

  urls.forEach((urlObject) => {
    const longUrl = urlObject.longurl;
    const shortUrl = `${beUrl}/s/${urlObject.shorturl}`;

    const block = `
    <div> 
    <table> 
      <thead> 
              <tr>
          <th>Long URL</th><th>Short URL</th>
              </tr>
      </thead>
    <tbody> 
      <tr> 
          <td><a href="${shortUrl}" >${shortUrl}</a></td>
          <td><a href="${longUrl}" >${longUrl}</a></td>
     </tr>
    </tbody>
    </table>
</div>
    `;

    displayUrlsDiv.innerHTML += block;
  });
};
