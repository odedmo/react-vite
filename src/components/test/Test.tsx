interface TestProps {
  name: string;
}

const Test = (props: TestProps) => {
  const { name } = props;

  return <div>{`hi, ${name}`}</div>;
};

export default Test;
