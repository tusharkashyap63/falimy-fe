import { Spinner, Text } from '@chakra-ui/react';
import Family from './Family';

export default function Families({ families, familiesLoading }) {
  return (
    <>
      <Text mb="4">Families you are a part of</Text>
      {familiesLoading ? (
        <Spinner color="purple.500" thickness="4px" label="Loading families" />
      ) : (
        families?.map(family => (
          <Family key={family._id} familyId={family._id} name={family.name} />
        ))
      )}
    </>
  );
}
