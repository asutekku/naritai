let conjugationForms: any[] = require('./assets/dict/forms.json');

export class conjugator {
    private static verbTypes = ['v5u', 'v5k', 'v5g', 'v5s', 'v5t', 'v5m', 'v5b', 'v5n', 'v5r', 'v1'];
    private static verbEndings = ['う', 'く', 'ぐ', 'す', 'つ', 'む', 'ぶ', 'ぬ', 'る', 'る'];
    private static irregular = ['する', 'ある','いる', 'いく', 'くれる', 'いう', 'とう'];

    /**
     * conjugate a verb
     */
    public static conjugate(verb: string, type?: string) {
        type = type === undefined || type === '' ? 'v5' : type;
        let index: number, verbstem: string, ret: {}[] = [];
        if (type.toLowerCase().indexOf('v1') > -1) {
            index = conjugator.verbTypes.indexOf('v1');
            verbstem = verb.substring(0, verb.length - 1);
        } else if (this.irregular.includes(verb)) {
            verbstem = verb.substring(0, verb.length - 1);
            return;
        } else {
            let lastchar = verb.substring(verb.length - 1, verb.length);
            index = conjugator.verbEndings.indexOf(lastchar);
            if (verb.slice(-2) == 'する') {
                console.log('suru');
                index = 3;
                verbstem = verb.substring(0, verb.length - 2);
            } else {
                verbstem = verb.substring(0, verb.length - 1);
            }
        }
        let i: number, e: number = conjugationForms.length, form: any, specific: boolean;
        for (i = 0; i < e; i++) {
            form = conjugationForms[i];
            specific = form.forms[index];
            if (specific !== false) {
                ret.push({name: form.name, form: verbstem + specific});
            }
        }
        return ret;
    }

    /**
     * try to find the original verb for a conjugation
     */
    public static unconjugate(word: string, verbtype?: string) {
        return this.destep(word, verbtype);
    }

    private static process(word: string, seen: any[], aggregated: any[], entry: any, i: number, suffix: string, j: number) {
        if (!suffix.trim()) return;
        let re = new RegExp(suffix + '$');
        if (word.match(re)) {
            let newWord = word.replace(re, conjugator.verbEndings[j]);
            // special check for する
            if (newWord === 'す') {
                newWord = 'する';
            }
            // terminal check for orphan v1
            if (newWord === 'る') {
                return;
            }
            aggregated.push(this.destep(newWord, seen.concat({
                word: newWord,
                found: entry.name,
                verbType: conjugator.verbTypes[j]
            })));
        }
    };

    private static destep(word: string, seen?: any): any[] {
        seen = seen || [];
        let aggregated = [];
        conjugationForms.forEach(function (entry, i) {
            entry.forms.forEach(function (suffix, j) {
                conjugator.process(word, seen, aggregated, entry, i, suffix, j);
            });
        });
        if (aggregated.length === 0) return seen.slice();
        return aggregated;
    };

}
