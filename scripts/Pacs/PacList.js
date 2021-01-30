import { getPacs, usePacs } from './PacProvider.js'
import { getCorporateDonations, useCorporateDonations } from '../Corporation/CorporateDonationProvider.js'
import { getCorporations, useCorporations } from '../Corporation/CorporationProvider.js'
import { Pac } from './Pacs.js'

const render = (pacs, donations, donors) => {
    const contentTarget = document.querySelector('.pacs')
    contentTarget.innerHTML = pacs.map(pac => {
        let donationList = donations.filter(donation => donation.pacId === pac.id)
            .map(dl => {
                return {
                id: dl.corporationId,
                amount: parseInt(dl.amount), 
                companyName: donors.find(corpDonors => corpDonors.id === dl.corporationId).company
                }
            })
        donationList = summarize(donationList)
        return Pac(pac, donationList)
    }).join('')
    
}

export const PacList = () => {
    getPacs()
        .then(getCorporations)
        .then(getCorporateDonations)
        .then(() => {
            const allPacs = usePacs()
            const allDonations = useCorporateDonations()
            const allCorporations = useCorporations()
            render(allPacs, allDonations, allCorporations)
        })
}

export const summarize = (resultArray) => {
    return resultArray.reduce((a, c, i) => {
        if (i === 0) {
            a.push(c)
            return a
        }
        if (c.id !== resultArray[i - 1].id) {
            a.push(c)
            return a
        }
        else {
            a[a.length - 1].amount += c.amount
            return a
        }
    }, [])
}