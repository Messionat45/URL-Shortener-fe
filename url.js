const urlform = document.getElementById("urlform");
const beUrl = process.env.BE_URL || process.env.LOCAL_BE_URL;

urlform.addEventListener("submit", async (event) => {
  event.preventDefault();

  const url = document.getElementById("url").value;
  console.log(url);
  if (!url) {
    alert("URL field cannot be empty");
    return;
  }

  try {
    const response = await fetch(`${beUrl}` / url``, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ url }),
      credentials: "include",
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      alert(data.message);
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.log(error.message);
    alert("some issiue");
  }
});
