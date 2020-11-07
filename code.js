const img = document.getElementById('heroes');
const p = document.getElementById('p1');
const h1 = document.getElementById('title1');
const back_button = document.getElementById('b-b');
const next_button = document.getElementById('n-b');
const nav_button = document.getElementById('nav-button');
const list = document.getElementById('list');
const shadow = document.getElementById('shadow');
let state = 0;
const responsive = window.matchMedia('screen and (max-width: 600px)');

responsive.addEventListener('change', detectResponsive);

document.onkeyup = e => {
    if (e.key === 'ArrowLeft') {
        state -= 1;
    } else if (e.key === 'ArrowRight') {
        state += 1;
    }
    if (state === 0) {
        h1.innerHTML = `Discover innovative ways to decorate`;
        p.innerHTML = `We provide
        unmatched quality, comfort, and style for property owners across the
        country. Our experts combine form andnfunction in bringing your vision to
        life. Create a room in your own style with our collection and make your
        property a reflection of you and what you love.`;
        img.alt = 'hero 1';
        img.src = 'https://github.com/degranda/Platzi-Room-homepage/blob/master/images/desktop-image-hero-1.jpg?raw=true';
    }
    else if (state === 1) {
        h1.innerHTML = `We are available
        all across the globe`;
        p.innerHTML = `With stores all over the world, it's easy for you to
        find furniture for your home or place of business. Locally, we’re in most
        major cities throughout the country. Find the branch nearest you using our
        store locator. Any questions? Don't hesitate to contact us today.`;
        img.alt = 'hero 2';
        img.src = 'https://github.com/degranda/Platzi-Room-homepage/blob/master/images/desktop-image-hero-2.jpg?raw=true';
    }
    else if (state === 2) {
        h1.innerHTML = `Manufactured with the best materials`;
        p.innerHTML = `Our modern furniture store provide a
        high level of quality. Our company has invested in advanced technology to
        ensure that every product is made as perfect and as consistent as possible.
        With three decades of experience in this industry, we understand what
        customers want for their home and office.`;
        img.alt = 'hero 3';
        img.src = 'https://github.com/degranda/Platzi-Room-homepage/blob/master/images/desktop-image-hero-3.jpg?raw=true';
    }
    else if (state > 2) {
        state = 0;
        h1.innerHTML = `Discover innovative ways to decorate`;
        p.innerHTML = `We provide
        unmatched quality, comfort, and style for property owners across the
        country. Our experts combine form andnfunction in bringing your vision to
        life. Create a room in your own style with our collection and make your
        property a reflection of you and what you love.`;
        img.alt = 'hero 1';
        img.src = 'https://github.com/degranda/Platzi-Room-homepage/blob/master/images/desktop-image-hero-1.jpg?raw=true';
    }
    else if (state < 0) {
        state = 2;
        h1.innerHTML = `Manufactured with the best materials`;
        p.innerHTML = `Our modern furniture store provide a
        high level of quality. Our company has invested in advanced technology to
        ensure that every product is made as perfect and as consistent as possible.
        With three decades of experience in this industry, we understand what
        customers want for their home and office.`;
        img.alt = 'hero 3';
        img.src = 'https://github.com/degranda/Platzi-Room-homepage/blob/master/images/desktop-image-hero-3.jpg?raw=true';
    }
}

back_button.onclick = () => {
    state -= 1;
    if (state === 0) {
        h1.innerHTML = `Discover innovative ways to decorate`;
        p.innerHTML = `We provide
        unmatched quality, comfort, and style for property owners across the
        country. Our experts combine form andnfunction in bringing your vision to
        life. Create a room in your own style with our collection and make your
        property a reflection of you and what you love.`;
        img.alt = 'hero 1';
        img.src = 'https://github.com/degranda/Platzi-Room-homepage/blob/master/images/desktop-image-hero-1.jpg?raw=true';
    }
    else if (state === 1) {
        h1.innerHTML = `We are available
        all across the globe`;
        p.innerHTML = `With stores all over the world, it's easy for you to
        find furniture for your home or place of business. Locally, we’re in most
        major cities throughout the country. Find the branch nearest you using our
        store locator. Any questions? Don't hesitate to contact us today.`;
        img.alt = 'hero 2';
        img.src = 'https://github.com/degranda/Platzi-Room-homepage/blob/master/images/desktop-image-hero-2.jpg?raw=true';
    }
    else if (state === 2) {
        h1.innerHTML = `Manufactured with the best materials`;
        p.innerHTML = `Our modern furniture store provide a
        high level of quality. Our company has invested in advanced technology to
        ensure that every product is made as perfect and as consistent as possible.
        With three decades of experience in this industry, we understand what
        customers want for their home and office.`;
        img.alt = 'hero 3';
        img.src = 'https://github.com/degranda/Platzi-Room-homepage/blob/master/images/desktop-image-hero-3.jpg?raw=true';
    }
    else if (state > 2) {
        state = 0;
        h1.innerHTML = `Discover innovative ways to decorate`;
        p.innerHTML = `We provide
        unmatched quality, comfort, and style for property owners across the
        country. Our experts combine form andnfunction in bringing your vision to
        life. Create a room in your own style with our collection and make your
        property a reflection of you and what you love.`;
        img.alt = 'hero 1';
        img.src = 'https://github.com/degranda/Platzi-Room-homepage/blob/master/images/desktop-image-hero-1.jpg?raw=true';
    }
    else if (state < 0) {
        state = 2;
        h1.innerHTML = `Manufactured with the best materials`;
        p.innerHTML = `Our modern furniture store provide a
        high level of quality. Our company has invested in advanced technology to
        ensure that every product is made as perfect and as consistent as possible.
        With three decades of experience in this industry, we understand what
        customers want for their home and office.`;
        img.alt = 'hero 3';
        img.src = 'https://github.com/degranda/Platzi-Room-homepage/blob/master/images/desktop-image-hero-3.jpg?raw=true';
    }
}

next_button.onclick = () => {
    state += 1;

    if (state === 0) {
        h1.innerHTML = `Discover innovative ways to decorate`;
        p.innerHTML = `We provide
        unmatched quality, comfort, and style for property owners across the
        country. Our experts combine form andnfunction in bringing your vision to
        life. Create a room in your own style with our collection and make your
        property a reflection of you and what you love.`;
        img.alt = 'hero 1';
        img.src = 'https://github.com/degranda/Platzi-Room-homepage/blob/master/images/desktop-image-hero-1.jpg?raw=true';
    }
    else if (state === 1) {
        h1.innerHTML = `We are available
        all across the globe`;
        p.innerHTML = `With stores all over the world, it's easy for you to
        find furniture for your home or place of business. Locally, we’re in most
        major cities throughout the country. Find the branch nearest you using our
        store locator. Any questions? Don't hesitate to contact us today.`;
        img.alt = 'hero 2';
        img.src = 'https://github.com/degranda/Platzi-Room-homepage/blob/master/images/desktop-image-hero-2.jpg?raw=true';
    }
    else if (state === 2) {
        h1.innerHTML = `Manufactured with the best materials`;
        p.innerHTML = `Our modern furniture store provide a
        high level of quality. Our company has invested in advanced technology to
        ensure that every product is made as perfect and as consistent as possible.
        With three decades of experience in this industry, we understand what
        customers want for their home and office.`;
        img.alt = 'hero 3';
        img.src = 'https://github.com/degranda/Platzi-Room-homepage/blob/master/images/desktop-image-hero-3.jpg?raw=true';
    }
    else if (state > 2) {
        state = 0;
        h1.innerHTML = `Discover innovative ways to decorate`;
        p.innerHTML = `We provide
        unmatched quality, comfort, and style for property owners across the
        country. Our experts combine form andnfunction in bringing your vision to
        life. Create a room in your own style with our collection and make your
        property a reflection of you and what you love.`;
        img.alt = 'hero 1';
        img.src = 'https://github.com/degranda/Platzi-Room-homepage/blob/master/images/desktop-image-hero-1.jpg?raw=true';
    }
    else if (state < 0) {
        state = 2;
        h1.innerHTML = `Manufactured with the best materials`;
        p.innerHTML = `Our modern furniture store provide a
        high level of quality. Our company has invested in advanced technology to
        ensure that every product is made as perfect and as consistent as possible.
        With three decades of experience in this industry, we understand what
        customers want for their home and office.`;
        img.alt = 'hero 3';
        img.src = 'https://github.com/degranda/Platzi-Room-homepage/blob/master/images/desktop-image-hero-3.jpg?raw=true';
    }
}

function detectResponsive(e) {
    if (e.matches) {
        nav_button.addEventListener('click', showList);
        list.style.display = "none";
        shadow.style.display = "none";
        nav_button.src = "https://raw.githubusercontent.com/degranda/Platzi-Room-homepage/75069686c5bbcfc198b107794150e9c0ac5cad70/images/icon-hamburger.svg";
    } else {
        nav_button.removeEventListener('click', showList);
        list.style.display = "flex";
        shadow.style.display = "none";
    }
}

detectResponsive(responsive);

function showList() {
    const ls = list.style;
    if (ls.display === "none") {
        ls.display = "flex";
        shadow.style.display = "block";
        nav_button.src = "https://raw.githubusercontent.com/degranda/Platzi-Room-homepage/75069686c5bbcfc198b107794150e9c0ac5cad70/images/icon-close.svg";
    } else {
        ls.display = "none";
        shadow.style.display = "none";
        nav_button.src = "https://raw.githubusercontent.com/degranda/Platzi-Room-homepage/75069686c5bbcfc198b107794150e9c0ac5cad70/images/icon-hamburger.svg";
    }
}
