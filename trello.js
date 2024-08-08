function movingLab(event) {
  // console.log(event);
  // console.log(event.target);
  event.dataTransfer.setData("text", event.target.id);
  // console.log();
}
function onAll(event) {
  event.preventDefault();
}

function drop(event) {
  let text1 = event.dataTransfer.getData("text");
  event.target.append(document.getElementById(text1));
  data.forEach((element) => {
    if (element.id == text1) {
      element.parent = event.target.id;
    }
  });
  localStorage.setItem("newData", JSON.stringify(data));
}
let textVal = document.getElementById("textVal");
let button = document.getElementById("button");
let progress = document.getElementById("inProgress");
let id = 0;

let data = [];
if (localStorage.getItem("newData") != null) {
  data = JSON.parse(localStorage.getItem("newData"));
  id = data.length;
} else {
  date = [];
}
button.onclick = function () {
  id++;
  let newElement = document.createElement("p");
  newElement.innerHTML = textVal.value;
  newElement.setAttribute("draggable", true);
  newElement.setAttribute("ondragstart", "movingLab(event)");
  newElement.setAttribute("id", `${id}`);
  progress.appendChild(newElement);
  let newObject = {
    id: id,
    name: textVal.value,
    parent: "inProgress",
  };
  data.push(newObject);
  localStorage.setItem("newData", JSON.stringify(data));
  console.log(data);
};
function showDate() {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    let newElement = document.createElement("p");
    newElement.innerHTML = data[i].name;
    newElement.setAttribute("draggable", true);
    newElement.setAttribute("ondragstart", "movingLab(event)");
    newElement.setAttribute("id", `${data[i].id}`);
    document.getElementById(data[i].parent).append(newElement);
  }
}
showDate();
//------------task2-----
function initMap() {
  const myLatLng = { lat: 24.016941, lng: 32.8754151 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;
