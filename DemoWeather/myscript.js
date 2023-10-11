$(document).ready(function () {
    $("#reset").click(function (e) {
        location.reaload();
    });

    $("#submitButton").click(function (e) {
        $.ajax({
            type: "POST",
            url: http://api.openweathermap.org/data/2.5/group?id=1636544,1623446,1648340,1636544,2654675,2988507&appid=de6d52c2ebb7b1398526329875a49c57&units=metric
            dataType : "json",
            success: function (result, status, xhr) {
                res = CreateWeatherJson(result);

                $("weatherTable").append("<thead><tr><th>City Name</th><th>Temperature (&#8451;)</th><th>Min Temp</th><th>Max Temp</th><th>Humidity</th><th>Pressure</th></thead></table>");

                $('weatherTable').DataTable({
                    data: JSON.parse(res),
                    columns: [
                        {data: 'cityId'}
                    ]
                })
            }
        });
    });
});