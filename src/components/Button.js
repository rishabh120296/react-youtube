const Button = (props) => {
  const { name } = props;
  return (
    <div>
      <button className="bg-gray-200 rounded-lg py-1 px-3 " key={name}>
        {name}
      </button>
    </div>
  );
};

export default Button;
