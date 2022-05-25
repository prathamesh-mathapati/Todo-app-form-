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


const editDaata = (data) => {
  // new code
  const name1 = document.getElementById("name");
  const roll1 = document.getElementById("roll");
  const subject2 = document.getElementById("subject");
  const storage = document.querySelector(".storage");
  const roll_no = data.dataset.rollno;
  const deleteObj = AllData.find((item) => item.Roll_no === roll_no);
  const deleteOb = AllData.find((item) => item.Roll_no === roll_no);
  let oneDta = {};
  let AddData = () => {
    oneDta["name"] = name1.value;
    oneDta["Subject"] = subject2.value;
    oneDta["Roll_no"] = roll1.value;
    oneDta["storage"] = storage.value;

  };

  //show value in edit butten

  name1.value = deleteOb.name;
  subject2.value = deleteOb.Subject;
  roll1.value = deleteOb.Roll_no;
  storage.value = deleteOb.storage


  // save page
  editCard.classList.remove("hidden");
  editCard.classList.add("overlay");



  saveBtn.addEventListener("click", () => {


    if (!roll1.value || !name1.value || !storage.value) {
      alert('Please fill full from')
    } else {
      editCard.classList.add("hidden");
      editCard.classList.remove("overlay");


      if (deleteObj.storage === "Local Storage") {
        const newLocalSorage = [...localDatastring1];
        localStorage.removeItem("data");
        const newArr = newLocalSorage.filter((item) => item.Roll_no !== roll_no);
        window.localStorage.setItem("data", JSON.stringify(newArr));
        AllData = AllData.filter((item) => item.Roll_no !== roll_no);
        // Data.innerHTML = AllData.map(htmlData);
      } else if (deleteObj.storage === "Session Storage") {
        const newLocalSorage = [...sectionData];
        // console.log(newLocalSorage);
        sessionStorage.removeItem("data");
        const newArr = newLocalSorage.filter((item) => item.Roll_no !== roll_no);
        window.sessionStorage.setItem("data", JSON.stringify(newArr));
        AllData = AllData.filter((item) => item.Roll_no !== roll_no);
        // Data.innerHTML = AllData.map(htmlData);
      } else if (deleteObj.storage === "Cookie Storage") {
        const newLocalSorage = [...AllDatac];
        // console.log(newLocalSorage);
        deleteAllCookies()

        const newArr = newLocalSorage.filter((item) => item.Roll_no !== roll_no);
        document.cookie = JSON.stringify(newArr);
        AllData = AllData.filter((item) => item.Roll_no !== roll_no);
        // Data.innerHTML = AllData.map(htmlData);
      }










      if (storage.value === "Local Storage") {
        AddData()
        const newLocalSorage = [...localDatastring1];
        const newArr = newLocalSorage.filter((item) => item.Roll_no !== roll_no);
        newArr.push(oneDta)
        AllData.push(oneDta)

        window.localStorage.setItem("data", JSON.stringify(newArr));

        console.log(newLocalSorage, 'werhjk');
        // AllData = AllData.filter((item) => item.Roll_no !== roll_no);


        Data.innerHTML = AllData.map(htmlData);



      } else if (storage.value === "Session Storage") {
        AddData()
        const newsection = [...sectionData];
        const newArr = newsection.filter((item) => item.Roll_no !== roll_no);
        newArr.push(oneDta)
        AllData.push(oneDta)

        window.sessionStorage.setItem("data", JSON.stringify(newArr));
        // AllData = AllData.filter((item) => item.Roll_no !== roll_no);


        Data.innerHTML = AllData.map(htmlData);




      } else if (storage.value === "Cookie Storage") {
        AddData()

        const newCookie = [...AllDatac];
        const newArr = newCookie.filter((item) => item.Roll_no !== roll_no);
        newArr.push(oneDta)
        AllData.push(oneDta)
        console.log(AllData);
        document.cookie = JSON.stringify(newArr);

        // AllData = AllData.filter((item) => item.Roll_no !== roll_no);
        console.log(oneDta);


        Data.innerHTML = AllData.map(htmlData);



      }

    }
  })











  //old code

  // const roll_no = data.dataset.rollno;
  // editCard.classList.remove("hidden");
  // editCard.classList.add("overlay");
  // const name1 = document.getElementById("name");
  // const roll1 = document.getElementById("roll");
  // const subject2 = document.getElementById("subject");
  // const storage = document.querySelector(".storage");
  // const roll_no = data.dataset.rollno;

  // editCard.classList.remove("hidden");
  // editCard.classList.add("overlay");
  // const name1 = document.getElementById("name");
  // const roll1 = document.getElementById("roll");
  // const subject2 = document.getElementById("subject");
  // const storage = document.querySelector(".storage");
  // let sumroll = JSON.parse(sessionStorage.getItem("Allroll"));

  // let oneDta = {};
  // let AddData = () => {
  //   oneDta["name"] = name1.value;
  //   oneDta["Subject"] = subject2.value;
  //   oneDta["Roll_no"] = roll1.value;
  //   oneDta["storage"] = storage.value;

  // };
  // const deleteOb = AllData.find((item) => item.Roll_no === roll_no);
  // name1.value = deleteOb.name;
  // subject2.value = deleteOb.Subject;
  // roll1.value = deleteOb.Roll_no;
  // storage.value = deleteOb.storage

  // if (sumroll.includes(roll1.value)) {

  //   alert("This roll no is allredy exits, try another roll no");
  // } else {
  //   sumroll.push(roll1.value)


  // }

  // saveBtn.addEventListener("click", () => {
  //   editCard.classList.add("hidden");
  //   editCard.classList.remove("overlay");

  //   console.log(roll1.value);

  //   const deleteObj = AllData.find((item) => item.Roll_no === roll_no);
  //   if (!roll1.value || !name1 || !storage) {
  //     alert('Please fill full from')
  //   } else {



  //     if (deleteObj.storage === "Local Storage") {
  //       AddData();
  //       const newLocalSorage = [...localDatastring1];
  //       localStorage.removeItem("data");
  //       const newArr = newLocalSorage.filter((item) => item.Roll_no !== roll_no);
  //       newArr.push(oneDta);
  //       const localDatastring2 = newArr.filter((item) => item.storage == 'Local Storage')
  //       console.log(localDatastring2);

  //       window.localStorage.setItem("data", JSON.stringify(newArr));
  //       AllData = AllData.filter((item) => item.Roll_no !== roll_no);
  //       AllData.push(oneDta)

  //       Data.innerHTML = AllData.map(htmlData);
  //       chake()
  //     } else if (deleteObj.storage === "Session Storage") {
  //       AddData();

  //       const newLocalSorage = [...sectionData];
  //       console.log(newLocalSorage); Session
  //       sessionStorage.removeItem("data");
  //       const newArr = newLocalSorage.filter((item) => item.Roll_no !== roll_no);
  //       newArr.push(oneDta);

  //       window.sessionStorage.setItem("data", JSON.stringify(newArr));
  //       AllData = AllData.filter((item) => item.Roll_no !== roll_no);
  //       AllData.push(oneDta)

  //       Data.innerHTML = AllData.map(htmlData);
  //     } else if (deleteObj.storage === "Cookie Storage") {
  //       AddData();

  //       const newLocalSorage = [...AllDatac];
  //       deleteAllCookies()
  //       const newArr = newLocalSorage.filter((item) => item.Roll_no !== roll_no);
  //       newArr.push(oneDta);

  //       window.sessionStorage.setItem("data", JSON.stringify(newArr));
  //       AllData = AllData.filter((item) => item.Roll_no !== roll_no);
  //       AllData.push(oneDta)

  //       Data.innerHTML = AllData.map(htmlData);
  //     }
  //   }
  // });
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


let a = [];
submitBtn.addEventListener("click", () => {
  location.reload()
  if (!roll.value || !name.value || !nameInput) {
    alert("Please fill full from");
  }
  let oneDta = {};
  let AddData = () => {
    oneDta["name"] = name.value;
    oneDta["Subject"] = nameInput.value;
    oneDta["Roll_no"] = roll.value;
    oneDta["storage"] = storage.value;
  };

  if (a.includes(roll.value)) {
    alert("This roll no is allredy exits, try another roll no");
  } else {
    if (storage.value === "Local Storage") {
      AddData();
      AllDatalocal.push(oneDta);
      AllData.push(oneDta);
      // console.log(a, "1999");
      window.localStorage.setItem("data", JSON.stringify(AllDatalocal));
      // console.log(AllDatalocal, "local");
      Data.innerHTML = AllData.map(htmlData);

      // }
    }
    if (storage.value === "Session Storage") {
      AddData();
      AllDatasectoin.push(oneDta);
      AllData.push(oneDta);

      window.sessionStorage.setItem("data", JSON.stringify(AllDatasectoin));
      // console.log(AllDatasectoin, "section");
      Data.innerHTML = AllData.map(htmlData);
    }

    if (storage.value === "Cookie Storage") {
      AddData();
      AllData.push(oneDta);

      AllDatac.push(oneDta);
      document.cookie = JSON.stringify(AllDatac);
      Data.innerHTML = AllData.map(htmlData);
    }
    a.push(roll.value);
  }
  AllSudentRollNo.push(oneDta.Roll_no);
  window.sectionData.setItem("Allroll", JSON.stringify(AllSudentRollNo));
});
