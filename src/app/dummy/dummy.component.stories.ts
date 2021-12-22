import { Story, Meta } from '@storybook/angular/types-6-0';
import { DummyComponent } from './dummy.component';

export default {
  title: 'Example/Dummy',
  component: DummyComponent,
} as Meta;

const Template: Story<DummyComponent> = (args: DummyComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
