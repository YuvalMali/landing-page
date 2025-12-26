console.log("JS loaded");

const form = document.querySelector(".contact-form");
const messageBox = document.querySelector(".form-message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Form submitted");

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;

    if (!name || !email || !phone) {
        showMessage("אנא מלא את כל שדות החובה", false);
        return;
    }

    showMessage("הטופס נשלח בהצלחה! נחזור אליך בהקדם 🙌", true);
    form.reset();
});

function showMessage(text, isSuccess) {
    messageBox.style.display = "block";
    messageBox.textContent = text;
    messageBox.style.marginTop = "15px";
    messageBox.style.fontWeight = "bold";

    if (isSuccess) {
        messageBox.style.color = "green";
    } else {
        messageBox.style.color = "red";
    }
}
