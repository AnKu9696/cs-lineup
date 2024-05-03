import { ImageConfig } from 'konva/lib/shapes/Image';
import { KonvaEventObject } from 'konva/lib/Node';
import { Group } from 'konva/lib/Group';

export interface GrenadeProps extends Omit<ImageConfig, 'image'> {
  grenadeType: string;
  count: number;
  x: number;
  y: number;
  isSelected: boolean;
}

export type Position = {
  x: number;
  y: number;
};

export type EndLocation = {
  id: string;
  calloutName: string;
  map: string;
  position: Position;
  type: string;
  count: number;
};

export type StartPosition = {
  id: string;
  calloutName: string;
  map: string;
  position: Position[];
  labelPosition: Position;
  count: number;
};

export type GrenadeSetup = {
  id: string;
  calloutName: string;
  map: string;
  position: Position;
  type: string;
  count: number;
  startPositions: StartPosition[];
};

export type VideoTutorial = {
  endPositionId: string;
  id: string;
  startPositionId: string;
  startPositionName: string;
  teamSide: string;
  videoId: string;
  videoUrl: string;
  viewCount: number;
  description: string;
  title: string;
  thumbnails: any;
};

export type VideoTutorials = VideoTutorial[];

export type GrenadesData = GrenadeSetup[];

export type CanvasMouseEvent = {
  id: string;
  e: KonvaEventObject<MouseEvent>;
  x: number;
  y: number;
};
