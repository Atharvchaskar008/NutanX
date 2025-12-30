const alumniList = [
    // --- 💻 COMPUTER & IT (25) ---
    { name: "Ramesh Shriram Mote", batch: "2013", role: "Staff Engineer, Western Digital (USA)", dept: "Computer" },
    { name: "Himanshu Nagose", batch: "2024", role: "Programmer Analyst, Cognizant", dept: "Computer" },
    { name: "Pranav Khandagale", batch: "2023", role: "Software Engineer, Yardi Systems", dept: "Computer" },
    { name: "Atharva Sable", batch: "2023", role: "Specialist Programmer, Infosys", dept: "IT" },
    { name: "Nishigandha Panditrao", batch: "2022", role: "Senior Analyst, Capgemini", dept: "Computer" },
    { name: "Kale Tejas Shivaji", batch: "2022", role: "Software Engineer, Coditas", dept: "IT" },
    { name: "Satwik Unawane", batch: "2023", role: "Cloud Support Associate, Amazon", dept: "Computer" },
    { name: "Sumedh Joshi", batch: "2023", role: "Software Engineer, Product Dev", dept: "Computer" },
    { name: "Pradip Dasharath Gorde", batch: "2023", role: "Software Developer", dept: "Computer" },
    { name: "Suryakant Lad", batch: "2022", role: "Associate Software Engineer, Valueadd", dept: "Computer" },
    { name: "Ninad Dhadphale", batch: "2023", role: "Full Stack Developer", dept: "IT" },
    { name: "Aditya Patil", batch: "2024", role: "MERN Stack Developer", dept: "Computer" },
    { name: "Abhishek Kumbhar", batch: "2022", role: "Research Engineer, NMIET", dept: "Computer" },
    { name: "Charudatta Patil", batch: "2021", role: "Data Science Professional", dept: "Computer" },
    { name: "Pradyumna Dhavlekar", batch: "2023", role: "Associate Data Engineer", dept: "Computer" },
    { name: "Ganesh Vaman Ghodke", batch: "2024", role: "IT Engineering Specialist", dept: "IT" },
    { name: "Yashodeep Ganesh Patil", batch: "2024", role: "IT Consultant", dept: "IT" },
    { name: "Kunal Kashinath Kadu", batch: "2024", role: "Systems Analyst", dept: "IT" },
    { name: "Vinit Ajit Dhas", batch: "2024", role: "Software Trainee", dept: "IT" },
    { name: "Nikhil Gaikwad", batch: "2024", role: "Software Engineer", dept: "Computer" },
    { name: "Kshitija Mande", batch: "2024", role: "Junior Developer", dept: "Computer" },
    { name: "Yash Sunil Mhaske", batch: "2024", role: "Tech Analyst", dept: "Computer" },
    { name: "Rutuja Jadhav", batch: "2024", role: "Graduate Engineer Trainee", dept: "Computer" },
    { name: "Avadhut Shedage", batch: "2024", role: "Software Professional", dept: "Computer" },
    { name: "Sainy Samar Banerjee", batch: "2014", role: "IT Project Lead", dept: "IT" },

    // --- ⚙️ MECHANICAL (15) ---
    { name: "Amit Pawar", batch: "2015", role: "Design Engineer, Tata Motors", dept: "Mechanical" },
    { name: "Omkar Thorat", batch: "2016", role: "Mechanical Engineer, Cummins India", dept: "Mechanical" },
    { name: "Tushar Nikam", batch: "2018", role: "R&D Engineer, Emerson", dept: "Mechanical" },
    { name: "Pushkar R. Parale", batch: "2016", role: "Director, MRSON Equipment Pvt. Ltd.", dept: "Mechanical" },
    { name: "Ganesh Devaram Mandale", batch: "2013", role: "Director, Acrytech Solutions", dept: "Mechanical" },
    { name: "Ranjeet Vhanmane", batch: "2015", role: "Quality Engineer, Golde Pune Automotive", dept: "Mechanical" },
    { name: "Bharat Joshi", batch: "2018", role: "Operations Executive, Mahindra Logistics", dept: "Mechanical" },
    { name: "Pankaj Anant Bhambure", batch: "2015", role: "Production Engineer", dept: "Mechanical" },
    { name: "Suraj Dattatraya Tambe", batch: "2015", role: "Quality Assurance, Chakan Industry", dept: "Mechanical" },
    { name: "Mahesh Appasaheb Zambare", batch: "2015", role: "Mechanical Design Analyst", dept: "Mechanical" },
    { name: "Anmol Ashok Bhegade", batch: "2015", role: "Manufacturing Lead", dept: "Mechanical" },
    { name: "Rohit Navnath Padwal", batch: "2015", role: "Industrial Engineer", dept: "Mechanical" },
    { name: "Vikram Salunke", batch: "2015", role: "Manufacturing Operations Specialist", dept: "Mechanical" },
    { name: "Chaitanya Kurundwad", batch: "2017", role: "Research Paper Author (Die Casting)", dept: "Mechanical" },
    { name: "Sujit R. Prajapati", batch: "2017", role: "Industrial Process Analyst", dept: "Mechanical" },

    // --- ⚡ E&TC / ELECTRICAL / GOVT (10) ---
    { name: "Jayesh Gharat", batch: "2013", role: "Hardware Engineer, Intel Corp (USA)", dept: "E&TC" },
    { name: "Sayyad Nilofar", batch: "2014", role: "Electrical Engineer, CTDI (USA)", dept: "Electrical" },
    { name: "Abhimanyu Bhegade", batch: "2014", role: "Electrical Officer, Merchant Navy", dept: "Electrical" },
    { name: "Alok Kumar Choubey", batch: "2013", role: "Central Excise Inspector, Dept of Revenue", dept: "E&TC" },
    { name: "Sagar Tukaram Tale", batch: "2014", role: "Police Sub Inspector, Govt. of Maharashtra", dept: "Mechanical" },
    { name: "Sawant Ajinkya Dattatray", batch: "2014", role: "Tahsildar, Govt. Administration", dept: "IT" },
    { name: "Suryavanshi Pallavi", batch: "2014", role: "Taxation Officer, Maharashtra Govt.", dept: "IT" },
    { name: "Akash Shinde", batch: "2013", role: "Assistant Project Officer", dept: "E&TC" },
    { name: "Ashok Kumar Naidu", batch: "2019", role: "Director, MKA Enterprises", dept: "E&TC" },
    { name: "Sarvesh Kudumbale", batch: "2023", role: "Systems Engineer Trainee", dept: "E&TC" }
];

function getInitials(name) {
    const names = name.split(' ');
    let initials = names[0].substring(0, 1);
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1);
    }
    return initials.toUpperCase();
}

const container = document.getElementById('alumniContainer');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('searchInput');

function renderCards(data) {
    container.innerHTML = '';
    if (data.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        data.forEach(alumni => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="initials-badge">${getInitials(alumni.name)}</div>
                <span class="batch-tag">Batch of ${alumni.batch} | ${alumni.dept}</span>
                <h3 style="margin: 0.5rem 0;">${alumni.name}</h3>
                <p class="designation">${alumni.role}</p>
                <a href="https://nmietpune.almaconnect.com/" target="_blank" class="portal-btn">Connect on AlmaConnect</a>
            `;
            container.appendChild(card);
        });
    }
}

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = alumniList.filter(a => 
        a.name.toLowerCase().includes(term) || 
        a.batch.includes(term) || 
        a.role.toLowerCase().includes(term) ||
        a.dept.toLowerCase().includes(term)
    );
    renderCards(filtered);
});

// Initial Load
renderCards(alumniList);