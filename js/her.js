document.addEventListener('DOMContentLoaded', function () {

    // --- Navigation en bas + boutons hero : scroll fluide vers les sections ---
    function scrollToTarget(id) {
        var el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    document.querySelectorAll('.nav-btn[data-target]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.nav-btn').forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');
            scrollToTarget(btn.getAttribute('data-target'));
        });
    });

    document.querySelectorAll('[data-scroll]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            scrollToTarget(btn.getAttribute('data-scroll'));
        });
    });

    // --- Toggle 4x4 : "Avec chauffeur - Circuit" / "Sans chauffeur - Location" ---
    var toggleBtns = document.querySelectorAll('.toggle-btn');
    var badges = document.querySelectorAll('.fourwd-badge');

    toggleBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            toggleBtns.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');

            var mode = btn.getAttribute('data-mode');
            badges.forEach(function (badge) {
                badge.textContent = mode === 'circuit' ? 'CIRCUIT' : 'LOCATION';
            });
        });
    });

    // --- Formulaire de contact : confirmation simple sans rechargement ---
    var form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Merci ! Votre message a bien été envoyé.');
            form.reset();
        });
    }
});