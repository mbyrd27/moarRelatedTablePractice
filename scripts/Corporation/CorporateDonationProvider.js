let corporateDonations = []

export const getCorporateDonations = () => fetch('http://localhost:8088/corporatedonations')
    .then(resp => resp.json())
    .then(data => corporateDonations = data)

export const useCorporateDonations = () => corporateDonations.slice()