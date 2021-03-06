const {
    TwingNodeExpressionBinaryNotEqual,
    TwingNodeExpressionConstant
} = require('../../../../../../../../build/index');
const TwingTestMockCompiler = require('../../../../../../../mock/compiler');

const tap = require('tape');

tap.test('node/expression/binary/not-equal', function (test) {
    test.test('constructor', function (test) {
        let left = new TwingNodeExpressionConstant(1, 1);
        let right = new TwingNodeExpressionConstant(2, 1);
        let node = new TwingNodeExpressionBinaryNotEqual(left, right, 1);

        test.same(node.getNode('left'), left);
        test.same(node.getNode('right'), right);

        test.end();
    });

    test.test('compile', function (test) {
        let left = new TwingNodeExpressionConstant(1, 1);
        let right = new TwingNodeExpressionConstant(2, 1);
        let node = new TwingNodeExpressionBinaryNotEqual(left, right, 1);
        let compiler = new TwingTestMockCompiler();

        test.same(compiler.compile(node).getSource(), '!Runtime.compare(1, 2)');

        test.end();
    });

    test.end();
});
