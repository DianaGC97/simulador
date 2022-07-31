const API_URL = "https://my-json-server.typicode.com/DianaGC97/db.json/db";

axios
  .get(API_URL)
  .then((res) => {
    console.log('res::', res)
    showAllTasks(res.data.dates)
  })
  .catch((err) => console.error(err));

const showAllTasks = (data) => {
  data.map((task) => {
    console.log(task.title)
    createTask(task)
  });
};

const createTask = (task) => {
  // Creamos la estructura de las tarjetas desde el JS
  let newTask = document.createElement("article");
  //Creamos un elemento article y le pasamos una clase card-task
  newTask.classList.add("new-card");

  // Creamos un H3 para el titulo de las tarjetas
  let title = document.createElement("h3");
  // le añadimos una clase card-task__title
  title.classList.add("new-card__title");
  // y le añadimos el title de nuestra API "task.title"
  title.innerText = task.title;

  //creamos una etiqueta parrafo
  let responsible = document.createElement("p");
  //le añadimos una clase card-task__responsible
  responsible.classList.add("new-card__responsible");
  // le pasamos los datos del responsable de la tarea desde la API
  responsible.innerHTML = `<span class="new-card__responsible--tag-creator">Responsable:</span> ${task.person}`;

  // Creamos una etiqueta parrafo
  let details = document.createElement("p");
  //le añadimos una clase card-task__details
  details.classList.add("new-card__details");
  // Le pasamos los datos desde la API y los imprimimos en las tarjetas
  details.innerHTML = `<span class="new-card__details--task-details">Descripción:</span> ${task.description} `;

  //Creamos una etiqueta parrafo para crear la fecha
  let date = document.createElement("p");
  //le pasamos la clase card-task__date
  date.classList.add("new-card__date");
  // Le añadimos la fecha que traemos desde la API utilizando los template string
  // date.innerHTML = `<span class="new-card__date--tag-date">Plazo:</span> ${dateFormat(
  //   task.
  date.innerHTML = `<span class =new-card__date--tag-date">Plazo</span> ${dateFormat(task.date)}`;


  let create = document.createElement("p");
  create.classList.add("new-card__date");
  create.innerHTML = `<span class="new-card__date--tag-date">Creación:</span> ${dateFormat(
    task.cate
  )}`;

  newTask.appendChild(title);
  newTask.appendChild(responsible);
  newTask.appendChild(details);
  newTask.appendChild(date);
  newTask.appendChild(create);

  // Referenciamos por medio del ID las columnas
  let columnRun = document.querySelector("#runTasks");
  let columnProcess = document.querySelector("#processTasks");
  let columnMade = document.querySelector("#madeTasks");

  // Preguntamos dependiendo el state que trae nuestra API es igual a to-do lo ubique en esa columna
  if (task.state === "run") {
    columnRun.appendChild(newTask);
  }
  if (task.state === "process") {
    columnProcess.appendChild(newTask);
  }
  if (task.state === "finished") {
    columnMade.appendChild(newTask);
  }
};
