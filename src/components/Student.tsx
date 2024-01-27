type StudentProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function Student({ children, style }: StudentProps) {
  return <div style={style}>{children}</div>;
}
