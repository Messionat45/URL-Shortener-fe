const urlform = document.getElementById("urlform");
const beUrl = "https://url-shortener-lpie.onrender.com";

urlform.addEventListener("submit", async (event) => {
  event.preventDefault();

  const url = document.getElementById("url").value.trim();
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
      shorturlDiv.innerHTML = `
      <div class="bg-white shadow-md rounded-lg p-4 my-4 mx-auto w-[90%] max-w-3xl">
      <h4 class="text-lg font-semibold text-green-700 mb-2"> Generated Short URL 😁 </h4>
      <p class="text-sm text-gray-700"> Short URL: <strong class="text-indigo-600"><a href="${data.shorturl}">${data.shorturl}</a></strong></p>
      </div>`;
      document.getElementById("url").value = "";
    } else {
      alert("something went worng" + data.message);
    }
  } catch (error) {
    console.log(error.message);
    alert("some issiue");
  }
});
