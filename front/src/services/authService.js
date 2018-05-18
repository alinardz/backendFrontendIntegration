const baseURL = 'http://localhost:3000/';

export function signup(userData) {
    return fetch(baseURL + 'signup', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData),
        })
        .then(res => {
            if (!res.ok) return Promise.reject(res);
            return res.json();
        })
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user))
            return user;
        });
}

export function login(userData) {
    return fetch(baseURL + 'login', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData),
            credentials: 'include'
        })
        .then(res => {
            if (!res.ok) return Promise.reject(res);
            return res.json();
        })
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user))
            return user;
        });
}