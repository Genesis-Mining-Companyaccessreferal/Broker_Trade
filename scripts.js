document.addEventListener("DOMContentLoaded", () => {
    // Show the home section by default
    showSection('home');
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';

    // Close the menu after selection (for mobile view)
    const navUl = document.querySelector('nav ul');
    if (navUl.classList.contains('visible')) {
        navUl.classList.remove('visible');
    }
}

function generateReferralLink(plan) {
    const baseUrl = "https://genesismining.com/invest?";
    const userId = "user123";  // This should be dynamically generated or retrieved from user data
    const referralLink = `${baseUrl}plan=${plan}&ref=${userId}`;
    
    alert(`Your referral link: ${referralLink}`);
}

function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('visible');
}
