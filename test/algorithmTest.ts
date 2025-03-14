import assert from "assert";
import { AnswerDifficulty, Flashcard, BucketMap } from "../src/flashcards";
import {
  toBucketSets,
  getBucketRange,
  practice,
  update,
  getHint,
  computeProgress,
} from "../src/algorithm";

/*
 * Testing strategy for toBucketSets():
 *
 * TODO: Describe your testing strategy for toBucketSets() here.
 */
describe("toBucketSets()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for getBucketRange():
 *
 * TODO: Describe your testing strategy for getBucketRange() here.
 */


describe("getBucketRange", () => {

  it("returns undefined for empty buckets", () => {

    const buckets: Map<number, Set<Flashcard>> = new Map();

    const result = getBucketRange(buckets);

    if (result !== undefined) {

      throw new Error(`Expected undefined but got ${JSON.stringify(result)}`);

    }

  });
 
  it("returns correct range for a single occupied bucket", () => {

    const flashcard = new Flashcard("Q1?", "A1", "Hint1", ["tag1"]);

    const buckets: Map<number, Set<Flashcard>> = new Map([

      [0, new Set()],

      [1, new Set([flashcard])],

    ]);

    const result = getBucketRange(buckets);

    if (result && (result.minBucket !== 1 || result.maxBucket !== 1)) {

      throw new Error(

        `Expected { minBucket: 1, maxBucket: 1 } but got ${JSON.stringify(

          result

        )}`

      );

    }

  });
 
  it("returns correct range for multiple occupied buckets", () => {

    const flashcard1 = new Flashcard("Q1?", "A1", "Hint1", ["tag1"]);

    const flashcard2 = new Flashcard("Q2?", "A2", "Hint2", ["tag2"]);

    const buckets: Map<number, Set<Flashcard>> = new Map([

      [0, new Set()],

      [1, new Set([flashcard1])],

      [2, new Set([flashcard2])],

    ]);

    const result = getBucketRange(buckets);

    if (result && (result.minBucket !== 1 || result.maxBucket !== 2)) {

      throw new Error(

        `Expected { minBucket: 1, maxBucket: 2 } but got ${JSON.stringify(

          result

        )}`

      );

    }

  });
 
  it("handles non-sequential occupied buckets", () => {

    const flashcard1 = new Flashcard("Q1?", "A1", "Hint1", ["tag1"]);

    const flashcard2 = new Flashcard("Q2?", "A2", "Hint2", ["tag2"]);

    const buckets: Map<number, Set<Flashcard>> = new Map([

      [0, new Set()],

      [1, new Set()],

      [2, new Set([flashcard1])],

      [3, new Set()],

      [4, new Set([flashcard2])],

    ]);

    const result = getBucketRange(buckets);

    if (result && (result.minBucket !== 2 || result.maxBucket !== 4)) {

      throw new Error(

        `Expected { minBucket: 2, maxBucket: 4 } but got ${JSON.stringify(

          result

        )}`

      );

    }

  });
 
  it("returns correct range for non-sequential buckets with empty and missing buckets", () => {

    const flashcard1 = new Flashcard(

      "What is 3+3?",

      "6",

      "Simple addition question",

      ["math"]

    );

    const flashcard2 = new Flashcard(

      "What is the largest planet?",

      "Jupiter",

      "A solar system question",

      ["science"]

    );
 
    const buckets2: BucketMap = new Map([

      [0, new Set<Flashcard>()],

      [1, new Set<Flashcard>()],

      [3, new Set<Flashcard>([flashcard1])],

      [5, new Set<Flashcard>([flashcard2])],

    ]);
 
    const result = getBucketRange(buckets2);

    if (result && (result.minBucket !== 3 || result.maxBucket !== 5)) {

      throw new Error(

        `Expected { minBucket: 3, maxBucket: 5 } but got ${JSON.stringify(

          result

        )}`

      );

    }

  });

});
 
/*

* Testing strategy for practice():

*

* TODO: Describe your testing strategy for practice() here.

*/

describe("practice()", () => {

  it("Example test case - replace with your own tests", () => {

    assert.fail(

      "Replace this test case with your own tests based on your testing strategy"

    );

  });

});
 
/*

* Testing strategy for update():

*

* TODO: Describe your testing strategy for update() here.

*/

describe("update()", () => {

  it("Example test case - replace with your own tests", () => {

    assert.fail(

      "Replace this test case with your own tests based on your testing strategy"

    );

  });

});
 
/*
 * Testing strategy for practice():
 *
 * TODO: Describe your testing strategy for practice() here.
 */
describe("practice()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for update():
 *
 * TODO: Describe your testing strategy for update() here.
 */
describe("update()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for getHint():
 *
 * TODO: Describe your testing strategy for getHint() here.
 */
describe("getHint()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for computeProgress():
 *
 * TODO: Describe your testing strategy for computeProgress() here.
 */
describe("computeProgress()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});
