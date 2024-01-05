'use client';

import { useState } from 'react';
import { Button } from '@nextui-org/button';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from '@nextui-org/table';
import { Pagination } from '@nextui-org/pagination';
import { Listbox, ListboxItem } from '@nextui-org/listbox'; 
import { Input } from '@nextui-org/input';
import { useDisclosure } from '@nextui-org/react';
import { NavbarUi } from '@/components/commons/NavbarUi';
import { ThemeSwitcher } from '@/components/commons/ThemeSwitcher';
import { ModalSample } from '@/components/commons/ModalSample';
import { columnsOfEmployees, rowsOfEmployees } from '@/utils/dummy';

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);

export default function Home() {
  const columns = [...columnsOfEmployees];
  const rows = [...rowsOfEmployees];
  const [currentPage, setCurrentPage] = useState(1);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <main>
      <NavbarUi />
      <div className="px-6 flex gap-4 flex-col pb-16 flex-grow">
        <div className="flex justify-end">
          <ThemeSwitcher />
        </div>
        <h1 className="text-xl font-medium">Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpis. Augue neque gravida in fermentum et sollicitudin ac orci. Et sollicitudin ac orci phasellus egestas. Elementum tempus egestas sed sed risus pretium quam vulputate. Interdum velit euismod in pellentesque massa placerat duis ultricies.
        </p>
        <p>
          Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque gravida in.
        </p>
        <p>
          Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida dictum fusce ut placerat. Erat velit scelerisque in dictum non. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Eu nisl nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Sed id semper risus in hendrerit gravida rutrum. Eget nulla facilisi etiam dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida rutrum quisque non tellus orci ac.
        </p>
        <p>
          Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. In pellentesque massa placerat duis ultricies. Sit amet massa vitae tortor condimentum. Morbi tincidunt augue interdum velit euismod. Aliquet enim tortor at auctor urna nunc id. A scelerisque purus semper eget. Vitae justo eget magna fermentum iaculis. Arcu non odio euismod lacinia at quis. Et leo duis ut diam quam nulla porttitor massa. Eget nunc scelerisque viverra mauris. Suscipit tellus mauris a diam maecenas sed enim. Cras sed felis eget velit aliquet. Est placerat in egestas erat imperdiet sed euismod nisi porta. In ante metus dictum at tempor commodo. In cursus turpis massa tincidunt dui ut ornare lectus. Tempus iaculis urna id volutpat. Iaculis eu non diam phasellus vestibulum lorem sed risus.
        </p>
        <p>
          Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Faucibus pulvinar elementum integer enim neque volutpat. Gravida arcu ac tortor dignissim convallis aenean. Lectus quam id leo in vitae. Ultricies tristique nulla aliquet enim tortor. Nec tincidunt praesent semper feugiat nibh sed. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Praesent semper feugiat nibh sed pulvinar proin gravida. Dis parturient montes nascetur ridiculus mus mauris. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Ut lectus arcu bibendum at. Integer enim neque volutpat ac. Diam sit amet nisl suscipit. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Quis lectus nulla at volutpat diam ut. Turpis egestas integer eget aliquet. Adipiscing tristique risus nec feugiat in fermentum posuere. Morbi tempus iaculis urna id. Amet commodo nulla facilisi nullam vehicula ipsum a arcu.
        </p>
        <p>
          Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque gravida in.
        </p>
        <p>
          Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida dictum fusce ut placerat. Erat velit scelerisque in dictum non. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Eu nisl nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Sed id semper risus in hendrerit gravida rutrum. Eget nulla facilisi etiam dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida rutrum quisque non tellus orci ac.
        </p>
      </div>
      <div className="flex flex-col gap-4 p-10">
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={rows} emptyContent={"No rows to display."}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex justify-end">
          <Pagination 
            isCompact={false} 
            showControls 
            showShadow 
            total={10} 
            initialPage={1} 
            page={currentPage}
            onChange={setCurrentPage}
          />
        </div>
        <Button className="w-[200px]" onPress={onOpen}>Open Modal</Button>
        <ListboxWrapper>
            <Listbox
              aria-label="Actions"
            >
              <ListboxItem key="new">New file</ListboxItem>
              <ListboxItem key="copy">Copy link</ListboxItem>
              <ListboxItem key="edit">Edit file</ListboxItem>
              <ListboxItem key="delete" className="text-danger" color="danger">
              Delete file
            </ListboxItem>
          </Listbox>
        </ListboxWrapper>
        <Input
          isClearable
          type="email"
          variant="bordered"
          placeholder="Enter your email"
          defaultValue="junior@nextui.org"
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        />
        <Button className="w-[200px]">Click me</Button>
      </div> 
      <ModalSample isOpen={isOpen} onOpenChange={onOpenChange} />
    </main>
  )
}
