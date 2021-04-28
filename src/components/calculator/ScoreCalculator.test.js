import calcTotalScore from "./scoreCalculator";

test("Total score and accumulated score per frame are correct.", () => {
  const tests = [
    {
      scores: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0, 0],
      ],
      total: 0,
      accFrameScores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      scores: [
        [1, 0],
        [1, 0],
        [1, 0],
        [1, 0],
        [1, 0],
        [1, 0],
        [1, 0],
        [1, 0],
        [1, 0],
        [1, 0],
      ],
      total: 10,
      accFrameScores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      scores: [
        [10, 0],
        [6, 4],
        [4, 0],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", "", ""],
      ],
      total: 38,
      accFrameScores: [20, 34, 38, 38, 38, 38, 38, 38, 38, 38],
    },
    {
      scores: [
        [7, 3],
        [0, 0],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
      ],
      total: 10,
      accFrameScores: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    {
      scores: [
        [7, 3],
        [7, 0],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
      ],
      total: 24,
      accFrameScores: [17, 24, 24, 24, 24, 24, 24, 24, 24, 24],
    },
    {
      scores: [
        [8, 2],
        [8, 2],
        [8, 2],
        [8, 2],
        [8, 2],
        [8, 2],
        [8, 2],
        [8, 2],
        [8, 2],
        [8, 2, 8],
      ],
      total: 180,
      accFrameScores: [18, 36, 54, 72, 90, 108, 126, 144, 162, 180],
    },
    {
      scores: [
        [10, 0],
        [0, 0],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
      ],
      total: 10,
      accFrameScores: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    {
      scores: [
        [0, 10],
        [2, 4],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ],
      total: 18,
      accFrameScores: [12, 18, 18, 18, 18, 18, 18, 18, 18, 18],
    },
    {
      scores: [
        [10, 0],
        [2, 4],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ],
      total: 22,
      accFrameScores: [16, 22, 22, 22, 22, 22, 22, 22, 22, 22],
    },
    {
      scores: [
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10],
      ],
      total: 300,
      accFrameScores: [30, 60, 90, 120, 150, 180, 210, 240, 270, 300],
    },
    {
      scores: [
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0, 0],
      ],
      total: 270,
      accFrameScores: [30, 60, 90, 120, 150, 180, 210, 240, 260, 270],
    },
  ];

  // Check total score
  tests.forEach(({ scores, total }) => {
    expect(calcTotalScore(scores).score).toBe(total);
  });

  // Check accumulated score per frame
  tests.forEach(({ scores, accFrameScores }) => {
    expect(calcTotalScore(scores).frameScores).toEqual(accFrameScores);
  });
});
