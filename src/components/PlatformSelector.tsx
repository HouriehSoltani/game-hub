import { Button, Link, Menu, MenuItem, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button variant="subtle">
          {selectedPlatform?.name || "Platforms"}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <MenuItem>
                <Link
                  key={platform.id}
                  variant="plain"
                  onClick={() => onSelectPlatform(platform)}
                >
                  {platform.name}
                </Link>
              </MenuItem>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
