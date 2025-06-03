/*
    lab15.js - Working with AJAX and PokéAPI
    Requiremnets: jQuery must be loaded.

    Author: Aissa Ben-Mimoun <abenmimo@ucsc.edu>
    Date: 6/2/25
*/

$("#activate").click(function () {
    console.log("Button clicked");

    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/snorlax",
        type: "GET",
        dataType: "json",
        success: function (data) {
            console.log("API data recieved:", data);

            // Build HTML output
            let outputHTML = `
                <h3>${data.name.toUpperCase()}</h3>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p><strong>Height:</strong> ${data.height}</p>
                <p><strong>Weight:</strong> ${data.weight}</p>
                <p><strong>Abilities:</strong> ${data.abilities.map(ability => ability.ability.name).join(",")}</p>
            `;

            // Inject output into the page
            $("#output").html(outputHTML).fadeIn(300);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
            $("#output").html(`<p>Error fetching data. Try again later.</p>`);
        }
    });
});