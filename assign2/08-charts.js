// Enter your code below
console.log('Enter your code here');

const url = 'https://swapi.dev/api/people/';

var blue, yellow, red, teal, purple, orange, unknown, colors;
blue = yellow = red = teal = purple = orange = unknown = 0;

//fetch the api
let fetchData = async function() {
    let response = await fetch(url);
    let data = await response.json();

    //count number eye colors
    for (var i=0; i < data.results.length; i++) { 
      if(data.results[i].eye_color == 'blue') {
        blue++;
      } 
      else if(data.results[i].eye_color == 'yellow') {
        yellow++;
      } 
      else if(data.results[i].eye_color == 'red') {
        red++;
      } 
      else if(data.results[i].eye_color == 'teal') {
        teal++;
      } 
      else if(data.results[i].eye_color == 'purple') {
        purple++;
      } 
      else if(data.results[i].eye_color == 'orange') {
        orange++;
      } 
      else {
        unknown++;
      } 
    }
    colors = [blue, yellow, red, teal, purple, orange, unknown] ;

    var ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Blue', 'Yellow', 'Red', 'Teal', 'Purple', 'Orange', 'Unknown'],
          datasets: [{
              label: 'Eye Color Count',
              data: colors,
              backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(199, 199, 199, 0.8)',
              ],
              borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(159, 159, 159, 1)',
              ]
          }]
      }
    });
};

fetchData();
