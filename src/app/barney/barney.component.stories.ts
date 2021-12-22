import { Story, Meta } from '@storybook/angular/types-6-0';
import { BarneyComponent } from './barney.component';

export default {
  title: 'Example/Barney',
  component: BarneyComponent,
} as Meta;

const Template: Story<BarneyComponent> = (args: BarneyComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
