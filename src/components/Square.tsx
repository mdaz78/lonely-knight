interface SquareProps {
  black: boolean;
  children: React.ReactNode;
}

export const Square = ({ black, children }: SquareProps) => {
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';

  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  );
};
