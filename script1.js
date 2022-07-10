// Initialize Firebase
var config = {
    apiKey: "AIzaSyBSb3YEPQpHV_DrMCHfvmcbmQNFWAnMiKk",
  authDomain: "cofeeshop-3fcaa.firebaseapp.com",
  databaseURL: "https://cofeeshop-3fcaa-default-rtdb.firebaseio.com",
  projectId: "cofeeshop-3fcaa",
  storageBucket: "cofeeshop-3fcaa.appspot.com",
  messagingSenderId: "281918333773",
  appId: "1:281918333773:web:e8fbad0fee011b52ed0d04",
  measurementId: "G-Q3X4VYR3YP"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message
    });
  }