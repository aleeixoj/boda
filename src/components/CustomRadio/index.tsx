import { HStack, useRadioGroup } from '@chakra-ui/react';

import { RadioCard } from './card';

interface ICustomRadioProps {
  options: string[];
  onChange: (value: string) => Promise<void>;
  defaultValue: string;
}

function CustomRadio({ options, onChange, defaultValue }: ICustomRadioProps) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'status',
    defaultValue,
    onChange,
  });

  const group = getRootProps();

  return (
    <HStack
      sx={{
        '@media (max-width: 768px)': {
          flexDirection: 'column',
        },
      }}
      {...group}
    >
      {options.map((value: any) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

export { CustomRadio };
