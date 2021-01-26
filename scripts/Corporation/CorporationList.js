import { getCorporations, useCorporations } from './CorporationProvider.js'
import { Corporation } from './Corporation.js'

const render = (corporation) => {
    const contentTarget = document.querySelector('.corporations')
    contentTarget.innerHTML = corporation.map(corp => Corporation(corp)).join('')
}

export const CorporationList = () => {
    getCorporations()
        .then(() => {
            const allCorporations = useCorporations()
            render(allCorporations)
        })
}