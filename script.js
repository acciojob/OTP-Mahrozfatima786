const heading = document.createElement('h1');
heading.id = 'verification_heading';
heading.innerText = 'Verify Your Account';
document.body.appendChild(heading);
const subheading = document.createElement('p');
subheading.id = 'verification_subtext';
subheading.innerText = 'Enter the 6-digit OTP sent to your registered email/phone.';
document.body.appendChild(subheading);
const container = document.createElement('div');
container.className = 'code-container';
document.body.appendChild(container);

for (let i = 0; i < 6; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.maxLength = 1;
    input.className = 'code';
    input.id = `code-${i + 1}`; // <-- Add ID for Cypress test
    container.appendChild(input);
}

const inputs = document.querySelectorAll('.code');
inputs.forEach((input, index) => {
    // On input
    input.addEventListener('input', (e) => {
        const value = e.target.value;
        if (/[^0-9]/.test(value)) {
            e.target.value = '';
            return;
        }
        if (value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            if (input.value === '' && index > 0) {
                inputs[index - 1].focus();
            }
        }
    });
});
inputs[0].focus();
