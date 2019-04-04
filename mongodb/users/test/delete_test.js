const assert = require('assert');
const User = require('../src/user.js');

describe('Deleting a user (but technically, Mongoose only removes something)', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'Joe'});
        joe.save()
            .then(() => done());
    });

    it('model instance remove', (done) => {
        joe.remove()
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {                                
                assert(user === null);
                done();
            });
    });

    it('class method deleteOne', (done) => {
        User.deleteOne({ name: 'Joe' })
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {
                assert(user === null);
                done();
            });
    });

    it('class method findOneAndDelete', (done) => {
        User.findOneAndDelete({ name: 'Joe' })
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {
                assert(user === null);
                done();
            });    
    });

    it('class method findByIdAndDelete', (done) => {
        User.findByIdAndDelete({ _id: joe._id })
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {
                assert(user === null);
                done();
            });
    });
});