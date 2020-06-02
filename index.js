
const restPhoneApi = axios.create({
    baseURL: 'https://stark-depths-07561.herokuapp.com'
})

const getAllPhone = () => {
    restPhoneApi
        .get('api/persons')
        .then(responseFromApi => {
            console.log(responseFromApi.data);
            document.write(JSON.stringify(responseFromApi.data))
        })
        .catch(err => console.log('error', err));
}

const hacerUnPost = () => {
    const credentials = {
        user: document.getElementById('user').value,
        password: document.getElementById('password').value,
    }
    restPhoneApi
        .post('login', credentials)
        .then(res => console.log('login successful'))
        .catch(e => console.log(e))
}

const hacerUnLogOut = () => {
    restPhoneApi
        .get('logout')
        .then(responseFromApi => {
            console.log(responseFromApi.data);
        })
        .catch(err => console.log('error', err));
}


// el evento onclick
document.getElementById('theButton').onclick = getAllPhone;
document.getElementById('login').onclick = hacerUnPost;
document.getElementById('logout').onclick = hacerUnLogOut;