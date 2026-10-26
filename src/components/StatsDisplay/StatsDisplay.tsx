
import type { StatsDisplayProps } from "../../types";

// This component receives calculated statistics from its parent.
// It displays the data but does not calculate or manage state.
export function StatsDisplay({
  stats,
  showReadingTime = true,
}: StatsDisplayProps) {
  return (
    <section className="stats-display" aria-label="Text statistics">
      <h2>Text Statistics</h2>

      <div className="stats-grid">
        {/* Display the total number of characters. */}
        <div className="stat-item">
          <h3>Characters</h3>
          <p>{stats.characterCount}</p>
        </div>

        {/* Display the total number of words. */}
        <div className="stat-item">
          <h3>Words</h3>
          <p>{stats.wordCount}</p>
        </div>

        {/* Only display reading time when showReadingTime is true. */}
        {showReadingTime && (
          <div className="stat-item">
            <h3>Estimated Reading Time</h3>

            {/* Format reading time to two decimal places. */}
            <p>{stats.readingTime.toFixed(2)} min</p>
          </div>
        )}
      </div>
    </section>
  );
}
