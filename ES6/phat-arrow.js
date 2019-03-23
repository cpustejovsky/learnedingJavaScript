const team = {
    members: [
        'Charles',
        'Catherine'
    ],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}.`;
        });
    }
};

console.log(team.teamSummary());

const fibonacci = n => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

const profile = {
    name: 'Alex',
    getName: function(){ return this.name}
};

console.log(profile.getName());