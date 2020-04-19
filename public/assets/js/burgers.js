$(() => {
    console.log("In Burgers...")

    $(".new-burger").on("click", function() {
        event.preventDefault();

        const newBurger = {
            burger_name: $("#name").val().trim(),
            devoured: false
        };
        console.log("New Burger: " + newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
        }).then(() => {
            location.reload();
        });
    });

    $(".devour").on("click", function() {
        const id = $(this).data("id");
        const updateBurger = {
            devoured: 1
        };
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: updateBurger
        }).then(() => {
            location.reload();
        });
    })
});