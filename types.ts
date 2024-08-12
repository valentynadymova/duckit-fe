interface IChildren {
  children: React.ReactNode | string | null;
}

interface ISVG {
  width?: number;
  height?: number;
  fill?: string;
  viewBox?: string;
  className?: string;
}

export type { IChildren, ISVG };
