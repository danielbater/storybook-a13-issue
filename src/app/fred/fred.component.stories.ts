import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FredComponent } from './fred.component';
import { FredModule } from './fred.module';

const template = `<app-fred></app-fred>`;

export default {
  title: 'Example/Fred',
  component: FredComponent,
  decorators: [
    moduleMetadata({
      imports: [FredModule],
    }),
  ],
} as Meta;

const Template: Story<FredComponent> = (args: FredComponent) => ({
  props: args,
  template,
});

export const Primary = Template.bind({});
