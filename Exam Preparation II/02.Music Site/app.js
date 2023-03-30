window.addEventListener('load', solve);

function solve() {
   const addBtn = document.getElementById('add-btn');
   const genreInput = document.getElementById('genre');
   const nameInput = document.getElementById('name');
   const authorInput = document.getElementById('author');
   const dateInput = document.getElementById('date');
      
   addBtn.addEventListener('click', addSong);

    function addSong(event) {
        event.preventDefault();
                
        if(genreInput.value == '' || nameInput.value == '' || authorInput.value == '' || dateInput.value == '') {
            return;
        }

        const divSongContainer = document.querySelector('.all-hits-container');
        const divCurrentSong = document.createElement('div');
        divCurrentSong.className = 'hits-info';
        
        divCurrentSong.innerHTML = `<img src="./static/img/img.png">
                                    <h2>Genre: ${genreInput.value}</h2>
                                    <h2>Name: ${nameInput.value}</h2>
                                    <h2>Author: ${authorInput.value}</h2>
                                    <h3>Date: ${dateInput.value}</h3>
                                    <button class='save-btn'>Save song</button>
                                    <button class='like-btn'>Like song</button>
                                    <button class='delete-btn'>Delete</button>`;

        divSongContainer.appendChild(divCurrentSong);

        genreInput.value = '';
        nameInput.value = '';
        authorInput.value = '';
        dateInput.value = '';

        const saveSongBtn = divCurrentSong.querySelector('.save-btn');
        const likeSongBtn = divCurrentSong.querySelector('.like-btn');
        const deleteSongBtn = divCurrentSong.querySelector('.delete-btn');

        likeSongBtn.addEventListener('click', likeSong);
        saveSongBtn.addEventListener('click', saveSong);
        deleteSongBtn.addEventListener('click', deleteSong);
        
        function likeSong(event) {
            event.target.disabled = true;
            const likedNumbers = document.querySelector('.likes p');
            let likedNumbersText = likedNumbers.textContent;
            let [ text, count ] = likedNumbersText.split(': ');
            count = Number(count) + 1;
            likedNumbers.textContent = text + ': ' + count;
        }

        function saveSong() {
            const divSavedContainer = document.querySelector('.saved-container');
            likeSongBtn.remove();
            saveSongBtn.remove();
            divSavedContainer.appendChild(divCurrentSong);
        }

        function deleteSong() {
            divCurrentSong.remove();
        }

    }
}