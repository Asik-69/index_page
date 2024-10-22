let clickCount=0;
const button= document.getElementById("women_safety");

MessageChannel.addEventListner("submit", () => {
    clickCount++

    if (age <= 0 || age > 120) {
        document.getElementById('message').textContent = 'Please enter a valid age';
        return;
    }

    if (!validateEmail(email)) {
        document.getElementById('message').textContent = 'Please enter a valid email';
        return;
    }

    if (!validatePassword(password)) {
        document.getElementById('message').textContent = 'Please enter a valid password';
        return;
    }

    // Prepare data
    const formData = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        password: password,
        knownLanguage: knownLanguage
    };

    // Simulate form submission (you can replace this with an actual backend request)
    console.log('User Registered:', formData);
    document.getElementById('message').textContent = 'Registration successful!';

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
});
