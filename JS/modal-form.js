const form = document.querySelector('#formNewTask');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formData = ev.target;
    const title = formData.titleTask.value;
    const responsable = formData.responsibleTask.value;
    const data = {
        title,
        person: responsable,
        state: 'to-do',
        "date": "02-06-2022",
        "created": "31-12-2022"
    };

    console.log('DATA::', data);

    const API_URL = "https://my-json-server.typicode.com/DianaGC97/date.json/dates";

    fetch(`${API_URL}/tasks`, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('response from fetch POST::', data);
            // showAllTasks(data)
        }).catch(error => console.log("Error::", error))


});