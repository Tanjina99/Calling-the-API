document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");
    
    fetch("https://jsonplaceholder.typicode.com/todos") //calling the first API
        .then((response) => response.json()) //converting the data into JSON
        .then((data) => { //getting the actual data
            data.forEach((post) => {
                const listItem = document.createElement("li");
                listItem.textContent = post.id
                userList.appendChild(listItem)
            })
        })
        .catch((error) => console.log(error)) //if there is any error 

    fetch("https://jsonplaceholder.typicode.com/comments") //calling the second API
        .then((response) => response.json()) //converting the data into JSON
        .then((data) => { //getting the actual data
            data.forEach((post) => {
                const listItem = document.createElement("li");
                listItem.textContent = post.name
                userList.appendChild(listItem)
            })
        })
        .catch((error) => console.log(error)) //if there is any error 

        fetch("https://jsonplaceholder.typicode.com/users") //calling the second API
        .then((response) => response.json()) //converting the data into JSON
        .then((data) => { //getting the actual data
            data.forEach((post) => {
                const listItem = document.createElement("li");
                listItem.textContent = post.email
                userList.appendChild(listItem)
            })
        })
        .catch((error) => console.log(error)) //if there is any error
});
