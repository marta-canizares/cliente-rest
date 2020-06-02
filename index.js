const restPhoneApi = axios.create({
    baseURL: 'https://stark-depths-07561.herokuapp.com/api/persons'
})
const getAllPhone = () => {
    restPhoneApi
        .get()
        .then(responseFromApi => {
            console.log(responseFromApi.data);
            document.write(JSON.stringify(responseFromApi.data))
        })
        .catch(err => console.log('error', err));
}
document.getElementById('theButton').onclick = getAllPhone;

// crear un servidor para hacer pruebas
