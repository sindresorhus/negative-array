import {expectType, expectError} from 'tsd';
import negativeArray = require('.');

const readonlyArray = ['🐴', '🎂', '🌈'] as const;
const array = ['🐴', '🎂', '🌈'];

expectType<readonly string[]>(negativeArray(readonlyArray));
expectError(negativeArray(readonlyArray).push('🦄'));
expectType<string[]>(negativeArray(array));
