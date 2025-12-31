import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

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
const provider = new GoogleAuthProvider();

// IMPORTANT: Matches the .google-btn class in HTML
document.querySelectorAll('.google-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const nameParts = user.displayName ? user.displayName.split(" ") : ["User"];
            const firstName = nameParts[0];
            const lastName = nameParts.slice(1).join(" ") || "";

            await setDoc(doc(db, "users", user.uid), {
                firstName: firstName,
                lastName: lastName,
                email: user.email,
                lastLogin: new Date().toLocaleString()
            }, { merge: true });

            localStorage.setItem('loggedInUserId', user.uid);
            window.location.href = 'https://landing-snowy-nu.vercel.app/';

        } catch (error) {
            if (error.code === 'auth/popup-closed-by-user') {
                console.log("Popup closed by user - no action taken.");
            } else {
                console.error("Auth Error:", error);
                alert("Login failed: " + error.message);
            }
        }
    });
});