import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { WilmaComponent } from './wilma.component';
import { WilmaModule } from './wilma.module';

export default {
  title: 'Example/Wilma',
  component: WilmaComponent,
  decorators: [
    moduleMetadata({
      imports: [WilmaModule],
    }),
  ],
} as Meta;

const Template: Story<WilmaComponent> = (args: WilmaComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
