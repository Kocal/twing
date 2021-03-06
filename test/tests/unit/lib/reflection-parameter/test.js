const {TwingReflectionParameter} = require('../../../../../build/index');

const tap = require('tape');

tap.test('reflection-parameter', function (test) {
    test.test('isOptional', function (test) {
        let reflectionParameter = new TwingReflectionParameter('foo', 'bar');

        reflectionParameter.setOptional(true);

        test.true(reflectionParameter.isOptional());

        test.end();
    });

    test.end();
});
