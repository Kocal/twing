import {Test} from "tape";
import {TwingNodeExpressionConstant} from "../../../../../src/node/expression/constant";
import {TwingTestCompilerStub} from "../../../../compiler-stub";
import {TwingNodeExpressionName} from "../../../../../src/node/expression/name";
import {TwingNodeExpressionNullCoalesce} from "../../../../../src/node/expression/null-coalesce";
import {TwingNodeType} from "../../../../../src/node-type";

const tap = require('tap');

tap.test('node/expression/null-coalesce', function (test: Test) {
    test.test('compile', function (test: Test) {
        let compiler = new TwingTestCompilerStub();

        let left = new TwingNodeExpressionName('foo', 1);
        let right = new TwingNodeExpressionConstant(2, 1);
        let node = new TwingNodeExpressionNullCoalesce(left, right, 1);

        test.same(compiler.compile(node).getSource(), `((!!(// line 1
(context.has("foo")) &&  !(context.get("foo") === null))) ? (context.get("foo")) : (2))`);
        test.same(node.getType(), TwingNodeType.EXPRESSION_NULL_COALESCE);
        test.end();
    });

    test.end();
});
