const username = location.pathname.replace("/", "") || "annowy";

fetch("users.json")
  .then(r => r.json())
  .then(data => {
    const user = data[username];
    if (!user) return document.body.innerHTML = "User not found";

    document.getElementById("avatar").src = user.avatar;
    document.getElementById("name").innerText = user.name;

    user.links.forEach(l => {
      const a = document.createElement("a");
      a.href = l.url;
      a.innerText = l.title;
      document.getElementById("links").appendChild(a);
    });
  });
