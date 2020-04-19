$(() => {
    console.log("In Burgers...")
    $(".change-devour").on("click", function() {

        const burgerId = $(this).data("id");
        $.ajax(`/api/burgers/${burgerId}`, {
            type: "PUT"
        }).then(() => {
            location.reload();
        });

    });

    $("#newBurger").on("click", (event) => {
        event.preventDefault();

        const newBurger = {
            burger_name: $("#newBurger").val().trim()
        };
        console.log("New Burger: " + newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
        }).then(() => {
            location.reload();
        });
    });
});