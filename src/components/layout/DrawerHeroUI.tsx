import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from "@heroui/react";
import { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  onOpenChange?: () => void;
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  placement?: "left" | "right" | "top" | "bottom";
  showFooter?: boolean;
}

export default function DrawerHeroUI({
  isOpen,
  onOpenChange,
  header,
  body,
  footer,
  placement = "left",
  showFooter = false,
}: Props) {
  return (
    <>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement={placement}>
        <DrawerContent>
          {(onClose: () => void) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">{header}</DrawerHeader>
              <DrawerBody className="p-0">
                {body || (
                  <>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                      venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                      venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.
                      Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
                      enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                      proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                    </p>
                  </>
                )}
              </DrawerBody>
              <DrawerFooter>
                {footer ||
                  (showFooter && (
                    <>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Action
                      </Button>
                    </>
                  ))}
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
