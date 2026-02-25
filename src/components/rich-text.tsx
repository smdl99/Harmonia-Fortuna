import { ReactNode } from 'react';

interface RichTextProps {
  children(tags: Record<string, (chunks: ReactNode) => ReactNode>): ReactNode;
}

export default function RichText({ children }: RichTextProps) {
  return (
    <div className="text">
      {children({
        p: (chunks: ReactNode) => <p>{chunks}</p>,
        b: (chunks: ReactNode) => <b className="font-semibold">{chunks}</b>,
        i: (chunks: ReactNode) => <i className="italic">{chunks}</i>,
        br: () => <br />,
      })}
    </div>
  );
}
