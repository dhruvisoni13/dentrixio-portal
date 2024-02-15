export const fetchWrapper = {
    get,
    post,
    put,
    _delete
}

function handleResponse(response) {
    try {
        if(response && response.status === 401){
            window.location.href = '/';
        }else{
            return response.text().then(text => {
                const data = text && JSON.parse(text);
                // const data = text
                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }

                return data;
            });
        }
    } catch (error) {
        console.log("Error", error)
    }
}

async function get(url) {
    try {
        const requestObject = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // authorization: atob(localStorage.getItem('token'))
            },
        }
        const response = await fetch(url, requestObject);
        return handleResponse(response);
    } catch (error) {
        console.log("Error", error)
    }
}

async function post(url, body) {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // authorization: atob(localStorage.getItem('token'))
            },
            body: JSON.stringify(body)
        };
        const response = await fetch(url, requestOptions);
        return handleResponse(response);
    } catch (error) {
        console.log("Error", error)
    }
}

async function put(url, body) {
    try {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // authorization: atob(localStorage.getItem('token'))
            },
            body: JSON.stringify(body)
        };
        const response = await fetch(url, requestOptions);
        return handleResponse(response);
    } catch (error) {
        console.log("Error", error)
    }

}

async function _delete(url,body) {
    console.log(body);
    try {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                // authorization: atob(localStorage.getItem('token'))
            },
            body: JSON.stringify(body)
        };
        const response = await fetch(url, requestOptions);
        return handleResponse(response);
    } catch (error) {
        console.log("Error", error)
    }
}