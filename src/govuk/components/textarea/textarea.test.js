import examples from './examples';
import { Textarea } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('textarea'),
});

examples.examples.forEach(example => {
  example.data.onChange = () => {}; // Dummy onChange handler. Doesn't need to do anything - is just there to suppress React warnings
});

diffComponentAgainstReferenceNunjucks('textarea', Textarea, examples);
