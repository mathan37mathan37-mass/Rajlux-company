import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { 
getFirestore,
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyD190aRyT2Q8u2q8vBOIXQDvy_ObAXTuWI",
  authDomain: "company-227f9.firebaseapp.com",
  projectId: "company-227f9",
  storageBucket: "company-227f9.firebasestorage.app",
  messagingSenderId: "486645620594",
  appId: "1:486645620594:web:9a1d6028d8f142b68847eb",
  measurementId: "G-HEFR2HR0BM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


window.sendMessage = async function(){

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const service = document.getElementById("service").value;
const message = document.getElementById("message").value.trim();

if(name === "" || email === "" || phone === "" || service === "" || message === ""){
alert("Please fill all fields");
return;
}

const phonePattern = /^[0-9]{10}$/;

if(!phonePattern.test(phone)){
alert("Phone number must be 10 digits");
return;
}

await addDoc(collection(db,"messages"),{
name:name,
email:email,
phone:phone,
service:service,
message:message,
created:new Date()
});

alert("Message Sent Successfully!");
location.reload();
document.getElementById("contactForm").reset();

}