let bills = []

export const getBills = () => fetch('http://localhost:8088/bills')
    .then(resp => resp.json())
    .then(data => bills = data)

export const useBills = () => bills.slice()