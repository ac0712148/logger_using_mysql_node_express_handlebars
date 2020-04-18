$(() => {
    $(".create-form").on("submit", (event) => {
        event.preventDefault();

        const newBurger = {
            burger_name: $("ba").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
        }).then(() => {
            location.reload();
        });
    });
});