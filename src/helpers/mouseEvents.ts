import {
  CORDINATES_SHIFT,
  DEFAULT_SCALE,
  GRENADE_LABEL_SIZE,
  HOVERED_COORDINATES,
  HOVERED_SCALE,
} from 'contstants';
import Konva from 'konva';
import { CanvasMouseEvent } from 'types';

export const onGrenadeMouseEvent = ({ id, e, x, y }: CanvasMouseEvent) => {
  const stage = e.target.getStage();

  if (!stage) return;
  const group = stage.findOne(`.grenadeGroup-${id}`) as Konva.Group;

  if (!group) return;
  const image = group.findOne('.image') as Konva.Image;
  const circle = group.findOne('.circle') as Konva.Circle;

  if (!image || !circle) return;

  const isMouseEnter = e.type === 'mouseenter';
  stage.container().style.cursor = isMouseEnter ? 'pointer' : 'default';

  const scaleFactor = isMouseEnter ? HOVERED_SCALE : DEFAULT_SCALE;

  image.x(
    x - GRENADE_LABEL_SIZE / 2 - (isMouseEnter ? HOVERED_COORDINATES : 0)
  );
  image.y(
    y - GRENADE_LABEL_SIZE / 2 - (isMouseEnter ? HOVERED_COORDINATES : 0)
  );
  image.scale(scaleFactor);
  circle.scale(scaleFactor);
};

export const onStartPositionMouseEvent = ({
  id,
  e,
  x,
  y,
}: CanvasMouseEvent) => {
  const stage = e.target.getStage();

  if (!stage) return;
  const group = stage.findOne(`.startPositionGroup-${id}`) as Konva.Group;

  if (!group) return;

  const text = group.findOne('.text') as Konva.Text;
  const shape = group.findOne('.shape') as Konva.Shape;

  if (!text || !shape) return;

  const isMouseEnter = e.type === 'mouseenter';
  stage.container().style.cursor = isMouseEnter ? 'pointer' : 'default';

  const scaleFactor = isMouseEnter ? HOVERED_SCALE : DEFAULT_SCALE;
  const fillColor = isMouseEnter
    ? 'rgba(198, 140, 61, 0.7)'
    : 'rgba(116, 100, 72, 0.6)';

  text.position({
    x: x - CORDINATES_SHIFT * scaleFactor.x,
    y: y - CORDINATES_SHIFT * scaleFactor.y,
  });
  text.scale(scaleFactor);
  shape.fill(fillColor);
};
