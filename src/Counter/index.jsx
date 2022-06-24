import { Container } from "./style";
import { useSelector } from "react-redux/es/exports";
import { Button } from "../Buttons/style";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addNumber, subNumber } from "../store/modules/counter/actions";

export const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function HandleAddClick() {
    dispatch(addNumber(1))
  }

  function HandleSubClick() {
    dispatch(subNumber(1))
  }

  return (
    <Container>
      <p>{counter}</p>
      <div>
        <Button onClick={HandleAddClick}>+</Button>
        <Button onClick={HandleSubClick}>-</Button>
      </div>
    </Container>
  )
}