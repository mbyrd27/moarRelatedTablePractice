export const Politician = (politician) => {
    return `<section class="politician" id="politician--${politician.id}">
    <header class="politician__name">
        <h1>${politician.name.first} ${politician.name.last}</h1>
    </header>
    <div class="politician__info">
        <div>Age: ${politician.age}</div>
        <div>Represents: ${politician.district}</div>
    </div>
    <!--
    <div class="pac__donations">
        <h4>PAC Donations</h4>
        <ul>
        ${null
            //donations.map(donation => {
            //return `<li><strong>${donation.pacName}: </strong>
            //Total Donations: $${donation.amount.toFixed(2)}</li>`}).join('')
        //}
        }
        </ul>
    </div>
    -->
    </section>`    
}