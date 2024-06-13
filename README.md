# Welcome to UI component library 🎉

Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup

## 📚 How to start?

Few easy steps. Let's start!

### Select the Node.js version 18+

```
nvm use 18
```

### Install dependencies

```
npm i
```

### Run the storybook

```
npm run sb
```

## 📚 How to run the tests?

Prepare your environment

### Install Playwright to run UI tests
```
npx playwright install
```

### Run UI tests
```
npm run sb         # in the first terminal tab
npm run test:ui    # in the second terminal tab
```

or

### Run Unit tests
```
npm run test:unit
```

## 📚 How to use UI component library in your project

Build and link the library

### Open the UI component library and create symlink via npm
```
npm link
```

### Open your own project and 'link-install' the UI component library
```
npm link @pathliving/components
```

### Import and use the Button from UI component library

> **Pay attention!** Do not attempt to use it in 'server components'. The Button component can only be used in 'client components' because it has event handlers

```
import { Button } from '@pathliving/components';

export default function Page() {
  return (
    <>
      Home page
      <Button onClick={() => alert('Hi!')}>Click me!</Button>
    </>
  );
}
```