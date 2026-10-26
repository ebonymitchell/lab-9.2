# Character Counter

A real-time writing analytics application built with **React, TypeScript, and Vite**.

Character Counter is an interactive text analysis tool that tracks character count, word count, and estimated reading time as users type. It also provides visual progress indicators and feedback to help users meet their writing goals.

This project was developed as part of the **Per Scholas AI-Native Software Development Program**, focusing on React state management, event handling, TypeScript interfaces, and component communication.

## Features

### Real-Time Text Analysis
- Live character counting, including spaces and punctuation
- Word counting across multiple spaces and line breaks
- Estimated reading time based on 200 words per minute
- Instant updates without refreshing the page

### Writing Goals and Progress
- Configurable minimum and maximum word counts
- Visual progress bar
- Color-coded feedback based on writing progress
- Optional reading-time targets

### User Experience
- Responsive design for desktop and mobile devices
- Accessible textarea labels
- Live feedback messages
- Clear visual hierarchy and interactive input styling

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React | Component-based user interface |
| TypeScript | Type safety for props, events, and statistics |
| Vite | Development server and production build tooling |
| CSS3 | Responsive layouts and visual styling |

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

**1. Clone the repository:**

```bash
git clone YOUR_REPOSITORY_URL
```

**2. Navigate into the project directory:**

```bash
cd character-counter
```

**3. Install dependencies:**

```bash
npm install
```

**4. Start the development server:**

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### Production Build

To generate a production-ready build:

```bash
npm run build
```

## Project Structure

```text
src/
├── components/
│   ├── CharacterCounter/
│   │   └── CharacterCounter.tsx
│   ├── StatsDisplay/
│   │   └── StatsDisplay.tsx
│   └── TextInput/
│       └── TextInput.tsx
├── types/
│   └── index.ts
├── App.tsx
├── App.css
└── index.css
```

## How the Components Work Together

The application is divided into three React components, each with a specific responsibility.

### TextInput

Captures user input through a textarea and communicates text changes to the parent component using a callback function.

### CharacterCounter

The parent component responsible for:

- Managing text state with `useState`
- Handling text changes with `useCallback`
- Calculating character count, word count, and reading time
- Evaluating writing goals
- Passing calculated statistics to child components

### StatsDisplay

Receives calculated statistics through props and displays:

- Character count
- Word count
- Estimated reading time

## State Management and Data Flow

The application follows a parent-managed state pattern. Text is stored in `CharacterCounter`, while statistics are calculated from the current text.

```text
User types in TextInput
          |
          v
    onChange event
          |
          v
   onTextChange(text)
          |
          v
 CharacterCounter
   setText(text)
          |
          v
   React re-renders
          |
          v
 calculateStats(text)
          |
          v
     StatsDisplay
          |
          v
 Updated statistics
```

### React Concepts Demonstrated

- **useState:** Stores the current text and triggers re-rendering when state changes.
- **useCallback:** Maintains a stable reference to the text-change handler.
- **Props:** Pass information between parent and child components.
- **Event Handling:** Captures user input through React's `onChange` event.
- **Conditional Rendering:** Displays feedback and optional statistics based on conditions.
- **TypeScript Interfaces:** Define the structure of component props and statistics.

## Statistics and Calculations

### Character Count

Counts all characters in the input, including spaces, punctuation, and line breaks.

```ts
const characterCount = text.length;
```

### Word Count

Removes surrounding whitespace and splits text using a regular expression that handles multiple spaces, tabs, and line breaks.

```ts
const trimmedText = text.trim();

const wordCount = trimmedText
  ? trimmedText.split(/\s+/).length
  : 0;
```

### Estimated Reading Time

Uses an average reading speed of 200 words per minute.

```ts
const readingTime = wordCount / 200;
```

Reading time is displayed in minutes, formatted to two decimal places.

## Configuring Writing Goals

The `CharacterCounter` component accepts three optional props.

```tsx
<CharacterCounter
  minWords={50}
  maxWords={500}
  targetReadingTime={2}
/>
```

| Property | Default | Description |
|----------|---------|-------------|
| `minWords` | 50 | Minimum word-count goal |
| `maxWords` | 500 | Maximum word-count goal |
| `targetReadingTime` | 2 | Desired reading time in minutes |

### Word Count Feedback

| Status | Condition | Visual Feedback |
|--------|-----------|-----------------|
| Below Minimum | Fewer than 50 words | Yellow |
| Within Range | 50–500 words | Green |
| Above Maximum | More than 500 words | Red |

Feedback updates automatically as the user types.

## Accessibility

The application includes:

- Semantic HTML elements
- Clearly labeled text input fields for improved accessibility
- Live feedback using `aria-live`
- Visible keyboard focus indicators
- Support for reduced-motion preferences

## Responsive Design

The interface uses CSS Grid and media queries to adapt to different screen sizes.

On larger screens, statistics appear in a three-column layout. On smaller screens, the cards stack vertically for improved readability.

## Future Enhancements

- User-adjustable writing goals
- Sentence and paragraph counting
- Reset and clear-text functionality
- Reading-level analysis
- Local storage for saving writing sessions
- Exportable text statistics

## Author

Developed by [Ebony Mitchell](https://github.com/ebonymitchell) as part of the **Per Scholas AI-Native Software Development Program**.

**Technical Skills Demonstrated:** React | TypeScript | State Management | Event Handling | Component Communication
