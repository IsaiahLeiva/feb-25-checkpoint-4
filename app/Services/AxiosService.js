export const sandBoxApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/IsaiahL/quotes",
    timeout: 5000
});

export const quoteApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
    timeout: 5000
})


export const weatherApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
    timeout: 5000
})

export const imagesApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
    timeout: 5000
})

export const todosApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/ISAIAH/todos',
    timeout: 5000
})

