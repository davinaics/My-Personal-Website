function active () {
    document.querySelectorAll('ul li a').forEach(link => {
        link.addEventListener('click', function() {
            console.log(link);
            document.querySelectorAll('ul li a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        })
    })
}

active();