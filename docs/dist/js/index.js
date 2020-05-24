document.getElementById("open").addEventListener('click', () => {
    document.getElementsByClassName('slider-nav')[0].classList.add('slider-show');
});
document.getElementById("close").addEventListener('click', () => {
    document.getElementsByClassName('slider-nav')[0].classList.remove('slider-show');
});

document.getElementsByTagName('form')[0].addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('submit').innerHTML = `<div><div class="loader"></div></div>`;
    let xhr = new XMLHttpRequest();
    xhr.open('POST','https://fuchsiatech.herokuapp.com/');
    xhr.setRequestHeader('Content-type','application/json');

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            try {
                let x = JSON.parse(xhr.responseText);
                if (x.success == false) {
                    document.getElementById('submit').innerHTML = `<div>Send</div>`
                    document.getElementById('error').innerText = x.message;
                } else {
                    document.getElementById('submit').innerHTML = `<div>Sent</div>`
                    setTimeout(() => {
                        document.getElementById('submit').innerHTML = `<div>Send</div>`
                    }, 2000);
                }
            } catch(err) {
                document.getElementById('submit').innerHTML = `<div>Send</div>`
                document.getElementById('error').innerText = 'Error sending your email. Please try again';
            }
            setTimeout(() => {
                document.getElementById('error').innerHTML = ``
            }, 2000);
        }
    }
    xhr.send(JSON.stringify({email: document.getElementById('email').value, text: document.getElementById('message').value, subject:document.getElementById('name').value }));

    setTimeout(() => {
 
    }, 3000);

});