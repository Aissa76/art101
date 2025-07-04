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

// Function to fetch and display a Pokemon
function fetchPokemon(apiURL) {
    $.ajax({
        url: apiURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            let outputHTML = `
            <h3>${data.name.toUpperCase()}</h3>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p><strong>Height:</strong> ${data.height}</p>
            <p><strong>Weight:</strong> ${data.weight}</p>
            <p><strong>Abilities:</strong> ${data.abilities.map(ability => ability.ability.name).join(",")}</p>
        `;
        $("#output").html(outputHTML).fadeIn(330);
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
        $("#output").html(`<p>Error fetching data.Try again later.</p>`).fadeIn(300);
    }
    });
}

// Button for partners favorite (change the name to theirs)
$("#partnerBtn").click(function () {
    fetchPokemon("https://pokeapi.co/api/v2/pokemon/piplup");
});

//Button for a random Pokemon
$("#randomBtn").click(function () {
    let randomId = Math.floor(Math.random() * 1010) + 1; //ID range from 1-1010
    let url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
    fetchPokemon(url);
});

// NASA Picture of the day
$("#nasaBtn").click(function () {
    console.log("Fetching NASA Picture of the Day...");

    $.ajax({
        url: "https://api.nasa.gov/planetary/apod",
        type: "GET",
        dataType: "json",
        data: {
            api_key: "DEMO_KEY" // Replace with your real key if needed
        },
        success: function (data) {
            console.log("NASA data:", data);

            let outputHTML = `
            <h3>${data.title}</h3>
            <p>${data.date}</p>
            ${data.media_type === "image" ? `<img src="${data.url}" alt="${data.title}" style="max-width:100%;">` : `<iframe src="${data.url}" frameborder="0" width="100%" height="400px"></iframe>`}
            <p>${data.explanation}</p>
            `;

            $("#nasa-output").html(outputHTML).fadeIn(300);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
            $("#nasa-output").html("<p>Failed to load NASA content.</p>").fadeIn(300);
        }
    });
});