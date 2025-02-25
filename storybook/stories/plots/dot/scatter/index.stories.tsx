import { storiesOf } from '@storybook/react';

import Classified from './Classified';
import Monochrome from './Monochrome';

storiesOf('散点图', module)
  .add('分类散点', () => <Classified />)
  .add('全国城市与区县分类', () => <Monochrome />);
