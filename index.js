const colorRadios = document.querySelectorAll('input[name="color"]');
colorRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        document.body.style.backgroundColor = radio.value;
    });
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    alert(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail Address: ${email}`);
});

const toggleButton = document.getElementById('toggleButton');
const textBlock = document.getElementById('textBlock');
toggleButton.addEventListener('click', () => {
    textBlock.classList.toggle('hidden');
});
