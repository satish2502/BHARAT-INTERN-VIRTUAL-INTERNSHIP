$(document).ready(function () {
    $("#convertButton").click(function () {
        const celsius = parseFloat($("#celsiusInput").val());

        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            const kelvin = celsius + 273.15;
            $("#fahrenheitResult").text(fahrenheit.toFixed(2));
            $("#kelvinResult").text(kelvin.toFixed(2));
        }
    });

    $("#resetButton").click(function () {
        $("#celsiusInput").val('');
        $("#fahrenheitResult").text('-');
        $("#kelvinResult").text('-');
    });
});
