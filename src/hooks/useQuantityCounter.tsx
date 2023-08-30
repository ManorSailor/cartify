import { useState } from "react";

function useQuantityCounter({
  min,
  max,
  initial,
}: {
  min: number;
  max: number;
  initial: number;
}) {
  const [quantity, setQuantity] = useState(initial);

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= min && newQuantity <= max) {
        setQuantity()
    }
  }
}

export default useQuantityCounter;
