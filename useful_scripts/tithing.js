let catherineWeekly = 575;
let charlesWeekly = 717.21;

let annualRevenue = (charlesWeekly + catherineWeekly) * 52;

let tithe = (annualRevenue / 52) * 0.1;
console.log(`
Catherine makes roughly $${catherineWeekly} each week\n
Charles makes roughly $${charlesWeekly} each week\n
Together they make $${catherineWeekly + charlesWeekly} each week\n
So they should tithe $${tithe} each week\n
Which would be $${tithe * 52} each year
`);
