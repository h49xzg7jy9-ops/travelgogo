(function () {
    function closeMenu(products) {
        products.classList.remove("jory-products-menu-open");
        var trigger = products.querySelector(".jory-products-trigger");
        if (trigger) {
            trigger.setAttribute("aria-expanded", "false");
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        var products = document.querySelector("[data-jory-products]");
        if (!products) {
            return;
        }

        var trigger = products.querySelector(".jory-products-trigger");
        if (!trigger) {
            return;
        }

        trigger.addEventListener("click", function (event) {
            event.stopPropagation();
            var isOpen = products.classList.toggle("jory-products-menu-open");
            trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        document.addEventListener("click", function (event) {
            if (!products.contains(event.target)) {
                closeMenu(products);
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeMenu(products);
                trigger.focus();
            }
        });
    });
})();
