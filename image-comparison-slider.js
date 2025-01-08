(function () {
    var elsH = document.querySelectorAll(".image-spliter .mover");
    var i = elsH.length;

    while (i--) {
        var moverWidth = elsH[i].getBoundingClientRect().width;
        var imgLeft = elsH[i].nextElementSibling;
        var width = imgLeft.getBoundingClientRect().width;
        var height = imgLeft.getBoundingClientRect().height;

        // Set initial position of the mover
        elsH[i].style.left = width / 2 - moverWidth / 2 + "px";
        imgLeft.style.clip = "rect(0px, " + width / 2 + "px, 999px, 0px)";

        // Set cursor styles explicitly
        elsH[i].style.cursor = "grab";
        elsH[i].addEventListener("mousedown", function (e) {
            this.style.cursor = "grabbing"; // Change cursor to grabbing on interaction
            X = e.clientX;
            mouseDownX = 1;
        });

        elsH[i].addEventListener("mouseup", function () {
            this.style.cursor = "grab"; // Reset cursor to grab
            mouseDownX = 0;
        });

        elsH[i].addEventListener("mouseout", function () {
            this.style.cursor = "grab"; // Reset cursor to grab on mouse out
            mouseDownX = 0;
        });

        // Touch event handling
        elsH[i].addEventListener("touchstart", function (e) {
            X = e.touches[0].clientX;
            mouseDownX = 1;
        });

        elsH[i].addEventListener("touchend", function () {
            mouseDownX = 0;
        });

        // Mouse movement logic
        elsH[i].addEventListener("mousemove", function (e) {
            if (mouseDownX) {
                this.style.left = parseInt(this.style.left) + (e.clientX - X) + "px";
                X = e.clientX;
                this.nextElementSibling.style.clip =
                    "rect(0px, " +
                    (this.getBoundingClientRect().width / 2 +
                        parseInt(this.style.left)) +
                    "px, " +
                    this.getBoundingClientRect().height +
                    "px, 0px)";
            }
        });

        // Touch movement logic
        elsH[i].addEventListener("touchmove", function (e) {
            if (mouseDownX) {
                this.style.left =
                    parseInt(this.style.left) + (e.touches[0].clientX - X) + "px";
                X = e.touches[0].clientX;
                this.nextElementSibling.style.clip =
                    "rect(0px, " +
                    (this.getBoundingClientRect().width / 2 +
                        parseInt(this.style.left)) +
                    "px, " +
                    this.getBoundingClientRect().height +
                    "px, 0px)";
            }
        });
    }

    // Recalculate mover position on window resize
    window.addEventListener("resize", function () {
        var elsHre = document.querySelectorAll(".image-spliter .mover");
        var ii = elsHre.length;
        while (ii--) {
            var moverWidth = elsHre[ii].getBoundingClientRect().width;
            var imgLeft = elsHre[ii].nextElementSibling;
            var width = imgLeft.getBoundingClientRect().width;
            var height = imgLeft.getBoundingClientRect().height;
            elsHre[ii].style.left = width / 2 - moverWidth / 2 + "px";
            imgLeft.style.clip =
                "rect(0px, " + width / 2 + "px, " + height + "px, 0px)";
        }
    });
})();
