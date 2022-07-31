const form = document.querySelector('#formNewTask');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formData = ev.target;
    // const responsable = formData.responsibleTask.value;
    const data = {
        title: formData.titleTask.value,
        person: formData.responsibleTask.value,
        description: formData.descriptionTask.value,
        date: formData.dateTask.value,
        // date: Number(moment().add(formData.dateTask.value, 'days').format('X')),
        created: Number(moment().format("X")),
        state: 'run'
    };


    axios.post(`${API_URL}/tasks/dates`, data)
        .then((res) => {
            //Mandamos la información a la API
            createTask(res.data);
            //Reseteamos el formulario
            formData.reset();
        })
        .catch((err) => console.error(err));


});