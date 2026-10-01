const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const shopCollection = document.querySelector(".hero-btn")
const year = document.getElementById("current-year");
const orderButtons = document.querySelectorAll(".order-btn");
if (menuBtn && navLinks) {

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});
}
if (shopCollection) {
    shopCollection.addEventListener("click", () => {
        window.location.href = "collection.html"
 })
    
}
// =====================================




// COLLECTION PAGE
// PRODUCT QUANTITY & ORDER


const productCards = document.querySelectorAll(".product-card");

const totalItems = document.querySelector("#totalItems");
const totalPrice = document.querySelector("#totalPrice");

const sendOrderBtn = document.querySelector("#sendOrderBtn");


function updateOrderTotal() {

    let items = 0;
    let price = 0;

    productCards.forEach(function (productCard) {

        const quantity =
            Number(
                productCard.querySelector(".quantity").textContent
            );

        const productPrice =
            Number(
                productCard.querySelector("p").textContent
                    .replace("₦", "")
                    .replace(",", "")
            );

        items += quantity;

        price += quantity * productPrice;
    });

    if (totalItems) {
        totalItems.textContent = items;
    }

    if (totalPrice) {
        totalPrice.textContent = price.toLocaleString();
    }
}


// PLUS BUTTON


const plusButtons =
    document.querySelectorAll(".plus-btn");

plusButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productCard =
            button.closest(".product-card");

        const quantity =
            productCard.querySelector(".quantity");

        let count =
            Number(quantity.textContent);

        count++;

        quantity.textContent = count;

        updateOrderTotal();
    });
});


// MINUS BUTTON

const minusButtons =
    document.querySelectorAll(".minus-btn");

minusButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productCard =
            button.closest(".product-card");

        const quantity =
            productCard.querySelector(".quantity");

        let count =
            Number(quantity.textContent);

        if (count > 0) {
            count--;
        }

        quantity.textContent = count;

        updateOrderTotal();
    });
});



// SEND ORDER


if (sendOrderBtn) {

    sendOrderBtn.addEventListener("click", function () {

        let orderMessage = "";
        let hasOrder = false;


        productCards.forEach(function (productCard) {

            const quantity =
                Number(
                    productCard.querySelector(".quantity").textContent
                );


            if (quantity > 0) {

                hasOrder = true;


                const productName =
                    productCard.querySelector("h3").textContent;


                const productPrice =
                    Number(
                        productCard.querySelector("p").textContent
                            .replace("₦", "")
                            .replace(",", "")
                    );


                const productTotal =
                    quantity * productPrice;


                orderMessage +=
                    `${productName} x ${quantity} - ₦${productTotal.toLocaleString()}\n`;
            }

        });


        // No product selected

        if (!hasOrder) {

            alert("Please select at least one product.");

            return;
        }


        // Add total

        orderMessage +=
            `\nTotal Items: ${totalItems.textContent}`;

        orderMessage +=
            `\nTotal Price: ₦${totalPrice.textContent}`;


        // WhatsApp number

        const whatsappNumber =
            "2348148500123";


        const whatsappMessage =
            `Hello, Aeenshar Luxury Emporium.
I would like to place an order:

${orderMessage}`;


        const whatsappLink =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


        window.open(whatsappLink, "_blank");

    });

}


// =========================
// CONTACT PAGE
// =========================

const contactForm =
    document.querySelector("#contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.querySelector("#name").value;

        const phone =
            document.querySelector("#phone").value;

        const message =
            document.querySelector("#message").value;


        if (
            name === "" ||
            phone === "" ||
            message === ""
        ) {

            alert("Please fill in all the fields.");

            return;
        }


        const whatsappNumber =
            "2348148500123";


        const whatsappMessage =
            `Hello Aeenshar Luxury Emporium,

Name: ${name}
Phone: ${phone}

Message: ${message}`;


        const whatsappLink =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


        window.open(whatsappLink, "_blank");


        contactForm.reset();

    });

}




// current year
if(year){
    year.textContent =  new Date().getFullYear();
}
        