let container = document.querySelector(".container");

async function FetchData() {
  let response = await fetch("./data.json");
  let data = await response.json();

  data.forEach((element) => {
    let cardBox = document.createElement("div");
    cardBox.classList.add("cardBox");
    cardBox.innerHTML = `
    <a href="https://github.com/${element.github_username}" target="__blank">
        <div class="card">
            <div class="firstinfo"><img src="https://avatars.githubusercontent.com/${element.github_username}"/>
                <div class="profileinfo">
                <h2>${element.name}</h2>
                <p class="bio">github.com/${element.github_username}</p>
                </div>
            </div>
        </div>
    </a>
    `;
    container.appendChild(cardBox);
  });
}

FetchData();
