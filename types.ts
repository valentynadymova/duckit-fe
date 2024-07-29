interface IChildren {
  children: React.ReactNode | string | null;
}

interface ISVG {
  width?: string;
  height?: string;
  fill?: string;
  viewBox?: string;
}

export type { IChildren, ISVG };
