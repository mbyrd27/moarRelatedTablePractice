import { usePacs } from './PacProvider.js'
import { usePoliticians } from '../Politician/PoliticianProvider.js'
import { usePacDonations } from './PacDonationProvider.js'
import { RelatedPacs } from './RelatedPacs.js'

let contentTarget = ''

const render = (politicians, pacs, donations) => {
    politicians.map(politician => {
        let pacNames = []
        contentTarget = document.querySelector(`#politician--${politician.id}`)
        const donationList = donations.filter(donation => donation.politicianId === politician.id)
            .map(dl => {
                const pacName = pacs.find(pac => pac.id === dl.pacId)
                if (pacNames.indexOf(pacName) === -1) {
                    pacNames.push(pacName)
                    return pacName.registeredName
                }
            })
            .filter(item => item !== undefined)
        contentTarget.innerHTML += RelatedPacs(donationList)
    }).join('')
}

export const RelatedPacList = () => {
    const allPoliticians = usePoliticians()
    const allPacs = usePacs()
    const allDonations = usePacDonations()
    render(allPoliticians, allPacs, allDonations)
}