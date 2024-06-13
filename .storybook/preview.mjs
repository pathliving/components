import "@/styles/colors.css";
import "@/styles/spacing.css";
import "@/styles/font.css";
import "@/styles/transition.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
  options: {
    storySort: {
      order: ['Theme', 'Components']
    },
  },
};

export default preview;
