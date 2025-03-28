/**
 * Problem Set 1: Flashcards - Algorithm Functions
 *
 * This file contains the implementations for the flashcard algorithm functions
 * as described in the problem set handout.
 *
 * Please DO NOT modify the signatures of the exported functions in this file,
 * or you risk failing the autograder.
 */

import { Flashcard, AnswerDifficulty, BucketMap } from "./flashcards";

/**
 * Converts a Map representation of learning buckets into an Array-of-Set representation.
 *
 * @param buckets Map where keys are bucket numbers and values are sets of Flashcards.
 * @returns Array of Sets, where element at index i is the set of flashcards in bucket i.
 *          Buckets with no cards will have empty sets in the array.
 * @spec.requires buckets is a valid representation of flashcard buckets.
 */
export function toBucketSets(buckets: BucketMap): Array<Set<Flashcard>> {
  if (buckets.size === 0) return []; // Handle empty buckets case 
  
  // Find the highest bucket index

  const maxBucket = Math.max(...buckets.keys(), 0);
  //Create an array of empty sets of size maxBucket + 1 to ensure all buckets are represented.
  const bucketArray: Array<Set<Flashcard>> = Array.from({ length: maxBucket + 1 }, () => new Set<Flashcard>()); 
//Iterate over the buckets map and populate the corresponding index in the array.
  for (const [bucket, flashcards] of buckets.entries()) {
    bucketArray[bucket] = flashcards;
  }

  return bucketArray;
}


/**
 * Finds the range of buckets that contain flashcards, as a rough measure of progress.
 *
 * @param buckets Array-of-Set representation of buckets.
 * @returns object with minBucket and maxBucket properties representing the range,
 *          or undefined if no buckets contain cards.
 * @spec.requires buckets is a valid Array-of-Set representation of flashcard buckets.
 */
export function getBucketRange(
  buckets: BucketMap
): { minBucket: number; maxBucket: number } | undefined {
  let minBucket: number | undefined = undefined;
  let maxBucket: number | undefined = undefined;

  for (const [bucketNumber, flashcards] of buckets.entries()) {
    if (flashcards.size > 0) {
      if (minBucket === undefined || bucketNumber < minBucket) {
        minBucket = bucketNumber;
      }
      if (maxBucket === undefined || bucketNumber > maxBucket) {
        maxBucket = bucketNumber;
      }
    }
  }

  return minBucket !== undefined && maxBucket !== undefined
    ? { minBucket, maxBucket }
    : undefined;
}
/**
 * Selects cards to practice on a particular day.
 *
 * @param buckets Array-of-Set representation of buckets.
 * @param day current day number (starting from 0).
 * @returns a Set of Flashcards that should be practiced on day `day`,
 *          according to the Modified-Leitner algorithm.
 * @spec.requires buckets is a valid Array-of-Set representation of flashcard buckets.
 */
export function practice(
  buckets: Array<Set<Flashcard>>,
  day: number
): Set<Flashcard> {
  const practiceSet = new Set<Flashcard>();

  for (let i = 0; i < buckets.length; i++) {
    if (day % (i + 1) === 0 && buckets[i]) {
      buckets[i]!.forEach(card => practiceSet.add(card));
    }
  }

  return practiceSet;
}

/**
 * Updates a card's bucket number after a practice trial.
 *
 * @param buckets Map representation of learning buckets.
 * @param card flashcard that was practiced.
 * @param difficulty how well the user did on the card in this practice trial.
 * @returns updated Map of learning buckets.
 * @spec.requires buckets is a valid representation of flashcard buckets.
 */


export function update(
  buckets: BucketMap,
  card: Flashcard,
  difficulty: AnswerDifficulty
): BucketMap {
  const newBuckets = new Map(buckets);

  let currentBucket = -1;
  for (const [bucket, flashcards] of newBuckets.entries()) {
    if (flashcards.has(card)) {
      currentBucket = bucket;
      flashcards.delete(card);
      break;
    }
  }

  if (currentBucket === -1) {
    throw new Error("Card not found in any bucket.");
  }

  let newBucket = currentBucket;
  if (difficulty === AnswerDifficulty.Easy) { 
    newBucket = Math.min(currentBucket + 1, newBuckets.size - 1);
  } else if (difficulty === AnswerDifficulty.Hard) {  
    newBucket = Math.max(currentBucket - 1, 0);
  }

  if (!newBuckets.has(newBucket)) {
    newBuckets.set(newBucket, new Set<Flashcard>());
  }
  newBuckets.get(newBucket)?.add(card); 

  return newBuckets;
}


/**
* Generates a hint for a flashcard.
*
* @param card flashcard to hint
* @returns a  hint for the front of the flashcard 
*           such as revealing the first letters.
* requires card is a valid Flashcard with a non-empty front.
* effects Does not modify the flashcard.
* ensures The same input always produces the same hint.
*/ 
export function getHint(card: Flashcard): string {
  if (card.front.length === 0) {
    throw new Error("Cannot generate a hint for an empty flashcard front.");
  }

  if (card.front.length === 1) {
    return card.front; // Single-letter words remain unchanged
  }

  return card.front[0] + "_".repeat(card.front.length - 2) + card.front[card.front.length - 1];
}


/**
 * Computes statistics about the user's learning progress.
 *
 * @param buckets A BucketMap where keys are bucket numbers and values are sets of flashcards
 * @param history An array of past answers each with a card, difficulty, and date
 * @returns An object containing
 *          - totalCards Total number of unique flashcards
 *          - bucketDistribution Count of flashcards per bucket
 *          - averageBucket The mean bucket index
 *          - answerStats Includes total attempts, difficulty breakdown, and hardest cards
 *          - recentPerformance Breakdown of the last 10 answers
 *
 * @spec.requires buckets must have non-negative integer keys and valid flashcard sets
 * @spec.requires history must be non-empty, with valid Flashcard, AnswerDifficulty, and Date values
 * @spec.ensures Returns meaningful statistics, is deterministic, and does not modify inputs
 * @throws Errors if history is empty or contains invalid entries
 */

export function computeProgress(buckets: any, history: any): any {
  // Replace 'any' with appropriate types
  // TODO: Implement this function (and define the spec!)
  throw new Error("Implement me!");
}
