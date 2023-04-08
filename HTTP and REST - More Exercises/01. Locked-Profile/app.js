function lockedProfile() {
    const BASE_URL = 'http://localhost:3030/jsonstore/advanced/profiles/';
    const main = document.getElementById('main');

    fetch(BASE_URL)
        .then((res) => res.json())
        .then(display);

    function display(data) {
        main.innerHTML = '';
        let num = 1;
        Object.values(data).forEach(profile => {
            createCard(profile, num);
            num ++
        });

        const allButtons = Array.from(document.querySelectorAll('button'));
        allButtons.forEach((btn) => {
            btn.addEventListener('click', checkLock);
        })
    }

    function createCard(profile, num) {
        main.innerHTML += `<div class="profile">
                                <img src="./iconProfile2.png" class="userIcon" />
                                <label>Lock</label>
                                <input type="radio" name="user${num}Locked" value="lock" checked>
                                <label>Unlock</label>
                                <input type="radio" name="user${num}Locked" value="unlock"><br>
                                <hr>
                                <label>Username</label>
                                <input type="text" name="user${num}Username" value="${profile.username}" disabled readonly />
                                <div class="hiddenInfo" id="user${num}HiddenFields">
                                    <hr>
                                    <label>Email:</label>
                                    <input type="email" name="user${num}Email" value="${profile.email}" disabled readonly />
                                    <label>Age:</label>
                                    <input type="email" name="user${num}Age" value="${profile.age}" disabled readonly />
                                </div>
                                <button>Show more</button>
                            </div>`
    }

    function checkLock(e) {
        let button = e.currentTarget;
        let unlock = this.parentNode.querySelector('input[value="unlock"]');
        let hiddenInputs = Array.from(this.parentNode.querySelectorAll(".hiddenInfo > input"));
        let hiddenLabels = Array.from(this.parentNode.querySelectorAll(".hiddenInfo > label"));

        if(unlock.checked && button.textContent === 'Show more') {
            hiddenInputs.forEach((el) => el.style.display = 'block');
            hiddenLabels.forEach((el) => el.style.display = 'block');
            this.textContent = 'Hide it';
        }

        else if(unlock.checked && button.textContent === 'Hide it') {
            hiddenInputs.forEach((el) => el.style.display = 'none');
            hiddenLabels.forEach((el) => el.style.display = 'none');
            this.textContent = 'Show more';
        }
    }

}


