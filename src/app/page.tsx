import { Button } from '@/components/ui/button';

import { createAdminClient } from '@/lib/appwrite';

export default function Home() {
  console.log(createAdminClient, 'hello');
  return (
    <div className="">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="muted">Muted</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="tertiary">Tertiary</Button>
    </div>
  );
}
