let corporateInterests = []

export const getCorporateInterests = () => fetch('http://localhost:8088/corporateInterests')
    .then(resp => resp.json())
    .then(data => corporateInterests = data)

export const useCorporateInterests = () => corporateInterests.slice()