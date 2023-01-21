import type { Meta, Story } from '@storybook/react';
import React from 'react';
import { useMemo } from 'react';
import { Input } from '../../src/';
import { InputStore } from '../../src/components/input/input.store';

const meta: Meta = {
  title: 'Components/Input',
  argTypes: {},
};

export default meta;

//* - 1 ---------------------------------------------------------------- *//

const Template: Story = (props) => {
  const { ...rest } = props;

  const store = useMemo(() => new InputStore({ placeholder: 'aaaaa' }), []);

  return <Input store={store} {...rest} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'input',
  placeholder: 'ggd',
  value: 'aaa',
};
