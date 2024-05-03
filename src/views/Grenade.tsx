import { GRENADE_LABEL_SIZE } from 'contstants';
import { Circle, Group, Image, Text } from 'react-konva';
import { GrenadeProps } from 'types';
import useImage from 'use-image';

import flash from 'assets/grenadeIcons/flash.svg';
import hegrenade from 'assets/grenadeIcons/hegrenade.svg';
import molotov from 'assets/grenadeIcons/molotov.svg';
import smoke from 'assets/grenadeIcons/smoke.svg';
import { onGrenadeMouseEvent } from 'helpers/mouseEvents';

const GRENADE_MAP: Record<string, string> = {
  smoke,
  flash,
  molotov,
  hegrenade,
};

const Grenade = ({
  grenadeType,
  count,
  onGrenadeClick,
  x,
  y,
  id,
  isSelected,
  ...imageProps
}: GrenadeProps) => {
  const [image] = useImage(GRENADE_MAP[grenadeType]);

  const labelSizeWithOffset = GRENADE_LABEL_SIZE + 10;

  return (
    <Group
      name={`grenadeGroup-${id}`}
      onClick={onGrenadeClick}
      visible={isSelected}
      onMouseEnter={(e) => onGrenadeMouseEvent({ id, e, x, y })}
      onMouseLeave={(e) => onGrenadeMouseEvent({ id, e, x, y })}
    >
      <Circle
        name='circle'
        x={x}
        y={y}
        width={labelSizeWithOffset}
        height={labelSizeWithOffset}
        opacity={0.5}
        fill='black'
      />
      <Image
        name={'image'}
        image={image}
        width={GRENADE_LABEL_SIZE}
        height={GRENADE_LABEL_SIZE}
        x={x - GRENADE_LABEL_SIZE / 2}
        y={y - GRENADE_LABEL_SIZE / 2}
        {...imageProps}
      />
      <Text
        x={x - GRENADE_LABEL_SIZE / 2}
        y={y - GRENADE_LABEL_SIZE / 2}
        width={GRENADE_LABEL_SIZE}
        height={GRENADE_LABEL_SIZE}
        text={count > 0 ? count.toString() : ''}
        align='center'
        verticalAlign='middle'
      />
    </Group>
  );
};

export default Grenade;
