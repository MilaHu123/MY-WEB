document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const profiles = document.querySelectorAll('.profile');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();

        profiles.forEach(profile => {
            const name = profile.getAttribute('data-name').toLowerCase();
            const school = profile.getAttribute('data-school').toLowerCase();
            const job = profile.getAttribute('data-job').toLowerCase();
            const major = profile.getAttribute('data-major').toLowerCase();

            if (name.includes(searchTerm) || school.includes(searchTerm) || job.includes(searchTerm) || major.includes(searchTerm)) {
                profile.style.display = 'flex';
            } else {
                profile.style.display = 'none';
            }
        });
    });

    function 预约时间(name) {
        alert(`您已预约 ${name} 的咨询时间。`);
    }
});