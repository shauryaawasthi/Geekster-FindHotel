import { FC, useContext } from 'react';
// import { NumberInput } from '../../NumberInput';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';
import { getChildrenCount } from '../../../GuestRooms/contexts/getters';
import { NumberInputs } from '../../NumberInputs';

type ChildrenCountInputPropTypes = {
  roomIndex: number;
};

export const ChildrenCountInput: FC<ChildrenCountInputPropTypes> = ({
  roomIndex,
}) => {
  const { guestRooms, addChild, removeChild } = useContext(GuestRoomsContext);
  const childrenCount = getChildrenCount(guestRooms, roomIndex);

  const increaseValue = () => addChild(roomIndex);
  const decreaseValue = () => removeChild(roomIndex);

  return (
    <NumberInputs
      value={childrenCount}
      increaseValue={increaseValue}
      decreaseValue={decreaseValue}
      minValue={0}
      maxValue={3}
    />
  );
};
