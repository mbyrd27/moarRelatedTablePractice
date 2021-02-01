import { usePoliticians } from '../Politician/PoliticianProvider.js'
import { usePacs } from '../Pacs/PacProvider.js'
import { useBills } from '../Bills/BillProvider.js'
import { usePoliticianBills } from '../Bills/PoliticianBillProvider.js'
import { usePacDonations } from '../Pacs/PacDonationProvider.js'
import { useCorporateDonations } from './CorporateDonationProvider.js'
import { useCorporateInterests } from './CorporateInterestProvider.js'
import { useCorporations } from './CorporationProvider.js'

import { CorporateInfluencer } from './PoliticianInfluencers.js'



export const findStuff = () => {
    const politicians = usePoliticians()
    const bills = useBills()
    const pacDonationsToPoliticians = usePacDonations()
    const corpDonationsToPacs = useCorporateDonations()
    const corporateInterests = useCorporateInterests()
    const corporations = useCorporations()
    const politicianBills = usePoliticianBills()
    let contentTarget = ''
    politicians.map(politician => {
        let interestCorps = []
        contentTarget = document.querySelector(`#politician--${politician.id}`)
        politicianBills.filter(pb => pb.politicianId === politician.id)
        .map(bl => {
            const interestId = bills.find(bill => bill.id === bl.billId).interestId
            corporateInterests.filter(ci => ci.interestId === interestId)
                .map(corp => {
                    const corporateNames = corporations.find(cname => cname.id === corp.corporationId)
                    if (interestCorps.indexOf(corporateNames.company) === -1){
                        interestCorps.push(corporateNames.company)
                    }
                })
        })
        const thing = pacDonationsToPoliticians.filter(pd => pd.politicianId === politician.id)
            .map(donation => {
                corpDonationsToPacs.filter(cd => cd.pacId === donation.pacId)
                .map(corpDonations => {
                    const donationCorporateNames = corporations.find(c => c.id === corpDonations.corporationId)
                    if (interestCorps.indexOf(donationCorporateNames.company) === -1) {
                        interestCorps.push(donationCorporateNames.company)
                    }
                })
        })
        contentTarget.innerHTML += CorporateInfluencer(interestCorps)
        console.log(contentTarget)
    })
}

                
                




                
            
            

