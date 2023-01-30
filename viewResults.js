// View Results: functions that use the Session Data object to display pie charts
// all globals and helper functions
// Marion Haney, Spring 2023 Harry Potter Booth Game
// using tutorial: https://www.anychart.com/blog/2017/12/06/pie-chart-create-javascript/

// HTML source code for pie chart:
// <script src="https://cdn.anychart.com/releases/8.0.1/js/anychart-core.min.js"></script>
// <script src="https://cdn.anychart.com/releases/8.0.1/js/anychart-pie.min.js"></script>


// function to display a pie chart for ONE session's results
function showPieChart(sessionData) {
    anychart.onDocumentReady(function() {

        // set the data
        var data = [
            {x: "Gryffindor", value: sessionData.GRY, normal: {fill: "#740001"}},
            {x: "Hufflepuff", value: sessionData.HUF, normal: {fill: "#FFD800"}},
            {x: "Ravenclaw", value: sessionData.RAV, normal: {fill: "#0E1A40"}},
            {x: "Slytherin", value: sessionData.SLY, normal: {fill: "#1A472A"}}
        ];
      
        // create the chart
        var chart = anychart.pie();
      
        // set the chart title
        chart.title("Sorting Results");
      
        // add the data
        chart.data(data);
        // sort elements
        chart.sort("desc");
      
        // display the chart in the container
        chart.container('container');
        chart.draw();
      
      });
};
