document.querySelectorAll('[data-toggle="modal"]').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        const target = btn.getAttribute('data-target');
        document.getElementById(target).style.display = 'block';
    });
});

document.querySelectorAll('.custom-modal-close').forEach(close => {
    close.addEventListener('click', () => {
        close.closest('.custom-modal').style.display = 'none';
    });
});

window.addEventListener('click', e => {
    if (e.target.classList.contains('custom-modal')) {
        e.target.style.display = 'none';
    }
});

function openDownloadModal() {
    const modal = document.getElementById('modal-download');
    modal.style.display = 'block';
}

function downloadCV(lang) {
    let file = '';

    if (lang === 'pt') {
        file = '/assets/files/Adriano-de-Amorim-Vital-Analista-Curriculum-CV-pt.pdf';
    } else if (lang === 'en') {
        file = '/assets/files/Adriano-de-Amorim-Vital-Analista-Curriculum-CV-En.pdf';
    }

    // Just close the modal *after* starting the download
    const link = document.createElement('a');
    link.href = file;
    link.download = file.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Redisplay the modal correctly next time
    setTimeout(() => {
        document.getElementById('modal-download').style.display = 'none';
    }, 500);
}
