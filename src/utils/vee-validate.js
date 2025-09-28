import { defineRule } from 'vee-validate';
import * as rules from '@vee-validate/rules';

Object.keys(rules).forEach((rule) => {
  if (rule !== 'all') {
    defineRule(rule, rules[rule]);
  }
});