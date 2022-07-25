import { showAllTasks } from "./taskFunctions";

const API_URL = "https://my-json-server.typicode.com/DianaGC97/date.json/dates";

export default function postTask(data) {
  fetch(`${API_URL}/tasks`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log('response from fetch POST::', data);
      // showAllTasks(data)
    });
}


