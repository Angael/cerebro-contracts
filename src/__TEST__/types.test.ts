import { FrontItem } from "../types";

describe("types", () => {
  it("should compile for image", function () {
    const item: FrontItem = {
      id: 2,
      type: "IMAGE",
      gridSpan: "wide",
      thumbnail: "https://asd.com/pic.webp",
      icon: "https://asd.com/pic.webp",
      createdAt: new Date().toISOString(),
      isMine: false,
      private: false,
      size: 300000,
      image: {
        src: "https://asd.com/pic.webp",
        width: 300,
        height: 300,
        animated: false,
      },
    };

    expect(item).toBeTruthy();
  });

  it("should compile for video", function () {
    const item: FrontItem = {
      id: 2,
      type: "VIDEO",
      gridSpan: "tall",
      thumbnail: "https://asd.com/pic.webp",
      icon: "https://asd.com/pic.webp",
      createdAt: new Date().toISOString(),
      isMine: false,
      private: false,
      size: 300000,
      video: {
        src: "https://asd.com/pic.webm",
        width: 300,
        height: 300,
        durationMs: 5000,
        bitrateKb: 2000,
      },
    };

    expect(item).toBeTruthy();
  });
});
