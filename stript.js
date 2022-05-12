"use script";

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
let AllData1 = [];
let relode = () => {
  console.log(0);
  location.reload();
};
const htmlData = (user) => `<div class="colour hover1 h p-5" >
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
let localDatastring1 = JSON.parse(localStorage.getItem("data"));
var arrForlocaldata = [];
let sectionData = JSON.parse(sessionStorage.getItem("data"));

console.log(localDatastring1);
console.log(sectionData);

var AllSudentRollNo = [];
let l = 0;
let s = 0;

try {
  if (localDatastring1 !== null) {
    l = localDatastring1;
    for (i of localDatastring1) {
      AllData1.push(i);
    }
  }
  if (sectionData !== null) {
    s = sectionData;
    for (i of sectionData) {
      AllData1.push(i);
    }
  }
  Data.innerHTML = AllData1.map(htmlData);

  // if (localDatastring1.name === " " || localDatastring1.name === null) {
  //   console.log("as");
  // } else {
  //   arrForlocaldata.push(localDatastring1);

  // let ayy1 = [];
  // for (i of arrForlocaldata.flat(Infinity)) {
  //   if (i.storage === "Local Storage") ayy1.push(i);
  // }
  console.log(l, s);
  console.log(AllData1, "all");

  // }
} catch (err) {
  console.log(err);
}

let a = [];
submitBtn.addEventListener("click", () => {
  relode();
  if (!roll.value || !name.value || !nameInput) {
    alert("Please fill full from");
  }
  let oneDta = {};

  if (a.includes(roll.value)) {
    alert("This roll no is allredy exits, try another roll no");
  } else {
    if (storage.selectedOptions[0].innerText === "Local Storage") {
      oneDta["name"] = name.value;
      oneDta["Subject"] = nameInput.value;
      oneDta["Roll_no"] = roll.value;
      oneDta["storage"] = storage.selectedOptions[0].innerText;
      AllDatalocal.push(oneDta);
      let a = [...AllDatalocal, ...l];
      console.log(a, "1999");
      window.localStorage.setItem("data", JSON.stringify(a));
      console.log(AllDatalocal, "local");
      // }
    } else if (storage.selectedOptions[0].innerText === "Session Storage") {
      oneDta["name"] = name.value;
      oneDta["Subject"] = nameInput.value;
      oneDta["Roll_no"] = roll.value;
      oneDta["storage"] = storage.selectedOptions[0].innerText;
      AllDatasectoin.push(oneDta);
      window.sessionStorage.setItem("data", JSON.stringify(AllDatasectoin));
      console.log(AllDatasectoin, "section");
    }
    a.push(roll.value);
  }

  // console.log(a);
  AllData.map((ele) => {
    console.log(a.includes(ele.Roll_no));
    // console.log(ele, "thats called ele");
    AllSudentRollNo.push(ele.Roll_no);

    if (ele.storage === "Local Storage") {
      Data.innerHTML = AllDatalocal.map(htmlData);
      console.log("local");
      Data.classList.remove("hid");
    } else if (ele.storage === "Session Storage") {
      Data.innerHTML = AllDatasectoin.map(htmlData);

      console.log("section");
      Data.classList.remove("hid");
    } else {
      document.cookie = JSON.stringify(AllData);
    }
  });
});

const deleteBtn = document.querySelector("#del");
