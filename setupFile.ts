// Storybook's preview file location
import * as globalStorybookConfig from './.storybook/preview.mjs';

import { setProjectAnnotations } from '@storybook/react';

setProjectAnnotations(globalStorybookConfig);
