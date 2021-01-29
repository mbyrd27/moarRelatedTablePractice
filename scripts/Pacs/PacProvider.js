let pacs = []

export const getPacs = () => fetch('http://localhost:8088/pacs')
    .then(resp => resp.json())
    .then(data => pacs = data)

export const usePacs = () => pacs.slice()