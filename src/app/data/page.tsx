// src/app/data/page.tsx
import { prisma } from "@/lib/prisma";
import CreateUserForm from "./CreateUserForm";

export const revalidate = 0;

export default async function DataPage() {
  // Server-side fetch
  const users = await prisma.user.findMany({ select: { id: true, name: true, email: true } });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Users</h1>

      <ul className="list-disc list-inside mt-4">
        {users.length > 0
          ? users.map((u) => <li key={u.id}>{u.name} ({u.email})</li>)
          : <p>No users found</p>
        }
      </ul>

      {/* Client-side form */}
      <CreateUserForm />
    </div>
  );
}

