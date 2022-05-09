"use script";

// const Submit = document.getElementById("submit");
const nameInput = document.getElementById("SSN");
const roll = document.getElementById("number");
const name = document.getElementById("fname");
const submitBtn = document.querySelector(".submit");
const Data = document.querySelector(".data");
const storage = document.querySelector(".Storage");

const AllData = [];
const htmlData = (user) => `<div>
        <span class="d-flex">

          Name:-
          <p class="name">${user.name}</p></span
        >

        <span class="d-flex">
          Subject:-
          <p class="subject">${user.Subject}</p></span
        >

        <span class="d-flex">
          Roll no:-
          <p class="roll">${user.Roll_no}</p></span
        >


        <span class="d-flex">
          Stroge:-
          <p class="roll">${user.storage}</p></span
        >

         <form class="">
        <button class="btn btn-outline-primary" type="button">Edite</button>
        <button class="btn btn-outline-danger del" type="button">
          Delete
        </button>
      </form> 
      </div>

     `;
let localDatastring1 = localStorage.getItem("data");
var arrForlocaldata = [];

try {
  if (localDatastring1.name === " ") {
    console.log("as");
  } else {
    arrForlocaldata.push(JSON.parse(localDatastring1));
    let ayy1 = [];
    for (i of arrForlocaldata.flat(Infinity)) {
      if (i.storage === "Local Storage") ayy1.push(i);
    }
    console.log(ayy1);
    Data.innerHTML = ayy1.map(htmlData);
    Data.classList.remove("hid");
  }
} catch {
  console.log(98);
}

submitBtn.addEventListener("click", () => {
  let oneDta = {};

  oneDta["name"] = name.value;
  oneDta["Subject"] = nameInput.value;
  oneDta["Roll_no"] = roll.value;
  oneDta["storage"] = storage.selectedOptions[0].innerText;

  // AllData.push(JSON.stringify(oneDta));
  AllData.push(oneDta);

  AllData.map((ele) => {
    console.log(ele.storage);
    if (!ele.Roll_no) {
      alert("Please fill full from");
    } else {
      if (ele.storage === "Session Storage") {
        console.log("section");
        window.sessionStorage.setItem("data", JSON.stringify(AllData));
        Data.innerHTML = AllData.map(htmlData);
        Data.classList.remove("hid");
      } else if (ele.storage === "Local Storage") {
        console.log("local");
        window.localStorage.setItem("data", JSON.stringify(AllData));
        Data.innerHTML = AllData.map(htmlData);
        Data.classList.remove("hid");
      } else {
        document.cookie = JSON.stringify(AllData);
      }
    }
  });
});
// const deleteBtn = document.querySelector(".del");
// console.log(del);

// deleteBtn.addEventListener("click", () => {
//   Data.classList.add("hid");
// });
