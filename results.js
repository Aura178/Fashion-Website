document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obține răspunsurile selectate de utilizator
    const raspunsuri = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value,
        q4: document.querySelector('input[name="q4"]:checked').value,
        q5: document.querySelector('input[name="q5"]:checked').value,
        q6: document.querySelector('input[name="q6"]:checked').value,
        q7: document.querySelector('input[name="q7"]:checked').value,
        q8: document.querySelector('input[name="q8"]:checked').value,
        q9: document.querySelector('input[name="q9"]:checked').value,
        q10: document.querySelector('input[name="q10"]:checked').value,
        q11: document.querySelector('input[name="q11"]:checked').value
    };

    // Atribuie fiecare rezultat unei variabile
    let rezultat = '';

    // Verificarea răspunsurilor pentru a determina outfit-ul
    if (raspunsuri.q1 === 'A' && raspunsuri.q2 === 'A' && raspunsuri.q3 === 'A') {
        rezultat = 'The "floral" outfit';
    } else if (raspunsuri.q1 === 'B' && raspunsuri.q2 === 'A' && raspunsuri.q3 === 'A') {
        rezultat = 'The "professional" outfit';
    } else if (raspunsuri.q1 === 'A' && raspunsuri.q2 === 'B' && raspunsuri.q3 === 'A') {
        rezultat = 'The "electric" outfit';
    } else {
        rezultat = 'The "nonchalant" outfit';
    }

    // Afișează rezultatul și descrierea
    const rezultatContainer = document.getElementById('rezultat');
    const imageContainer = document.createElement('img');
    const outfitImages = {
        'The "floral" outfit': 'floral.jpg',
        'The "professional" outfit': 'professional.jpg',
        'The "electric" outfit': 'electric.jpg',
        'The "nonchalant" outfit': 'nonchalant.jpg'
    };
    imageContainer.src = outfitImages[rezultat];
    imageContainer.alt = rezultat;
    rezultatContainer.appendChild(imageContainer);
});







