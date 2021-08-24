import { Text } from '@chakra-ui/react';
import Family from './Family';

export default function Families({ families }) {
  return (
    <>
      <Text mb="4">Families you are a part of</Text>
      {families.map(family => (
        <Family name={family.name} />
      ))}
    </>
  );
}
