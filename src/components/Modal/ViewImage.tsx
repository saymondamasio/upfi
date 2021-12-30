import {
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="900px">
        <ModalBody p="0">
          <Image src={imgUrl} w="100%" maxH="600px" />
        </ModalBody>
        <ModalFooter bgColor="gray.800">
          <Link mr="auto" href={imgUrl} isExternal>
            Abrir Original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
