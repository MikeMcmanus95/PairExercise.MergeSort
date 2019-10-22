describe('Split Array function', function() {
  it('returns an array', function() {
    expect(Array.isArray(split([]))).toBe(true);
  });
  it('is able to split an array into two halves', function() {
    expect(split([]).length).toBeLessThan(3);
    expect(split([1, 3, 5, 2, 4, 6])).toEqual([[1, 3, 5], [2, 4, 6]]);
    expect(split([14, 63, 12, 44, 1, 17, 340])).toEqual([
      [14, 63, 12],
      [44, 1, 17, 340],
    ]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([1, 3], [2, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(merge([0, 4, 6], [1, 2, 3, 5])).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });
});

const array = [2, 6, 4, 3, 1, 4, 7, 8];
describe('MergeSort function', function() {
  beforeAll(function() {
    spyOn(window, 'merge').and.callThrough();
  });
  it('is able to merge and sort two arrays', function() {
    expect(mergeSort(array)).toEqual([1, 2, 3, 4, 4, 6, 7, 8]);
  });
  it('uses the merge function', function() {
    window.mergeSort(array);
    expect(window.merge).toHaveBeenCalled();
    expect(merge).toHaveBeenCalled();
  });
});
