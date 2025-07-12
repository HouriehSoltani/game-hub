import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button variant="subtle">
          Sort By : Relevance
          <BsChevronDown />
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item>Relevance</Menu.Item>
            <Menu.Item>Date added</Menu.Item>
            <Menu.Item>Name</Menu.Item>
            <Menu.Item>Release date</Menu.Item>
            <Menu.Item>Popularity</Menu.Item>
            <Menu.Item>Average rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
