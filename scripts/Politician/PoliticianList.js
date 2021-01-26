import { getPoliticians, usePoliticians } from './PoliticianProvider.js'
import { Politician } from './Politician.js'

const render = (politicians) => {
    const contentTarget = document.querySelector('.politicians')
    contentTarget.innerHTML = politicians.map(politician => Politician(politician)).join('')
}

export const PoliticianList = () => {
    getPoliticians()
        .then(() => {
            const allPoliticians = usePoliticians()
            render(allPoliticians)
        })
}

