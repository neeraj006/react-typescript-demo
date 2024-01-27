type HeadingProps = {
  heading: string | number;
  style: React.CSSProperties;
};

export default function Heading({ heading, style }: HeadingProps) {
  return <span style={style}>{heading}</span>;
}
