document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.querySelector('.nav-account');
    const dropdownMenu = document.querySelector('.dropdown');

    loginBtn.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show-dropdown');
    });

    // Responsive Hamburger Menu
    const hamburger = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('expanded');
    });

    // Add items to the cart
    let cartCount = 0;
    document.querySelectorAll('.shop-now').forEach((button) => {
        button.addEventListener('click', () => {
            cartCount++;
            document.querySelector('.nav-cart span').textContent = `Cart (${cartCount})`;
            alert('Item added to cart!');
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // *** Panel Toggle Menu (Mobile View) ***
    const panelToggle = document.querySelector('.panel-all');
    const panelOps = document.querySelector('.panel-ops');

    panelToggle.addEventListener('click', () => {
        panelOps.classList.toggle('active');
        panelOps.style.display = panelOps.style.display === 'flex' ? 'none' : 'flex';
    });

    // *** Search Bar Highlight ***
    const searchInput = document.querySelector('.search-input');
    const searchBox = document.querySelector('.nav-search');

    searchInput.addEventListener('focus', () => {
        searchBox.style.border = '2px solid orange';
    });

    searchInput.addEventListener('blur', () => {
        searchBox.style.border = 'none';
    });

    // *** Dynamic Cart Functionality ***
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Persist cart in localStorage
    const cartIcon = document.querySelector('.nav-cart');

    cartIcon.addEventListener('click', () => {
        displayCart();
    });

    document.querySelectorAll('.box').forEach((item) => {
        item.addEventListener('click', () => {
            const itemName = item.querySelector('h2').innerText;
            addToCart(itemName);
        });
    });

    function addToCart(itemName) {
        cartItems.push(itemName);
        alert(`${itemName} has been added to your cart!`);
        updateCartCount();
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    function updateCartCount() {
        cartIcon.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartItems.length})`;
    }

    function displayCart() {
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
        } else {
            let cartContent = "Your Cart:\n\n";
            cartItems.forEach((item, index) => {
                cartContent += `${index + 1}. ${item}\n`;
            });
            alert(cartContent);
        }
    }

    updateCartCount(); // Update count on page load

    // *** Responsive Adjustments for Navbar ***
    function adjustNavbar() {
        const navbar = document.querySelector('.navbar');
        const panel = document.querySelector('.panel');

        if (window.innerWidth <= 768) {
            navbar.style.flexDirection = 'column';
            navbar.style.alignItems = 'flex-start';
            panel.style.flexDirection = 'column';
        } else {
            navbar.style.flexDirection = 'row';
            navbar.style.alignItems = 'center';
            panel.style.flexDirection = 'row';
        }
    }

    window.onload = adjustNavbar;
    window.onresize = adjustNavbar;

    // *** Scroll to Top Functionality ***
    const scrollToTopBtn = document.querySelector('.foot-panel1');
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // *** View Items Dynamically ***
    const items = document.querySelectorAll('.box');
    items.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.border = '2px solid orange';
            item.style.cursor = 'pointer';
        });

        item.addEventListener('mouseout', () => {
            item.style.border = 'none';
        });
    });

    // *** Login Modal ***
    const loginButton = document.querySelector('.nav-singin');
    const loginModal = document.createElement('div');
    loginModal.innerHTML = `
        <div class="login-modal" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; background: white; box-shadow: 0px 4px 8px rgba(0,0,0,0.2); z-index: 1000;">
            <h2>Login</h2>
            <input type="text" id="username" placeholder="Enter your name" style="width: 100%; padding: 10px; margin-bottom: 10px;">
            <button id="login-submit" style="width: 100%; padding: 10px; background-color: orange; border: none; color: white; font-weight: bold;">Login</button>
        </div>
        <div class="login-backdrop" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.4); z-index: 999;"></div>
    `;
    document.body.appendChild(loginModal);

    const loginModalBox = document.querySelector('.login-modal');
    const loginBackdrop = document.querySelector('.login-backdrop');

    loginButton.addEventListener('click', () => {
        loginModalBox.style.display = 'block';
        loginBackdrop.style.display = 'block';
    });

    loginBackdrop.addEventListener('click', () => {
        loginModalBox.style.display = 'none';
        loginBackdrop.style.display = 'none';
    });

    const loginSubmit = document.querySelector('#login-submit');
    loginSubmit.addEventListener('click', () => {
        const username = document.querySelector('#username').value;
        if (username) {
            alert(`Welcome, ${username}!`);
            document.querySelector('.nav-singin').innerHTML = `<span>Hello, ${username}</span>`;
            loginModalBox.style.display = 'none';
            loginBackdrop.style.display = 'none';
        } else {
            alert("Please enter your name.");
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // *** Login Modal ***
    const loginButton = document.querySelector('.nav-singin');
    const loginModal = document.createElement('div');
    loginModal.innerHTML = `
        <div class="login-modal" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; background: white; box-shadow: 0px 4px 8px rgba(0,0,0,0.2); z-index: 1000;">
            <h2>Login</h2>
            <input type="text" id="login-username" placeholder="Username" style="width: 100%; padding: 10px; margin-bottom: 10px;">
            <input type="password" id="login-password" placeholder="Password" style="width: 100%; padding: 10px; margin-bottom: 10px;">
            <button id="login-submit" style="width: 100%; padding: 10px; background-color: orange; border: none; color: white; font-weight: bold;">Login</button>
            <p style="margin-top: 10px; text-align: center;">Don't have an account? <span id="register-link" style="color: blue; cursor: pointer;">Register here</span></p>
        </div>
        <div class="register-modal" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; background: white; box-shadow: 0px 4px 8px rgba(0,0,0,0.2); z-index: 1000;">
            <h2>Register</h2>
            <input type="text" id="register-username" placeholder="Username" style="width: 100%; padding: 10px; margin-bottom: 10px;">
            <input type="password" id="register-password" placeholder="Password" style="width: 100%; padding: 10px; margin-bottom: 10px;">
            <button id="register-submit" style="width: 100%; padding: 10px; background-color: orange; border: none; color: white; font-weight: bold;">Register</button>
        </div>
        <div class="login-backdrop" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.4); z-index: 999;"></div>
    `;
    document.body.appendChild(loginModal);

    const loginModalBox = document.querySelector('.login-modal');
    const registerModalBox = document.querySelector('.register-modal');
    const loginBackdrop = document.querySelector('.login-backdrop');

    loginButton.addEventListener('click', () => {
        loginModalBox.style.display = 'block';
        loginBackdrop.style.display = 'block';
    });

    loginBackdrop.addEventListener('click', () => {
        loginModalBox.style.display = 'none';
        registerModalBox.style.display = 'none';
        loginBackdrop.style.display = 'none';
    });

    const loginSubmit = document.querySelector('#login-submit');
    const registerLink = document.querySelector('#register-link');
    const registerSubmit = document.querySelector('#register-submit');

    // *** Local Storage for Login ***
    registerLink.addEventListener('click', () => {
        loginModalBox.style.display = 'none';
        registerModalBox.style.display = 'block';
    });

    registerSubmit.addEventListener('click', () => {
        const username = document.querySelector('#register-username').value;
        const password = document.querySelector('#register-password').value;

        if (username && password) {
            localStorage.setItem(username, password);
            alert('Registration successful! You can now log in.');
            registerModalBox.style.display = 'none';
            loginModalBox.style.display = 'block';
        } else {
            alert('Please fill in all fields.');
        }
    });

    loginSubmit.addEventListener('click', () => {
        const username = document.querySelector('#login-username').value;
        const password = document.querySelector('#login-password').value;

        if (localStorage.getItem(username) === password) {
            alert(`Welcome back, ${username}!`);
            document.querySelector('.nav-singin').innerHTML = `<span>Hello, ${username}</span>`;
            loginModalBox.style.display = 'none';
            loginBackdrop.style.display = 'none';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
