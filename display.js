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
    displayUrlsDiv.innerHTML =
      "<p class='text-center text-gray-600 text-xl'>No URLs present</p>";
    return;
  }

  urls.forEach((urlObject) => {
    console.log(urlObject);
    const longUrl = urlObject.longurl;
    const shortUrl = `${beUrl}/s/${urlObject.shorturl}`;

    const block = `
   
<div class="bg-white shadow-md rounded-lg p-4 my-4 mx-auto w-[90%] max-w-3xl">
    <div class=" flex flex-col   gap-2"  > 
    <p class="text-sm text-gray-700"> <strong class="text-indigo-600"> Short:</strong> <a href="${shortUrl}" target="_blank" rel="noopener noreferrer" >${shortUrl}</a></p>
    <p class="text-sm text-gray-700 break-all overflow-hidden"> <strong class="text-indigo-600"> Long:</strong> <a href="${longUrl}"  target="_blank" rel="noopener noreferrer" >${longUrl}</a></p>
    </div>
</div>
    `;

    displayUrlsDiv.innerHTML += block;
  });
};
