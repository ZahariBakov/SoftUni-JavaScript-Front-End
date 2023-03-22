function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   
   function onClick () {
      const bestRestaurantOutput = document.querySelector('#bestRestaurant > p');
      const bestWorkersOutput = document.querySelector('#workers > p');
      const input = JSON.parse(document.querySelector('textarea').value);
      
      let restaurants = {};

      //  Create restaurant and employees:
      Array.from(input).forEach(r => {
         let [name, employees] = r.split(' - ');
         employees = employees.split(', ');
         
         // Create current employee, and add to restaurant, sum best salary:

         // Create current employee:
         employees.forEach(data => {
            let [workerName, salary] = data.split(' ');
            salary = Number(salary);

            // Create current restaurant:
            if (!restaurants.hasOwnProperty(name)) {
               restaurants[name] = {'workers': {}, 'average': 0, 'best': 0, 'total': 0};
            }

            // Adding worker to restaurant:
            restaurants[name]['workers'][workerName] = salary;
            restaurants[name]['total'] += salary;

            // Adding best salary:
            if (salary > restaurants[name]['best']) {
               restaurants[name]['best'] = salary.toFixed(2);
            }
         })
      }) 
      
      // Set average salary:
      for (const restaurant of Object.entries(restaurants)) {
         const totalSum = restaurant[1]['total'];
         const workersNum = Object.keys(restaurant[1]['workers']).length;
         const average = (totalSum / workersNum).toFixed(2);
         restaurant[1]['average'] = average;
      }
      
      // Sort restaurant by average salary:
      let sortedRestaurants = Object.keys(restaurants).sort((a, b) => restaurants[b]['average'] - restaurants[a]['average']);

      // Get best restaurant:
      let bestSortedRestaurant = sortedRestaurants[0];
      let averageSalary = restaurants[bestSortedRestaurant]['average'];
      let bestSalary = restaurants[bestSortedRestaurant]['best'];

      // Add best restaurant to output
      bestRestaurantOutput.textContent = `Name: ${bestSortedRestaurant} Average Salary: ${averageSalary} Best Salary: ${bestSalary}`;

      // Add workers list to best restaurant:
      let bestWorkers = [];
      Object.entries(restaurants[bestSortedRestaurant]['workers']).forEach(([a, b]) => {
         bestWorkers.push([a, b])
      })

      // Sorted workers:
      bestWorkersOutput.textContent = bestWorkers
         .sort((a, b) => b[1] - a[1])
         .map(([a, b]) => `Name: ${a} With Salary: ${b}`)
         .join(' ');
   }
}