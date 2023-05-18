import { ReactElement, useState } from "react";

function QuantityCounter(): ReactElement {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex gap-2 items-center">
      <button className="p-2" onClick={() => setQuantity((q) => q - 1)}>
        -
      </button>
      <input
        type="number"
        className="border border-slate-400 w-6 aspect-square text-center rounded-sm"
        min={1}
        max={50}
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
      />
      <button className="p-2" onClick={() => setQuantity((q) => q + 1)}>
        +
      </button>
    </div>
  );
}

export default QuantityCounter;
