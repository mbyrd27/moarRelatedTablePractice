export const Pac = (pac, donations) => {
    return `<section class="pac">
    <header class="pac__name">
        <h1>${pac.registeredName}</h1>
    </header>
    <div class="pac__info">
        <div>${pac.address}</div>
    </div>
    <div class="pac__donors">
        <h4>Donors</h4>
        <ul>
            ${donations.map(donation => {
                return `<li><strong>${donation.companyName}: </strong>
                Total Donations: $${donation.amount.toFixed(2)}</li>`}).join('')
            }
        </ul>
    </div>
    </section>`
}