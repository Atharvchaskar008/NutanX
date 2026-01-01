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

document.querySelectorAll('.google-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const nameParts = user.displayName ? user.displayName.split(" ") : ["User"];

            await setDoc(doc(db, "users", user.uid), {
                firstName: nameParts[0],
                lastName: nameParts.slice(1).join(" ") || "",
                email: user.email,
                lastLogin: new Date().toISOString()
            }, { merge: true });

            localStorage.setItem('loggedInUserId', user.uid);
            
            // Redirect out of signin and into landing
            window.location.href = "../landing/landing.html";

        } catch (error) {
            console.error("Auth Error:", error);
        }
    });
});
