function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName('button'));
    buttons
        .forEach((button) => {
            button.addEventListener('click', toggleInformation)
        });

    function toggleInformation(e) {
        const btn = e.currentTarget;
        const currentProfile = btn.parentElement;
        const currentChildren = Array.from(currentProfile.children);
        const hiddenDiv = currentChildren[9];
        const lockInput = currentChildren[4];

        if (lockInput.checked) {
            if (btn.textContent === 'Show more') {
                hiddenDiv.style.display = 'block';
                btn.textContent = 'Hide it';
            }
    
            else {
                hiddenDiv.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }
    }
}