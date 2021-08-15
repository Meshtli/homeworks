describe("luck_ticket", function() {
    it("Interval: min: 1, max: 112. Expected output: winner: hard, simple: 0, hard: 1", function() {
        assert.equal({ winner: 'hard', tickets: { simple: 0, hard: 1 } }, luck_ticket({ min: 1, max: 112 }));
    });
    it("Interval: min: 112, max: 1. Expected output: winner: hard, simple: 0, hard: 1", function() {
        assert.equal({ winner: 'hard', tickets: { simple: 0, hard: 1 } }, luck_ticket({ min: 112, max: 1 }));
    });
    it("Interval: min: 1, max: 2. Expected output: winner: both,  simple: 0, hard: 0 ", function() {
        assert.equal({ winner: 'both', tickets: { simple: 0, hard: 0 } }, luck_ticket({ min: 1, max: 2 }));
    });
    it("Interval: min: 'sss', max: 'sss'. Expected output: Error", function() {
        assert.deepEqual({ status: 'failed', reason: 'TypeError: Max and min must be numbers.' }, luck_ticket({ min: 'sss', max: 'sss' }));
    });
    it("Interval: min: -1, max: 0. Expected output: Error", function() {
        assert.deepEqual({ status: 'failed', reason: 'RangeError: Min and max must be integer and greater than 0 and less than 1000000.' }, luck_ticket({ min: -1, max: 0 }));
    });
    it("Interval: min: 2.3, max: 10. Expected output: Error", function() {
        assert.deepEqual({ status: 'failed', reason: 'RangeError: Min and max must be integer and greater than 0 and less than 1000000.' }, luck_ticket({ min: 2.3, max: 10 }));
    });
    it("Empty obj. Expected output: Error", function() {
        assert.deepEqual({ status: 'failed', reason: 'Error: Function running with incorrect parameters.' }, luck_ticket({}));
    });

});