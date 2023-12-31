import type { Meta, StoryObj } from '@storybook/react';

import YourComponent from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof YourComponent> = {
	component: YourComponent,
};

export default meta;
type Story = StoryObj<typeof YourComponent>;

export const FirstStory: Story = {
	args: {
		rowsPerPage: 10,
		totalRows: 100,
		currentPage: 1,
		//👇 The args you need here will depend on your component
	},
};