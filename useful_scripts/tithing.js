let catherineBiWeekly = 1150;
let catherineWeekly = (catherineBiWeekly * 26) / 52;
let charlesWeekly = 670;

let annualRevenue = charlesWeekly * 52 + catherineBiWeekly * 26;

let tithe = (annualRevenue / 52) * 0.1;
console.log(`
Catherine makes roughly $${catherineWeekly} each week\n
Charles makes roughly $${charlesWeekly} each week\n
Together they make $${catherineWeekly + charlesWeekly} each week\n
So they should tithe $${tithe} each week\n
Which would be $${tithe * 52} each year
`);
