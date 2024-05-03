import {
  AbsoluteCenter,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
} from '@chakra-ui/react';
import { VideoTutorials } from 'types';

import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';

import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from '@vidstack/react/player/layouts/default';

const VideoModal = ({
  isOpen,
  onClose,
  videosData,
  isLoading,
}: {
  isLoading: boolean;
  isOpen: boolean;
  onClose: () => void;
  videosData: VideoTutorials | [];
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent
        minWidth='fit-content'
        height='fit-content'
      >
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {!isLoading ? (
            <Grid
              templateColumns={`repeat(${Math.min(videosData.length, 4)}, 1fr)`}
              gap='4'
            >
              {videosData.map(({ videoUrl, title, thumbnails, id }) => (
                <MediaPlayer
                  key={id}
                  muted
                  title={title}
                  src={videoUrl}
                  load='play'
                >
                  <MediaProvider>
                    <Poster
                      className='vds-poster'
                      src={thumbnails.medium.url}
                      alt='...'
                    />
                  </MediaProvider>

                  <DefaultVideoLayout
                    icons={defaultLayoutIcons}
                    style={{
                      '--media-brand': 'black',
                    }}
                  />
                </MediaPlayer>
              ))}
            </Grid>
          ) : (
            <AbsoluteCenter>
              <Spinner
                thickness='4px'
                speed='0.5s'
                emptyColor='gray.200'
                color='rgba(116, 100, 72, 1)'
                size='xl'
              />
            </AbsoluteCenter>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default VideoModal;
