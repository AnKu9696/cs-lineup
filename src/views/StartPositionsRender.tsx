import VideoModal from 'components/VideoModal';
import {
  CORDINATES_SHIFT,
  GRANADE_COUT_CONTAINER_SIZE,
  GRANADE_COUT_TEXT_SIZE,
} from 'contstants';
import { onStartPositionMouseEvent } from 'helpers/mouseEvents';
import { useFetchVideoTutorials } from 'hooks/useFetchVideoTutorials';
import Konva from 'konva';
import { Context } from 'konva/lib/Context';
import { useEffect, useRef } from 'react';
import { Group, Shape, Text } from 'react-konva';
import { Html } from 'react-konva-utils';
import { Position } from 'types';

type StartPositionsRenderProps = {
  position: Position[];
  count: number;
  labelPosition: Position;
  startId: string;
  endId: string;
  index: number;
  isGrenadeSelected: boolean;
};

const StartPositionsRender = ({
  position,
  count,
  labelPosition,
  startId,
  endId,
  isGrenadeSelected,
}: StartPositionsRenderProps) => {
  const { data, loading, isOpen, onClose, fetchVideoTutorial } =
    useFetchVideoTutorials(startId, endId);

  const shapeRef = useRef<Konva.Shape>(null);

  useEffect(() => {
    const shape = shapeRef.current;

    if (shape) {
      shape.show();
      shape.sceneFunc((context: Context, shape: Konva.Shape) => {
        context.beginPath();

        position.forEach(({ x, y }, index) => {
          index === 0 ? context.moveTo(x, y) : context.lineTo(x, y);
        });
        context.closePath();
        context.fillStrokeShape(shape);
      });
    }
  }, [position]);

  return (
    <>
      <Group
        visible={isGrenadeSelected}
        name={`startPositionGroup-${startId}`}
        onMouseEnter={(e) =>
          onStartPositionMouseEvent({
            e,
            id: startId,
            x: labelPosition.x,
            y: labelPosition.y,
          })
        }
        onMouseLeave={(e) =>
          onStartPositionMouseEvent({
            e,
            id: startId,
            x: labelPosition.x,
            y: labelPosition.y,
          })
        }
        onClick={fetchVideoTutorial}
      >
        <Shape
          ref={shapeRef}
          name='shape'
          fill={'rgba(116, 100, 72, 0.6)'}
          stroke='white'
          strokeWidth={2}
        />
        <Text
          name='text'
          text={count.toString()}
          width={GRANADE_COUT_CONTAINER_SIZE}
          height={GRANADE_COUT_CONTAINER_SIZE}
          x={labelPosition.x - CORDINATES_SHIFT}
          y={labelPosition.y - CORDINATES_SHIFT}
          align='center'
          fontSize={GRANADE_COUT_TEXT_SIZE}
          fill='white'
          fontStyle='bold'
          verticalAlign='middle'
        />
      </Group>
      <Html>
        <VideoModal
          isLoading={loading}
          isOpen={isOpen}
          onClose={onClose}
          videosData={data}
        />
      </Html>
    </>
  );
};

export default StartPositionsRender;
