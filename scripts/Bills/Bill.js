export const Bill = (bills) => {
    return `<div class="politician__bills">
        <h4>Sponsored Legislation</h4>
        ${
            (bills.length > 0) ? 
            bills.map(bill => `<div>${bill.billName} Interest: (${bill.interest})</div>`).join('') :
            `<div>None</div`
        }
        </div>`
}
