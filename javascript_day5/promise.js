// const fetchPromise = fetch("https://jsonplaceholder.typicode.com/todos");
// fetchPromise.then(response => {
//   return response.json();
// }).then(people => {
//   const names = people.map(person => person.name).join("\n");
//   console.log(names);
// });
myRequest="https://jsonplaceholder.typicode.com/todos";
fetch(myRequest)
.then(response => {
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new TypeError("Oops, we haven't got JSON!");
    }
    return response.json();
 })
 .then(data => {
 })
 .catch(error => console.error(error));
