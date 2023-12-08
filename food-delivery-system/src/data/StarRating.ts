export enum StarRating {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}

// If you want to create a function to get the value (like the getVal method in Java):
export function getStarRatingValue(rating: StarRating): number {
  return rating;
}
