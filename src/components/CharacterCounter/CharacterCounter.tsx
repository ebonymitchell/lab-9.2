import { useCallback, useState } from "react";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";
import type { CharacterCounterProps, TextStats } from "../../types";

// Estimate reading time using an average reading speed
// of 200 words per minute.
const WORDS_PER_MINUTE = 200;

// Calculate text statistics from the current input.
function calculateStats(text: string): TextStats {
    // Count every character, including spaces and punctuation.
    const characterCount = text.length;

    // Remove surrounding whitespace before counting words.
    // An empty string should count as zero words.
    const trimmedText = text.trim();

    // Split text at one or more whitespace characters.
    const wordCount = trimmedText
        ? trimmedText.split(/\s+/).length
        : 0;

    // Divide the word count by the average reading speed.
    const readingTime = wordCount / WORDS_PER_MINUTE;

    return {
        characterCount,
        wordCount,
        readingTime,
    };
}

export function CharacterCounter({
    minWords = 50,
    maxWords = 500,
    targetReadingTime = 2,
}: CharacterCounterProps) {
    // Store the current text entered by the user.
    const [text, setText] = useState<string>("");

    // Handle text updates sent from the TextInput component.
    // useCallback preserves the function reference between renders.
    const handleTextChange = useCallback((newText: string) => {
        setText(newText);
    }, []);

    // Recalculate statistics whenever the component renders
    // using the latest text state.
    const stats = calculateStats(text);

    // Calculate progress toward the maximum word count.
    // Prevent division by zero if maxWords is zero.
    const progress =
        maxWords > 0
            ? Math.min((stats.wordCount / maxWords) * 100, 100)
            : 0;

    // Determine whether the user has met the word count goals.
    const belowMinimum = stats.wordCount < minWords;
    const aboveMaximum = stats.wordCount > maxWords;


    // Determine which feedback style to display.
    // The word count can be below, within, or above the target range.
    const feedbackStatus = belowMinimum
        ? "warning"
        : aboveMaximum
            ? "error"
            : "success";


    return (
        <section className="character-counter">
            <h1>Character Counter</h1>
            <p>Track your writing progress in real time.</p>

            {/* Send the callback to the child input component. */}
            <TextInput
                onTextChange={handleTextChange}
                placeholder="Start writing here..."
            />

            {/* Pass the calculated statistics to the display component. */}
            <StatsDisplay stats={stats} showReadingTime={true} />

            {/* Display progress toward the maximum word count. */}
            <div className="word-progress">
                <label htmlFor="word-progress-bar">
                    Word Count Progress
                </label>

                <progress
                    id="word-progress-bar"
                    value={progress}
                    max={100}
                />

                <p>
                    {stats.wordCount} / {maxWords} words
                </p>
            </div>

            {/* Give feedback based on the minimum and maximum word limits. */}
            {/* Apply a different CSS class based on the word count status. */}
            <div
                className={`word-feedback ${feedbackStatus}`}
                aria-live="polite"
            >
                {belowMinimum && (
                    <p>
                        Keep writing! Your minimum goal is {minWords} words.
                    </p>
                )}

                {!belowMinimum && !aboveMaximum && (
                    <p>You're within your word count goals!</p>
                )}

                {aboveMaximum && (
                    <p>
                        You've exceeded the maximum of {maxWords} words.
                    </p>
                )}
            </div>

            {/* Compare the estimated reading time with the target. */}
            <p className="reading-goal">
                Reading time goal: {targetReadingTime} min
                {stats.readingTime >= targetReadingTime
                    ? " — Goal reached!"
                    : " — Keep writing!"}
            </p>
        </section>
    );
}
