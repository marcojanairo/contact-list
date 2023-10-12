function fetchAndFormat() {
    const urlAPI = 'https://randomuser.me/api/?results=99';
    
// Fetch data from API
    fetch(urlAPI)
      .then(response => response.json())
      .then(data => {
        //format the api response
        const formatData = data.results.map(user => {
          return {
            name: `${user.name.first} ${user.name.last}`,
            image: user.picture.thumbnail,
            joined: user.registered.date.slice(0, 10), //slice the first 10 characters of date
          };
        });         
        console.log(formatData);
      })
  }
  
// Call fetchandFormat function
fetchAndFormat();
  
//Next steps done: 1) Copy and paste the output to a new dummy js file (now deleted to avoid confusion), and then use Cmd + Shift + L to wrap quotation marks around name, image, and joined, copy and paste the new data to the existing data.js file