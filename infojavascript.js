document.getElementById('dinokod').addEventListener('click', function() {
    
    var xhr = new XMLHttpRequest();

    
    xhr.open('GET', 'https://dinosaur-facts-api.shultzlab.com/dinosaurs/random/name', true);

    
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            
            var data = JSON.parse(xhr.responseText);
            
            var outputDiv = document.getElementById('output');
            outputDiv.innerHTML = '';

            var title = document.createElement('p');
            title.textContent = `A random dínód: ${data.Name}`;

            outputDiv.appendChild(title);
        } else {
            console.error('Request failed with status:', xhr.status);
        }
    };

    
    xhr.onerror = function() {
        console.error('Request failed');
    };

    
    xhr.send();
});