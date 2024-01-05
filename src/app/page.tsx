'use client';

import { Button } from '@nextui-org/button';
import { Listbox, ListboxItem } from '@nextui-org/listbox'; 
import { Input } from '@nextui-org/input';

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-10">
      Test Hello World 
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
      <Button>Click me</Button>     
    </main>
  )
}
