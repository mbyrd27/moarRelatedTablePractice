export const CorporateInfluencer = (corpList) => {
    return `<div class="politician__influencers">
    <h4>Influencing Corporations</h4>
    <ul>
    ${
        corpList.map(corp =>`<li>${corp}</li>`).join('')
    }
    </ul>
    </div>`
}