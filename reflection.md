# Lab 2: State & Events — Reflection

### 1. How did you handle state updates when the text changed?

I used `useState` to keep track of what the user typed. Every time the text changed, the `onChange` event triggered a function that sent the updated text to the parent component. From there, `setText` updated the state, and React updated the statistics on the screen.

### 2. What considerations did you make when calculating reading time?

I based the reading time on an average of 200 words per minute. The calculation divides the total word count by 200 to estimate how long the text would take to read. I also made sure that an empty text field wouldn't count as a word and that the reading time displayed only two decimal places.

### 3. How did you ensure the UI remained responsive during rapid text input?

I kept the calculations simple so the statistics could update as the user typed without slowing everything down. I used `useCallback` for the text change handler and calculated the statistics from the current text instead of creating extra state variables. I also used CSS Grid and media queries so the layout would adjust to different screen sizes.

### 4. What challenges did you face when implementing the statistics calculations?

The biggest challenge for me was understanding how everything worked together. I had to figure out how the text entered in one component made its way to another component to display the statistics. I also had to account for things like empty input, extra spaces, and line breaks when counting words. Working through the code helped me get a better understanding of how state, props, and callback functions work together in React.