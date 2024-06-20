
document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function(event) {
            event.preventDefault();
            fetch('/logout', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(response => {
                if (response.ok) {
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                } else {
                    alert('Falha ao fazer logout');
                }
            });
        });
    }
});
