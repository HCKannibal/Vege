let cartCount = 0;

const buttons = document.querySelectorAll(".add-button");
const cart = document.getElementById("cart-count");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cart.textContent = cartCount;

        button.textContent = "✓";

        setTimeout(() => {
            button.textContent = "+";
        }, 1000);

    });

});