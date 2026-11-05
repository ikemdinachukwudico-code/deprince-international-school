/* ==========================================
   DE PRINCE SCHOOL - FIREBASE CONFIG
   Replace with your own Firebase credentials
   ========================================== */

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGiky8Lf2AnwVYsvBpkBXWw5SlBeMw68o",
  authDomain: "school-id-7713a.firebaseapp.com",
  projectId: "school-id-7713a",
  storageBucket: "school-id-7713a.firebasestorage.app",
  messagingSenderId: "1059590246269",
  appId: "1:1059590246269:web:70604a61f64ff884ab8614"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const storage = firebase.storage();

// Collection references
const studentsRef = db.collection('students');
const teachersRef = db.collection('teachers');
const resultsRef = db.collection('results');
const billsRef = db.collection('bills');
const admissionsRef = db.collection('admissions');
const classRegistryRef = db.collection('classRegistry');

// Utility: Show alert
function showAlert(containerId, message, type) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = '<div class="alert alert-' + type + '">' + message + '</div>';
    setTimeout(() => container.innerHTML = '', 5000);
  }
}

// Utility: Get subjects for class
function getSubjectsForClass(cls) {
  if (!cls) return [];
  if (cls.includes('Nursery') || cls.includes('Creche') || cls.includes('Pre-Nursery')) {
    return ['English', 'Mathematics', 'Basic Science', 'Social Studies', 'Creative Arts', 'Rhymes'];
  } else if (cls.includes('Primary')) {
    return ['English', 'Mathematics', 'Basic Science', 'Social Studies', 'Civic Education', 'Agricultural Science', 'Home Economics', 'Creative Arts', 'ICT'];
  } else if (cls.includes('JSS')) {
    return ['English', 'Mathematics', 'Basic Science', 'Social Studies', 'Civic Education', 'Agricultural Science', 'Business Studies', 'Home Economics', 'Creative Arts', 'ICT', 'Basic Technology'];
  } else {
    return ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Government', 'Economics', 'Literature', 'Further Maths', 'ICT'];
  }
}

// Utility: Generate grade
function getGrade(total) {
  if (total >= 70) return 'A';
  if (total >= 60) return 'B';
  if (total >= 50) return 'C';
  if (total >= 45) return 'D';
  if (total >= 40) return 'E';
  return 'F';
}

// Utility: Format currency
function formatMoney(amount) {
  return '₦' + parseFloat(amount).toLocaleString();
}
