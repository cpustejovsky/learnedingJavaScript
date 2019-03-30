const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
};

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave'
};

function* teamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    const testingTeamGenerator = testingTeamIterator(team.testingTeam);
    yield* testingTeamGenerator;
}

function* testingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}

const names = [];
for (let name of teamIterator(engineeringTeam)) {
    names.push(name);
};
console.log(names); //[ 'Jill', 'Alex', 'Dave' ]