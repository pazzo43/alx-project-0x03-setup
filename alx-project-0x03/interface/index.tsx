1. Create the directory structure

Inside your project (root):
alx-project-0x03/
│
├── interfaces/     ←  Create this
│   └── index.ts    ←  Empty file for now

To create it:

If using VS Code or file explorer:

Create folder: interfaces

Inside it: create file index.ts

If using terminal:
mkdir interfaces
touch interfaces/index.ts

2. Extract Interfaces from Your Files

You must locate any interfaces inside these files:

pages/index.tsx

components/common/Button.tsx

components/layouts/Layout.tsx

Then move each interface to interfaces/index.ts and export them.

3. Example of What You Will Move

Below is the general pattern.
Your actual file may look slightly different, but the structure will be the same.

 Example: Interface inside Button.tsx

You may have something like:

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

Remove it from the file and paste it into:

interfaces/index.ts
export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

Example: Interface from Layout.tsx

You might have something like:
interface LayoutProps {
  children: React.ReactNode;
}

Move it to interfaces/index.ts:
export interface LayoutProps {
  children: React.ReactNode;
}

Example: Interface from pages/index.tsx

Maybe something like:
interface HomeProps {
  title: string;
}

Move it too:
export interface HomeProps {
  title: string;
}

. Import the Interfaces Back into Each File
Example: Button.tsx

Replace the deleted interface with:
import { ButtonProps } from "@/interfaces";

Example: Layout.tsx
import { LayoutProps } from "@/interfaces";

Example: pages/index.tsx
import { HomeProps } from "@/interfaces";

5. What Your interfaces/index.ts Should Look Like

A combined example:
export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface HomeProps {
  title: string;
}

This file will grow as your app grows.
  6. Run Your App

In the terminal:
npm run dev

Then go to:

http://localhost:3000

app should run exactly the same, because I only reorganized code — not changed logic.


