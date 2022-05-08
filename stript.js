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
          <p class="roll">${user.storeg}</p></span
        >

         <form class="">
        <button class="btn btn-outline-primary" type="button">Edite</button>
        <button class="btn btn-outline-danger del" type="button">
          Delete
        </button>
      </form> 
      </div>

     `;
// console.log(roll.value);
submitBtn.addEventListener("click", () => {
  let oneDta = {};

  oneDta["name"] = name.value;
  oneDta["Subject"] = nameInput.value;
  oneDta["Roll_no"] = roll.value;
  oneDta["storeg"] = storage.selectedOptions[0].innerText;

  // AllData.push(JSON.stringify(oneDta));
  AllData.push(oneDta);

  AllData.map((ele) => {
    if (ele.storage === "Local Storage") {
      if (!ele.Roll_no) {
        alert("Please fill full from");
      } else {
        let localDatastring1 = localStorage.getItem("data");
        console.log(localDatastring1);
        window.localStorage.setItem("data", JSON.stringify(AllData));
        let localDatastring = localStorage.getItem("data");
        console.log(localDatastring);
        let localData = JSON.parse(localDatastring);
        console.log(typeof localData);
        Data.innerHTML = AllData.map(htmlData);
        Data.classList.remove("hid");
      }
    } else {
      let localDatastring1 = sessionStorage.getItem("data");
      console.log(localDatastring1);
      window.sessionStorage.setItem("data", JSON.stringify(AllData));
      let localDatastring = sessionStorage.getItem("data");
      console.log(localDatastring);
      let localData = JSON.parse(localDatastring);
      console.log(typeof localData);
      Data.innerHTML = AllData.map(htmlData);
      Data.classList.remove("hid");
    }
  });
});
// const deleteBtn = document.querySelector(".del");
// console.log(del);

// deleteBtn.addEventListener("click", () => {
//   Data.classList.add("hid");
// });
