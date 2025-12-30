
const curriculum = [
    {
        code: "FE25BS101",
        title: "Linear Algebra & Multivariable Calculus",
        sem: "sem1",
        units: ["Rank, Eigenvalues & Eigenvectors", "Partial Differentiation (Euler's)", "Jacobian & Maxima/Minima", "Fourier Series & Harmonic Analysis"],
        url: "https://archive.nptel.ac.in/courses/111/105/111105121/"
    },
    {
        code: "FE25BS102",
        title: "Engineering Physics",
        sem: "sem1",
        units: ["Semiconductor Physics & Hall Effect", "Quantum Wave-Particle Duality", "Superconductivity & Meissner Effect", "Photonics & Nanomaterials"],
        url: "https://nptel.ac.in/courses/122103011"
    },
    {
        code: "FE25ES101",
        title: "Elements of Electronics Engineering",
        sem: "sem1",
        units: ["Diodes & Rectifiers", "BJT as a Switch", "Digital Logic & De Morgan’s", "OP-AMP & Sensors"],
        url: "https://nptel.ac.in/courses/108105132"
    },
    {
        code: "FE25ES105",
        title: "Fundamentals of Programming (C)",
        sem: "sem1",
        units: ["Algorithms & Flowcharts", "Branching & Looping (Iteration)", "Arrays & String Manipulation", "Modular Programming (Recursion)"],
        url: "https://nptel.ac.in/courses/106104128"
    },
    {
        code: "FE25BS104",
        title: "Diff. Equations & Applied Calculus",
        sem: "sem2",
        units: ["Ordinary Differential Equations", "Orthogonal Trajectories", "Gamma/Beta Functions & DUIS", "Multiple Integrals (Area/Volume)"],
        url: "https://nptel.ac.in/courses/111106100"
    },
    {
        code: "FE25PC101",
        title: "Programming & Problem Solving (Python)",
        sem: "sem2",
        units: ["Data Types (Tuples/Lists/Sets)", "Decision & Iterative Structures", "File Handling & Directory Methods", "OOPs: Inheritance & Polymorphism"],
        url: "https://nptel.ac.in/courses/106106145"
    },
    {
        code: "FE25IK101",
        title: "Indian Knowledge System",
        sem: "sem2",
        units: ["Ancient Mathematics (Aryabhata)", "IKS Astronomy & Jyotisha", "Vedic Ritual Geometry", "Ancient Architecture & Governance"],
        url: "https://iksindia.org/lectures-and-videos.php"
    }
];

function renderVault(data) {
    const grid = document.getElementById('vault-grid');
    grid.innerHTML = data.map(course => `
        <div class="course-card">
            <div class="card-top">
                <span class="code-badge">${course.code}</span>
                <span style="font-size: 0.7rem; color: var(--soft-graphite)">${course.sem.toUpperCase()}</span>
            </div>
            <h3 style="margin: 0; color: var(--paper-white)">${course.title}</h3>
            <ul class="unit-list">
                ${course.units.map(unit => `<li>${unit}</li>`).join('')}
            </ul>
            <a href="${course.url}" target="_blank" class="action-btn">Launch Lectures</a>
        </div>
    `).join('');
}

function filterVault(filter, btn) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filteredData = filter === 'all' 
        ? curriculum 
        : curriculum.filter(item => item.sem === filter);
    
    renderVault(filteredData);
}

// Initial initialization
window.onload = () => renderVault(curriculum);