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
  it("handle empty input", () => {
    const buckets:BucketMap = new Map();
    assert.deepEqual(toBucketSets(buckets), []);
  });
  it("handle single bucket", () => {
    const tags: ReadonlyArray<string> = ["literatura"];
    const flashcard1 = new Flashcard("tarieli", "vefxistyaosani", "shota rustaveli", tags);

    const buckets: BucketMap = new Map([[0, new Set([flashcard1])]]);
    assert.deepEqual(toBucketSets(buckets), [new Set([flashcard1])]);
  });
  it("multiple consecutive buckets",()=>{
    const tags: ReadonlyArray<string> = ["literatura"];
    const flashcard1 = new Flashcard("aleksei, ivan, dimitri", "dzmebi karamazovebi","dostoevski", tags);
    const flashcard2 = new Flashcard("safar begi", "gamzrdeli","akaki wereteli", tags);

    const buckets: BucketMap = new Map([
      [0, new Set([flashcard1])],
      [1, new Set([flashcard2])],
    ]);

    assert.deepEqual(toBucketSets(buckets), [
      new Set([flashcard1]),
      new Set([flashcard2]),
    ]);
  });

  it("handles non-consecutive bucket indices with gaps", () => {
    const tags: ReadonlyArray<string> = ["tv series"];
    const flashcard1 = new Flashcard("toni, poli, sali", "sopranos", "mafia", tags);
    const flashcard2 = new Flashcard("walter, jessi", "breaking bad", "vince giligan", tags);

    const buckets: BucketMap = new Map([
      [0, new Set([flashcard1])],
      [2, new Set([flashcard2])],
    ]);

    assert.deepEqual(toBucketSets(buckets), [
      new Set([flashcard1]),
      new Set(),
      new Set([flashcard2]),
    ]);
  });
  it("handles buckets with multiple flashcards", () => {
    const tags: ReadonlyArray<string> = ["komedi shou"];
    const flashcard1 = new Flashcard("wavida erovnuli gamocdebi", "nika arabidze", "gamocdaze", tags);
    const flashcard2 = new Flashcard("nigabi marto joxi", "temo mjavia", "mafiis game", tags);
    const flashcard3 = new Flashcard("rac movedi dzalian mipruwuneb tuchebs", "misha andguladze", "sicruis deteqtori", tags);

    const buckets: BucketMap = new Map([
      [0, new Set([flashcard1, flashcard2])],
      [1, new Set([flashcard3])],
      [2, new Set([flashcard3])],
      [3, new Set([flashcard3])],
      [4, new Set([flashcard3])],
    ]);

    assert.deepEqual(toBucketSets(buckets), [
      new Set([flashcard1, flashcard2]),
      new Set([flashcard3]),
      new Set([flashcard3]),
      new Set([flashcard3]),
      new Set([flashcard3]),
    ]);

  });
});