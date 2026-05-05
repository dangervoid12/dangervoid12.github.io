document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 80);
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach((section) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });

    const machineSelect = document.getElementById('currentMachine');
    const machineStatus = document.getElementById('machineStatus');
    const machineModeText = document.getElementById('machineModeText');

    if (machineSelect && machineStatus && machineModeText) {
        const updateMachineCopy = () => {
            const mode = machineSelect.options[machineSelect.selectedIndex].value;
            if (mode === 'multi') {
                machineStatus.textContent = 'Multi-machine project';
                machineModeText.textContent = 'Multi-machine license: switch the current machine directly in the Generation tab.';
            } else {
                machineStatus.textContent = 'Single machine project';
                machineModeText.textContent = 'Full license: one machine can be assigned to the project.';
            }
        };

        machineSelect.addEventListener('change', updateMachineCopy);
        updateMachineCopy();
    }
});
