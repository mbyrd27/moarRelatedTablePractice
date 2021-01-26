let corporations = []

export const getCorporations = () => fetch('http://localhost:8088/corporations')
    .then(resp => resp.json())
    .then(data => corporations = data)

export const useCorporations = () => corporations.slice()