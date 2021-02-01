let politicianBills = []

export const getPoliticianBills = () => fetch('http://localhost:8088/politicianBills')
    .then(resp => resp.json())
    .then(data => politicianBills = data)

export const usePoliticianBills = () => politicianBills.slice()