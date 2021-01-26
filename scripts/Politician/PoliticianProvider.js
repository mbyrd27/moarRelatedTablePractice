let politicians = []

export const getPoliticians = () => {
    return fetch('http://localhost:8088/politicians')
        .then(resp => resp.json())
        .then(data => politicians = data)
}

export const usePoliticians = () => politicians.slice()