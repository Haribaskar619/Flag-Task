const sec = document.createElement("section");
document.body.append(sec)

const firstDiv = document.createElement("div");
document.body.append(firstDiv)

const flagUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
const flag = document.createElement("img");
flag.setAttribute("src", flagUrl);
firstDiv.append(flag);

const headContent = document.createElement("h2");
headContent.innerText = "Germany";
firstDiv.append(headContent);


const details = ["Population: 81,770,900", "Region: Europe", "Capital: Berlin"]

const thirdDiv = document.createElement("ul");
for (let det of details) {
    const ulLi = document.createElement('li');
    ulLi.innerText = det
    thirdDiv.append(ulLi);
    }
firstDiv.append(thirdDiv);