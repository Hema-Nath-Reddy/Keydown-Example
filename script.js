function activateLinks(event) {
    if (event.key === 'c'||event.key === 'C') {
        window.location.href = document.getElementById('gpt').href;
    } else if (event.key === 'g'||event.key === 'G') {
        window.location.href = document.getElementById('gc').href;
    } else if (event.key === 'k'||event.key === 'K') {
        window.location.href = document.getElementById('kp').href;
    } else if (event.key === 'a'||event.key === 'A') {
        window.location.href = document.getElementById('me').href;
    }else if (event.key === 'i'||event.key === 'I') {
        window.location.href = document.getElementById('net').href;
    }else if (event.key === 'u'||event.key === 'U') {
        window.location.href = document.getElementById('uni').href;
    }
}

document.addEventListener("keydown", activateLinks);
