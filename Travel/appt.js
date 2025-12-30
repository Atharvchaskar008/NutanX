lucide.createIcons();
let currentMode = 'train';

const transitData = {
    train: [
        { dest: "Pune / Pimpri", times: ["07:54 AM", "08:48 AM", "03:48 PM", "07:25 PM"], info: "PF 3 • Local Service" },
        { dest: "Shivajinagar", times: ["07:01 AM", "09:30 AM", "04:35 PM", "08:15 PM"], info: "PF 3 • Local Service" },
        { dest: "Lonavala", times: ["06:33 AM", "08:53 AM", "05:18 PM"], info: "PF 1 • Local Service" }
    ],
    bus: [
        { dest: "Nigdi (305)", times: ["06:15 AM", "08:30 AM", "12:10 PM", "05:45 PM"], info: "Stop: Samarth Vidyalay" },
        { dest: "Bhosari (343B)", times: ["07:45 AM", "09:50 AM", "04:20 PM"], info: "Stop: Samarth Vidyalay" },
        { dest: "Pune Station (368)", times: ["07:00 AM", "11:30 AM", "03:15 PM", "07:50 PM"], info: "Stop: Talegaon Station" },
        { dest: "Hinjewadi Ph-3 (311)", times: ["08:05 AM", "09:40 AM", "05:55 PM"], info: "Stop: Talegaon Station" }
    ]
};

// This must match your image filename exactly!
const stImageUrl = "st photo.jpeg"; 

function toggleMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`${mode}-tab`).classList.add('active');
    renderSchedule();
}

function renderSchedule() {
    const list = document.getElementById('schedule-list');
    
    if (currentMode === 'st') {
        list.innerHTML = `
            <div class="st-image-container">
                <p style="color: #198cc1; font-weight: 700; margin-bottom: 10px; font-size: 0.9rem;">
                    <i data-lucide="camera" style="width: 14px; vertical-align: middle;"></i> Station Board Photo
                </p>
                <img src="${stImageUrl}" alt="ST Schedule Board">
            </div>
        `;
        lucide.createIcons(); 
    } else {
        const items = transitData[currentMode];
        list.innerHTML = items.map(item => `
            <div class="card">
                <div class="card-left">
                    <h3 class="dest-name">${item.dest}</h3>
                    <p class="sub-info">${item.info}</p>
                </div>
                <div class="time-grid">
                    <div class="time-flex">
                        ${item.times.map(t => `<span class="time-val">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

setInterval(() => {
    document.getElementById('live-clock').innerText = new Date().toLocaleTimeString('en-US', { hour12: false });
}, 1000);

toggleMode('train');