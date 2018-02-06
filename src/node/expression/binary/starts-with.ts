import TwingNodeExpressionBinary from "../binary";
import TwingCompiler from "../../../compiler";

class TwingNodeExpressionBinaryStartsWith extends TwingNodeExpressionBinary {
    // execute(left: any, right: any): any {
    //     return (typeof left === 'string' && typeof right === 'string' && (right.length < 1 || left.startsWith(right)));
    // }

    compile(compiler: TwingCompiler) {
        let left = compiler.getVarName();
        let right = compiler.getVarName();

        compiler
            .raw('(() => {')
            .raw(`let ${left} = `)
            .subcompile(this.getNode('left'))
            .raw('; ')
            .raw(`let ${right} = `)
            .subcompile(this.getNode('right'))
            .raw('; ')
            .raw(`return typeof ${left} === 'string' && typeof ${right} === 'string' && (${right}.length < 1 || ${left}.startsWith(${right}));`)
            .raw('})()')
        ;
    }

    operator(compiler: TwingCompiler) {
        return compiler.raw('');
    }
}

export default TwingNodeExpressionBinaryStartsWith;