const assert = require('assert');
const User = require('../src/user.js');

describe('Validating records', () => {
    it('requires a user\'s name', () => {
        const user = new User ({ name: undefined });
        const validationResult = user.validateSync();
        console.log(validationResult);
        const { message } = validationResult.errors.name;
        assert(message === 'Name is required on a form');
    });

    it('requires a user\'s name longer than 2 characters', () => {
        const user = new User({ name: 'A' });
        const validationResult = user.validateSync();
        const { message } = validationResult.errors.name;
        assert(message === 'Name must be longer than 2 characters.');
    });
    //this is how validation usually works; not what is shown above.
    it('disallowed invalid records from being saved', (done) => {
        const user = new User({ name: 'Al'});
        user.save()
            /* Add in error catching logic when outside of a testing context*/
            .catch((validationResult) => {
                const { message } = validationResult.errors.name;
                assert(message === 'Name must be longer than 2 characters.');
                done();
            });
    });
});