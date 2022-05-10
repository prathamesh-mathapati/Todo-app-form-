"use script";

// const Submit = document.getElementById("submit");
const nameInput = document.getElementById("SSN");
const roll = document.getElementById("number");
const name = document.getElementById("fname");
const submitBtn = document.querySelector(".submit");
const Data = document.querySelector(".data");
const storage = document.querySelector(".Storage");

let AllData = [];
let AllDatalocal = [];
let AllDatasectoin = [];
let AllDatac = [];
const htmlData = (user) => `<div class="colour  h p-5" >
        <span class="d-flex ">

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
        <button class="btn btn-outline-primary" type="button">Edit</button>
        <button class="btn btn-outline-danger" id="del" type="button""
        >
          Delete
        </button>
      </form> 
      </div>

     `;
let localDatastring1 = localStorage.getItem("data");
var arrForlocaldata = [];

let sectionData = JSON.parse(sessionStorage.getItem("data"));
// arrForlocaldata.push(JSON.parse(localDatastring1));

// console.log(JSON.parse(sectionData), "    ssss");
// console.log(sectionData);
Data.classList.remove("hid");

// Data.innerHTML = ayy1.map(htmlData);
// Data.classList.remove("hid");

// arrForlocaldata.push(JSON.parse(sectionData));

try {
  // if (localDatastring1.name === " " || localDatastring1.name === null) {
  //   console.log("as");
  // } else {

  arrForlocaldata.push(JSON.parse(localDatastring1));
  arrForlocaldata.push(sectionData);
  // console.log(arrForlocaldata.flat(Infinity));
  let ayy1 = arrForlocaldata.flat(Infinity);
  if (ayy1.includes(null)) delete ayy1[ayy1.indexOf(null)];
  console.log(ayy1);
  Data.innerHTML = ayy1.map(htmlData);

  // }
} catch {
  location.reload();

  console.log(98);
}
var AllSudentRollNo = [];

let a = [];
submitBtn.addEventListener("click", () => {
  // Data.innerHTML = ayy1.map(htmlData);

  if (!roll.value || !name.value || !nameInput) {
    alert("Please fill full from");
  }
  let oneDta = {};

  // function w1

  if (a.includes(roll.value)) {
    alert("This roll no is allredy exits, try another roll no");
  } else {
    // for (i of ayy1) {
    //   AllData.push(i);
    // }
    if (storage.selectedOptions[0].innerText === "Local Storage") {
      oneDta["name"] = name.value;
      oneDta["Subject"] = nameInput.value;
      oneDta["Roll_no"] = roll.value;
      oneDta["storage"] = storage.selectedOptions[0].innerText;
      AllDatalocal.push(oneDta);
      AllData.push(oneDta);

      console.log("loc");
      // AllData = [];
    } else if (storage.selectedOptions[0].innerText === "Session Storage") {
      oneDta["name"] = name.value;
      oneDta["Subject"] = nameInput.value;
      oneDta["Roll_no"] = roll.value;
      oneDta["storage"] = storage.selectedOptions[0].innerText;
      AllData.push(oneDta);

      AllDatasectoin.push(oneDta);
    }
    a.push(roll.value);
  }

  AllData.map((ele) => {
    console.log(ele);
    console.log(a.includes(ele.Roll_no));
    AllSudentRollNo.push(ele.Roll_no);

    if (ele.storage === "Local Storage") {
      console.log("local");
      window.localStorage.setItem("data", JSON.stringify(AllDatalocal));
      Data.innerHTML = AllData.map(htmlData);
      console.log(AllDatalocal, AllData, "local");

      Data.classList.remove("hid");
    } else if (ele.storage === "Session Storage") {
      console.log("section");
      window.sessionStorage.setItem("data", JSON.stringify(AllDatasectoin));
      // AllData.push(oneDta);
      Data.innerHTML = AllData.map(htmlData);
      Data.classList.remove("hid");
      console.log(AllDatasectoin, AllData, "section");
    } else {
      document.cookie = JSON.stringify(AllData);
    }
  });
  location.reload();
});
const deleteBtn = document.querySelector("#del");
