const maskPassword = (pass) => "•".repeat(8); // Classic vault look

const copyText = (txt) => {
    navigator.clipboard.writeText(txt).then(() => {
        const alertBox = document.getElementById("alert");
        alertBox.style.display = "inline-block";
        setTimeout(() => { alertBox.style.display = "none"; }, 2000);
    });
};

const deletePassword = (index) => {
    let data = JSON.parse(localStorage.getItem("passwords") || "[]");
    data.splice(index, 1);
    localStorage.setItem("passwords", JSON.stringify(data));
    showPasswords();
};

const showPasswords = () => {
    const table = document.getElementById("passwordTable");
    const arr = JSON.parse(localStorage.getItem("passwords") || "[]");

    if (arr.length === 0) {
        table.innerHTML = `<tr><td style="text-align:center; color: #6B7280;">Vault is empty.</td></tr>`;
        return;
    }

    let html = `<tr><th>Website</th><th>Username</th><th>Password</th><th>Action</th></tr>`;
    arr.forEach((element, index) => {
        html += `
        <tr>
            <td>${element.website} <span class="copy-icon" onclick="copyText('${element.website}')">📋</span></td>
            <td>${element.username} <span class="copy-icon" onclick="copyText('${element.username}')">📋</span></td>
            <td>${maskPassword(element.password)} <span class="copy-icon" onclick="copyText('${element.password}')">📋</span></td>
            <td><button class="btn-delete" onclick="deletePassword(${index})">Delete</button></td>
        </tr>`;
    });
    table.innerHTML = html;
};

document.getElementById("passwordForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const website = document.getElementById("website");
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    let passwords = JSON.parse(localStorage.getItem("passwords") || "[]");
    passwords.push({ website: website.value, username: username.value, password: password.value });
    localStorage.setItem("passwords", JSON.stringify(passwords));

    website.value = username.value = password.value = "";
    showPasswords();
});

showPasswords();