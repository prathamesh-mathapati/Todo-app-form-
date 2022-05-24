"use script";

var AllSudentRollNo = [];
var arrForlocaldata = [];
const nameInput = document.getElementById("SSN");
const roll = document.getElementById("number");
const name = document.getElementById("fname");
const submitBtn = document.querySelector(".submit");
const Data = document.querySelector(".data");
const storage = document.querySelector(".Storage");
let editCard = document.querySelector(".editCard");
let saveBtn = document.querySelector(".save");

let localDatastring1 = JSON.parse(localStorage.getItem("data"));
let sectionData = JSON.parse(sessionStorage.getItem("data"));
let cookieData = document.cookie;
let AllData = [];
let AllDatalocal = [];
let AllDatasectoin = [];
let AllDatac = [];
document.cookie = [];
let relode = () => {
  location.reload();
};
const deleteAllCookies = () => {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

const htmlData = (user) => `<div class="contain-hover">
<div class="colour hover1 h p-5" >
        <span class="d-flex ">
        Name:-
        <p class="name">${user.name}</p></span>
        
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
        <button class="btn btn-outline-primary" onclick="editDaata(this)" data-rollno='${user.Roll_no}' type="button">Edit</button>
        <button class="btn btn-outline-danger" onclick="DeleteData(this)" data-rollno="${user.Roll_no}" type="button""
        >
          Delete
        </button>
      </form> 
      </div>
      </div>
      
      `;
const editDaata = (data) => {
  const roll_no = data.dataset.rollno;
  editCard.classList.remove("hidden");
  editCard.classList.add("overlay");
  const name1 = document.getElementById("name");
  const roll1 = document.getElementById("roll");
  const subject2 = document.getElementById("subject");
  const storage = document.querySelector(".storage");

  let oneDta = {};
  let AddData = () => {
    oneDta["name"] = name1.value;
    oneDta["Subject"] = subject2.value;
    oneDta["Roll_no"] = roll1.value;
    oneDta["storage"] = storage.selectedOptions[0].innerText;
  };
  // console.log(oneDta);

  saveBtn.addEventListener("click", () => {
    console.log(roll1.value);
    editCard.classList.add("hidden");
    editCard.classList.remove("overlay");

    const deleteObj = AllData.find((item) => item.Roll_no === roll_no);
    // console.log(deleteObj);
    if (deleteObj.storage === "Local Storage") {
      AddData();
      const newLocalSorage = [...localDatastring1];
      localStorage.removeItem("data");
      const newArr = newLocalSorage.filter((item) => item.Roll_no !== roll_no);
      newArr.push(oneDta);
      window.localStorage.setItem("data", JSON.stringify(newArr));
      AllData = AllData.filter((item) => item.Roll_no !== roll_no);
      AllData.push(oneDta)

      Data.innerHTML = AllData.map(htmlData);
    } else if (deleteObj.storage === "Session Storage") {
      AddData();

      const newLocalSorage = [...sectionData];
      console.log(newLocalSorage);
      sessionStorage.removeItem("data");
      const newArr = newLocalSorage.filter((item) => item.Roll_no !== roll_no);
      console.log(oneDta);
      newArr.push(oneDta);
      console.log(newArr);

      window.sessionStorage.setItem("data", JSON.stringify(newArr));
      AllData = AllData.filter((item) => item.Roll_no !== roll_no);
      AllData.push(oneDta)

      Data.innerHTML = AllData.map(htmlData);
    } else if (deleteObj.storage === "Cookie Storage") {
      AddData();

      const newLocalSorage = [...AllDatac];
      deleteAllCookies()
      const newArr = newLocalSorage.filter((item) => item.Roll_no !== roll_no);
      newArr.push(oneDta);

      window.sessionStorage.setItem("data", JSON.stringify(newArr));
      AllData = AllData.filter((item) => item.Roll_no !== roll_no);
      AllData.push(oneDta)

      Data.innerHTML = AllData.map(htmlData);
    }
  });
};


const DeleteData = (data) => {
  const roll_no = data.dataset.rollno;
  const deleteObj = AllData.find((item) => item.Roll_no === roll_no);
  if (deleteObj.storage === "Local Storage") {
    const newLocalSorage = [...localDatastring1];
    localStorage.removeItem("data");
    const newArr = newLocalSorage.filter((item) => item.Roll_no !== roll_no);
    window.localStorage.setItem("data", JSON.stringify(newArr));
    AllData = AllData.filter((item) => item.Roll_no !== roll_no);
    Data.innerHTML = AllData.map(htmlData);
  } else if (deleteObj.storage === "Session Storage") {
    const newLocalSorage = [...sectionData];
    console.log(newLocalSorage);
    sessionStorage.removeItem("data");
    const newArr = newLocalSorage.filter((item) => item.Roll_no !== roll_no);
    window.sessionStorage.setItem("data", JSON.stringify(newArr));
    AllData = AllData.filter((item) => item.Roll_no !== roll_no);
    Data.innerHTML = AllData.map(htmlData);
  } else if (deleteObj.storage === "Cookie Storage") {
    const newLocalSorage = [...AllDatac];
    console.log(newLocalSorage);
    deleteAllCookies()

    const newArr = newLocalSorage.filter((item) => item.Roll_no !== roll_no);
    document.cookie = JSON.stringify(newArr);
    AllData = AllData.filter((item) => item.Roll_no !== roll_no);
    Data.innerHTML = AllData.map(htmlData);
  }
};

try {
  if (localDatastring1 !== null) {
    for (i of localDatastring1) {
      AllData.push(i);
    }
    Data.innerHTML = AllData.map(htmlData);
  }
  if (sectionData !== null) {
    for (i of sectionData) {
      AllData.push(i);
    }
    Data.innerHTML = AllData.map(htmlData);
  }
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
  let AddData = () => {
    oneDta["name"] = name.value;
    oneDta["Subject"] = nameInput.value;
    oneDta["Roll_no"] = roll.value;
    oneDta["storage"] = storage.selectedOptions[0].innerText;
  };

  if (a.includes(roll.value)) {
    alert("This roll no is allredy exits, try another roll no");
  } else {
    if (storage.selectedOptions[0].innerText === "Local Storage") {
      AddData();
      AllDatalocal.push(oneDta);
      AllData.push(oneDta);
      console.log(a, "1999");
      window.localStorage.setItem("data", JSON.stringify(AllDatalocal));
      console.log(AllDatalocal, "local");
      Data.innerHTML = AllData.map(htmlData);

      // }
    }
    if (storage.selectedOptions[0].innerText === "Session Storage") {
      AddData();
      AllDatasectoin.push(oneDta);
      AllData.push(oneDta);

      window.sessionStorage.setItem("data", JSON.stringify(AllDatasectoin));
      console.log(AllDatasectoin, "section");
      Data.innerHTML = AllData.map(htmlData);
    }

    if (storage.selectedOptions[0].innerText === "Cookie Storage") {
      AddData();
      AllData.push(oneDta);

      AllDatac.push(oneDta);
      document.cookie = JSON.stringify(AllDatac);
      Data.innerHTML = AllData.map(htmlData);
    }
    a.push(roll.value);
  }
  AllSudentRollNo.push(oneDta.Roll_no);
});
