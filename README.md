# Helium Technical Interview Project

The goal of this project is to prove one's abilities outside the environment of an in-person technical interview,
using a more practical assessment.

**Setup**:

- Clone the repo
- `cd helium-technical-interview-project`
- `yarn`
- `yarn dev`

Create your own repository, then remove our origin and add yours:

- `git remote remove origin`
- `git remote add origin <your git repo>`

To submit your challenge, send an email to `kyle@heliumdev.com` and `nick@heliumdev.com` containing a link to your
repository and an estimate of time spent. Feel free to include any other details if you'd like!

> Note: You are encouraged to use third-party libraries! The purpose of this challenge is to be practical, as you would
> have all these tools at your disposal in the real world.  
> 
> We also appreciate clean interfaces, so be creative :)

## Challenge: Build a `ChoiceList` React component

A `ChoiceList` is essentially a `<select>` component, where a custom list of options is rendered when the field is
focused.

Your challenge is to implement the component described by the documentation below, **without leaving type errors.**
You'll notice that `strict` is set to `true` in `tsconfig.json`; **it should not be changed**, nor should any options
be added to get past it.

See `src/App.tsx` for the various different cases that your component should support. Write your implementation in 
`src/components/ChoiceList.tsx`, `App.tsx` will import and render it when you open up the project in a browser.

> Note: the browser will render a blank screen until you add elements to `ChoiceList.tsx`

### Example

```tsx
import { ChoiceList } from '<path to your component>';

export function MyAwesomeComponent() {
  const [value, setValue] = useState();
  
  return (
    <div className="my-awesome-component">
      <ChoiceList
        selected={value}
        options={[
          { label: 'Option A', value: 'a' },
          { label: 'Option B', value: 'b' },
          { label: 'Option C', value: 'c' },
        ]}
        allowMultiple
        onSelect={(value) => {
          setValue(value)
        }}
      />
    </div>
  )
}
```

### Props

#### `selected`

The current value of the `ChoiceList`.

#### `options`

A list of options that the dropdown should render.

#### `onSelect`

A function that handles the latest selection(s) by the user.

#### `allowMultiple`

Whether or not multiple selections is allowed. If this is `true`, `selected` must be an array, and `onSelect` will 
propagate an array as well.

#### `allowSearch`

Whether or not a text search is allowed. If this is `true`, `ChoiceList` will accept user input to narrow down the 
rendered options.

> If you want to go above and beyond by supporting more functionality, feel free to do so! 
