"use script";

// const Submit = document.getElementById("submit");
const nameInput = document.getElementById("SSN");
const roll = document.getElementById("number");
const name = document.getElementById("fname");
const submitBtn = document.querySelector(".submit");
const Data = document.querySelector(".data");
console.log(Data);
const AllData = [];
const oneDta = {};
console.log(roll.value);

submitBtn.addEventListener("click", () => {
  oneDta["name"] = name.value;
  oneDta["Subject"] = nameInput.value;
  oneDta["Roll_no"] = roll.value;
  AllData.push(oneDta);
  AllData.map((ele) => {
    if (!ele.Roll_no) {
      alert("fill the from");
    } else {
      Data.innerHTML = AllData.map(
        (user) => `<div>
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

         <form class="">
        <button class="btn btn-outline-primary" type="button">Edite</button>
        <button class="btn btn-outline-danger del" type="button">
          Delete
        </button>
      </form> 
      </div>

     `
      );
      // Data.classList.remove("hid");
    }
  });
});
// const deleteBtn = document.querySelector(".del");
// console.log(del);

// deleteBtn.addEventListener("click", () => {
//   Data.classList.add("hid");
// });
