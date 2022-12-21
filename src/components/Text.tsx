interface TextProps {
  children: string | React.ReactNode;
}

const Text = ({ children }: TextProps) => {
  return <p className="p-2">{children}</p>;
};

export default Text;
