import { getPoliticians, usePoliticians } from './PoliticianProvider.js'
import { getPacDonations, usePacDonations } from '../Pacs/PacDonationProvider.js'
import { getPacs, usePacs } from '../Pacs/PacProvider.js'
import { summarize } from '../Pacs/PacList.js'
import { Politician } from './Politician.js'

const render = (politicians, pacDonations, pacs) => {
    const contentTarget = document.querySelector('.politicians')
    contentTarget.innerHTML = politicians.map(politician => {
        let donationList = pacDonations.filter(pd => politician.id === pd.politicianId)
        .map(donation => {
            return {
            id: donation.pacId,
            amount: donation.amount,
            pacName: pacs.find(pac => pac.id === donation.pacId).registeredName
            }
        })
        donationList = summarize(donationList)
        return Politician(politician, donationList)
    }).join('')
}

export const PoliticianList = () => {
    getPoliticians()
        .then(getPacDonations)
        .then(getPacs)
        .then(() => {
            const allPoliticians = usePoliticians()
            const allPacs = usePacs()
            const allPacDonations = usePacDonations()
            render(allPoliticians, allPacDonations, allPacs)
        })
}

