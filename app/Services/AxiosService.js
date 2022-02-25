export const futuramaquoteApi = axios.create({
    baseURL: 'futuramaapi.herokuapp.com/api/quotes',
    timeout: 5000
})


export const sandBoxApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/IsaiahL/quotes",
    timeout: 5000
});