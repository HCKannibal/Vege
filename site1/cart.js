document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            const product = {
                name: button.dataset.name,
                price: button.dataset.price,
                image: button.dataset.image
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            cart.push(product);

            localStorage.setItem("cart", JSON.stringify(cart));

            alert(product.name + " добавлен в корзину!");
        });
    });

});