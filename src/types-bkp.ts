// Prisma generates this, keep in sync
enum ItemType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}

export type GridItem = {
  id: number;
  isMine: boolean;
  type: keyof typeof ItemType;
  private: boolean;
  created_at: string;

  width: number;
  height: number;
  gridSpan: "wide" | "tall" | null;
  src: string | null;
  thumbnail: string | null;
  icon: string | null;
};

export type ImageItem = {
  id: number;
  isMine: boolean;
  src: string;
  width: number;
  height: number;
};

export type VideoItem = {
  id: number;
  isMine: boolean;
  src: string;
  width: number;
  height: number;
};
