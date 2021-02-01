let interests = []

export const getInterests = () => fetch('http://localhost:8088/interests')
    .then(resp => resp.json())
    .then(data => interests = data)

export const useInterests = () => interests.slice()