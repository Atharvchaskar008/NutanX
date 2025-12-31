import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD72XXBx-Hrs17eHav_PZQlIwnQMU1d0zE",
    authDomain: "login-form-f95eb.firebaseapp.com",
    projectId: "login-form-f95eb",
    storageBucket: "login-form-f95eb.firebasestorage.app",
    messagingSenderId: "310597953102",
    appId: "1:310597953102:web:ec9bd2181e1bc35a55c51f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 1. AUTH OBSERVER & DATA FETCHING
onAuthStateChanged(auth, async (user) => {
    if (user) {
        // User is signed in, fetch their data from Firestore
        console.log("User logged in:", user.uid);
        
        try {
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const userData = docSnap.data();
                
                // If you have an element to show the name (e.g., <span id="userName"></span>)
                // You can uncomment the line below to personalize the UI:
                // document.getElementById('navbarUserName').innerText = `Welcome, ${userData.firstName}`;
                
                console.log("Welcome,", userData.firstName);
            } else {
                console.log("No user profile found in Firestore.");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    } else {
        // No user is signed in, redirect to login page
        window.location.href = 'landing.html';
    }
});

// 2. LOGOUT LOGIC
const logoutButton = document.getElementById('logout');
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        signOut(auth).then(() => {
            // Clear local storage tracking
            localStorage.removeItem('loggedInUserId');
            // Move user back to login screen
            window.location.href = '';
        }).catch((error) => {
            console.error('Logout Error:', error);
            alert("Error logging out. Please try again.");
        });
    });
}