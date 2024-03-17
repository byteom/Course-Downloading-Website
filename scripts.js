document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchInput").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            filterCourses();
        }
    });

    document.getElementById("categoryFilter").addEventListener("change", function() {
        filterCourses();
    });
});

function filterCourses() {
    var searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
    var categoryFilter = document.getElementById("categoryFilter").value.toLowerCase();
    var courseCards = document.querySelectorAll(".course-card");

    courseCards.forEach(function(card) {
        var title = card.querySelector("h2").innerText.toLowerCase();
        var category = card.getAttribute("data-category").toLowerCase();

        if ((title.includes(searchInput) || searchInput === "") && (category === categoryFilter || categoryFilter === "all")) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function showDetails(courseId) {
    // You can implement the logic to show details of the course with the given ID here
    console.log("Showing details for course with ID: " + courseId);
    // For example, you could redirect to a new page or display a modal with more information
}
