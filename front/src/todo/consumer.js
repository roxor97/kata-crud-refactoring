const HOST_API = window._env.HOST_API || "http://127.0.0.1:8080/api/"
export default {
    findAll : async (listId) => {
        return fetch(HOST_API + listId+"/todos")
            .catch(error => console.error('Error:', error))

    },

    save : async (listId, request) => {
        return fetch(HOST_API + listId+"/todo", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch(error => console.error('Error:', error))

    },

    update : async (listId, request) => {
        return fetch(HOST_API + listId+"/todo", {
            method: "PUT",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch(error => console.error('Error:', error))

    },

    delete : async (id) => {
        return fetch(HOST_API + id+"/todo", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch(error => console.error('Error:', error))
    },
};