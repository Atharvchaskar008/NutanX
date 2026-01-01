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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const welcomeHeading = document.getElementById('welcomeUser');
        try {
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists() && welcomeHeading) {
                welcomeHeading.innerText = `Welcome, ${docSnap.data().firstName}!`;
            }
        } catch (error) {
            console.error("Firebase Error:", error);
        }
    } else {
        // Redirect to signin folder peer
        window.location.replace("../signin/index.html");
    }
});

const logoutButton = document.getElementById('logout');
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        signOut(auth).then(() => {
            localStorage.removeItem('loggedInUserId');
            window.location.replace("../index.html");
        }).catch((error) => {
            console.error('Logout failed:', error);
        });
    });
}
