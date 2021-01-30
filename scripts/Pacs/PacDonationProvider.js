let pacDonations = []

export const getPacDonations = () => fetch('http://localhost:8088/pacDonations')
    .then(resp => resp.json())
    .then(data => pacDonations = data)

export const usePacDonations = () => pacDonations.slice()