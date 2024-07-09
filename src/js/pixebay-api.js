const apiKey = '44853221-20be0a035158c611166c29677';
const apiUrl = `https://pixabay.com/api/?key=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(result => {
    // Handle the result here
    console.log(result);
  })
  .catch(err => {
    // Handle the error here
    console.error('Error:', err);
  });
