/**
 * Returns local URL of the background image based on the current time of day
 * @return {string} Local URL of the background image
 */
export function backgroundImageUrl() {
  const dayTimes = ['morning', 'day', 'evening', 'night'];
  const hour = new Date().getHours();

  // Determine the time of day and return the appropriate background image URL
  if (hour >= 6 && hour < 12) {
    return `url('./backgrounds/${dayTimes[0]}.webp')`; // Morning
  } else if (hour >= 12 && hour < 18) {
    return `url('./backgrounds/${dayTimes[1]}.webp')`; // Day
  } else if (hour >= 18 && hour < 20) {
    return `url('./backgrounds/${dayTimes[2]}.webp')`; // Evening
  } else {
    return `url('./backgrounds/${dayTimes[3]}.webp')`; // Night
  }
}

