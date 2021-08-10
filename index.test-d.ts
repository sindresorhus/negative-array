import {expectType, expectError, expectAssignable} from 'tsd';
import negativeArray from './index.js';

const readonlyArray = ['🐴', '🎂', '🌈'] as const;
const array = ['🐴', '🎂', '🌈'];

expectAssignable<readonly string[]>(negativeArray(readonlyArray));
expectError(negativeArray(readonlyArray).push('🦄'));
expectType<string[]>(negativeArray(array));
