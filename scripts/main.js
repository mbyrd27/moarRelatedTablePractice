import { CorporationList } from './Corporation/CorporationList.js'
import { PacList } from './Pacs/PacList.js'
import { PoliticianList } from './Politician/PoliticianList.js'
import { BillList } from './Bills/BillList.js'
import { RelatedPacList } from './Pacs/RelatedPacList.js'
import { findStuff } from './Corporation/PoliticianInfluencerList.js'

import { getPoliticians } from './Politician/PoliticianProvider.js'
import { getPoliticianBills } from './Bills/PoliticianBillProvider.js'
import { getBills } from './Bills/BillProvider.js'
import { getInterests } from './Interests/InterestProvider.js'
import { getPacDonations } from './Pacs/PacDonationProvider.js'
import { getPacs } from './Pacs/PacProvider.js'
import { getCorporations } from './Corporation/CorporationProvider.js'
import { getCorporateInterests } from './Corporation/CorporateInterestProvider.js'
import { getCorporateDonations } from './Corporation/CorporateDonationProvider.js'



getPoliticians()
    .then(getPoliticianBills)
    .then(getBills)
    .then(getInterests)
    .then(getPacs)
    .then(getPacDonations)
    .then(getCorporations)
    .then(getCorporateInterests)
    .then(getCorporateDonations)
    .then(PoliticianList)
    .then(BillList)
    .then(RelatedPacList)
    .then(findStuff)
    
    
//CorporationList()
//PacList()