// Wait until the DOM is fully loaded before manipulating the elements
document.addEventListener("DOMContentLoaded", function() {
    // Arrays of image URLs for the left and right sides
    const leftImages = [
        "https://images.squarespace-cdn.com/content/6769debcb704bd19bef657cf/8fe80bc2-891c-416a-8cd1-5a0e69e6d8b2/before.jpeg?content-type=image%2Fjpeg",
        "https://images.squarespace-cdn.com/content/6769debcb704bd19bef657cf/ab28893c-9f78-499b-b56d-05111e2544f3/before_gabot.jpeg?content-type=image%2Fjpeg",
        "https://images.squarespace-cdn.com/content/6769debcb704bd19bef657cf/46f59b52-d3a1-4d05-806b-1a9898330f80/before.jpg?content-type=image%2Fjpeg"
    ];

    const rightImages = [
        "https://images.squarespace-cdn.com/content/6769debcb704bd19bef657cf/50a99eeb-f371-400f-91a1-9a7799d9b540/after.jpeg?content-type=image%2Fjpeg",
        "https://images.squarespace-cdn.com/content/6769debcb704bd19bef657cf/63bc5f2b-6387-4eb8-b9eb-6aec6ebb6c74/after_gabot.jpeg?content-type=image%2Fjpeg",
        "https://images.squarespace-cdn.com/content/6769debcb704bd19bef657cf/1715c87f-9a49-4bd1-80b1-e2cdd537fe8a/after.jpeg?content-type=image%2Fjpeg"
    ];

    const titleText = [
        "טשטוש קמטים בגבות",
        "טשטוש קמטי עיניים",
        "פיסול ועיבוי שפתיים"
    ];

     const descriptionText = [
        "טיפול טשטוש קמטים כולל הזרקת חומרים אסתטיים כמו חומצה היאלורונית או בוטוקס להחלקת קמטים ושיפור מראה עור הפנים. הטיפול מתאים למגוון קמטים ונותן תוצאה טבעית ורעננה. התוצאות נשארות למשך מספר חודשים וניתן לחדש את הטיפול לפי הצורך.",
        "טיפול טשטוש קמטים בעיניים מיועד להפחתת הקמטים הדקים והקווים שמופיעים סביב העיניים, כגון רגלי עורב. בעזרת הזרקות חומרים כמו חומצה היאלורונית או בוטוקס, אנו מספקים פתרון עדין וממוקד להחלקת הקמטים ולהחזרת המראה הצעיר והרענן לעור סביב העיניים. התוצאה היא מראה חלק וצעיר יותר, עם שיפור במרקם עור העפעפיים והסביבה.",
        "טיפול פיסול ועיבוי שפתיים מעניק לך מראה טבעי, מלא ורענן, המדגיש את היופי הייחודי שלך. התוצאה היא שפתיים מעוצבות ומלאות יותר, תוך שמירה על פרופורציות מאוזנות שמתאימות למבנה הפנים שלך. הטיפול מאפשר להבליט את קווי המתאר של השפתיים, לתקן אסימטריה עדינה, ולהחזיר נפח שאבד עם הזמן. לאחר הטיפול תיהני ממראה שפתיים רכות וחושניות המשדרות ביטחון ונשיות, עם מגע עדין של רעננות. חשוב לציין שהתוצאה מותאמת אישית על ידי דוקטור שרון רשיש, כדי להבטיח שהמראה ירגיש לך טבעי והרמוני."
    ];

    let currentIndex = 0; // Start with the first set of images

    // Get references to the img-left and img-right elements
    const imgLeft = document.querySelector(".img-left"); // Correct selector for class
    const imgRight = document.querySelector(".img-right"); // Correct selector for class

    // Function to update the images
    function updateImages(index) {
        console.log("Updating images to index:", index);
        imgLeft.src = leftImages[index];
        imgRight.src = rightImages[index];
        console.log("Left image src:", imgLeft.src);
        console.log("Right image src:", imgRight.src);
        updateTitle(index);
        updateDescription(index);
    }

    function updateTitle(index) {
        console.log("Updating title to index:", index);
        document.getElementById("esthetic-treatment-title").innerText = titleText[index];
    }

    
    function updateDescription(index) {
        console.log("Updating description to index:", index);
        document.getElementById("esthetic-treatment-description").textContent = descriptionText[index];
    }

    // Add event listeners to buttons (ensure they are present in the HTML)
    document.getElementById("prev-btn").addEventListener("click", function() {
        console.log("Previous button clicked");
        currentIndex = (currentIndex - 1 + leftImages.length) % leftImages.length; // Wrap around to the last image if needed
        updateImages(currentIndex);
    });

    document.getElementById("next-btn").addEventListener("click", function() {
        console.log("Next button clicked");
        currentIndex = (currentIndex + 1) % leftImages.length; // Wrap around to the first image if needed
        updateImages(currentIndex);
    });
});
