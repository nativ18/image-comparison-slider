(function () {
    var elsH = document.querySelectorAll(".image-spliter .mover");
    var i = elsH.length;

    while (i--) {
        var mover = elsH[i];
        var moverWidth = mover.getBoundingClientRect().width;
        var imgLeft = mover.nextElementSibling;
        var width = imgLeft.getBoundingClientRect().width;
        var height = imgLeft.getBoundingClientRect().height;

        // Initialize mover position and clipping
        mover.style.left = width / 2 - moverWidth / 2 - 10 + "px";
        imgLeft.style.clip = "rect(0px, " + width / 2 - 17 + "px, 999px, 0px)";

        // Add cursor styling explicitly
        mover.style.cursor = "grab";

        // Variables for mouse/touch movement
        var mouseDownX = 0;
        var X;

        // Add mousedown and touchstart listeners
        mover.addEventListener("mousedown", function (e) {
            this.style.cursor = "grabbing"; // Change cursor to grabbing
            X = e.clientX;
            mouseDownX = 1;
        });

        mover.addEventListener("mouseup", function () {
            this.style.cursor = "grab"; // Reset cursor to grab
            mouseDownX = 0;
        });

        mover.addEventListener("mouseout", function () {
            this.style.cursor = "grab"; // Reset cursor to grab
            mouseDownX = 0;
        });

        mover.addEventListener("touchstart", function (e) {
            X = e.touches[0].clientX;
            mouseDownX = 1;
        });

        mover.addEventListener("touchend", function () {
            mouseDownX = 0;
        });

        // Mouse move logic
        mover.addEventListener("mousemove", function (e) {
            if (mouseDownX) {
                this.style.left = parseInt(this.style.left) + (e.clientX - X) + "px";
                X = e.clientX;

                // Adjust clipping
                imgLeft.style.clip = "rect(0px, " + (parseInt(this.style.left) - 5 + moverWidth / 2) + "px, " + height + "px, 0px)";
            }
        });

        // Touch move logic
        mover.addEventListener("touchmove", function (e) {
            if (mouseDownX) {
                this.style.left = parseInt(this.style.left) + (e.touches[0].clientX - X) + "px";
                X = e.touches[0].clientX;

                // Adjust clipping
                imgLeft.style.clip = "rect(0px, " + (parseInt(this.style.left) - 5 + moverWidth / 2) + "px, " + height + "px, 0px)";
            }
        });
    }

    // Adjust positions on resize
    window.addEventListener("resize", function () {
        var elsHre = document.querySelectorAll(".image-spliter .mover");
        var ii = elsHre.length;

        while (ii--) {
            var mover = elsHre[ii];
            var moverWidth = mover.getBoundingClientRect().width;
            var imgLeft = mover.nextElementSibling;
            var width = imgLeft.getBoundingClientRect().width;
            var height = imgLeft.getBoundingClientRect().height;

            // Reset position and clipping
            mover.style.left = width / 2 - moverWidth / 2 - 10 + "px";
            imgLeft.style.clip = "rect(0px, " + width / 2 - 17 + "px, " + height + "px, 0px)";
        }
    });
})();
