type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ handleClick }: ButtonProps) {
  return <button onClick={handleClick}>Click me</button>;
}
