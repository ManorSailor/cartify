type QuantityCounterProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

function QuantityCounter({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityCounterProps) {
  return (
    <div className="flex items-center justify-around flex-grow">
      <button className="p-2" onClick={onDecrease}>
        -
      </button>
      <span className="border border-slate-400 w-6 aspect-square text-center rounded-sm select-none">
        {quantity}
      </span>
      <button className="p-2" onClick={onIncrease}>
        +
      </button>
    </div>
  );
}

export default QuantityCounter;
