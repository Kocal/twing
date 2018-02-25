import {TwingNodeExpressionBinary} from "../binary";
import {TwingCompiler} from "../../../compiler";

export class TwingNodeExpressionBinaryEqual extends TwingNodeExpressionBinary {
    compile(compiler: TwingCompiler) {
        compiler
            .raw('Twing.twingCompare(')
            .subcompile(this.getNode('left'))
            .raw(', ')
            .subcompile(this.getNode('right'))
            .raw(')')
        ;
    }
}
