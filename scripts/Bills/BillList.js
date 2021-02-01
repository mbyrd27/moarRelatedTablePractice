import { usePoliticians } from '../Politician/PoliticianProvider.js'
import { usePoliticianBills } from './PoliticianBillProvider.js'
import { useBills } from './BillProvider.js'
import { useInterests } from '../Interests/InterestProvider.js'
import { Bill } from './Bill.js'

const render = (politicians, bills, interests, politicianBills) => {
    let contentTarget = ''
    politicians.map(politician => {
        contentTarget = document.querySelector(`#politician--${politician.id}`)
        const billList = politicianBills.filter(pb => pb.politicianId === politician.id)
            .map(bList => {
                const interestId = bills.find(bill => bill.id === bList.billId).interestId
                return {
                   billName: bills.find(bill => bill.id === bList.billId).name,
                   interest: interests.find(interest => interest.id === interestId).about
                }
            })
        contentTarget.innerHTML += Bill(billList)
    }).join('')
}

export const BillList = () => {
    const allPoliticians = usePoliticians()
    const allPoliticianBills = usePoliticianBills()
    const allBills = useBills()
    const allInterests = useInterests()
    render(allPoliticians, allBills, allInterests, allPoliticianBills)
}