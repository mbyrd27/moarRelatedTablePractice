export const RelatedPacs = (pacs) => {
    return `<div class="politician__funders">
    <h4>Related PACs</h4>
    <ul>
        ${
            (pacs.length > 0) ?
            pacs.map(pac => `<li>${pac}</li>`).join('') :
            `<li>None</li>`
        }`
}
