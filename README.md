This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


public/
    images/← restaurant photos, logo
src/
    app/← Next.js App Router
        layout.tsx
        page ← root layout, fonts, meta
    page.tsx
    page← home — hero, info, contact, CTA
    order/
        page.tsx
        page← order type selector
    dine-in/
        page.tsx
        page← booking ref + food pre-order
    takeaway/
        page.tsx
        page← name + pickup time
    delivery/
        page.tsx
        page← name + address
    admin/← password-protected
        layout.tsx← auth guard middleware
    login/page.tsx
        page
    dashboard/
        page.tsx
        page← overview
    menu/
        page.tsx
        page← add/edit/delete items
    settings/
        page.tsx
        page← WA numbers, hours, delivery radius
    components/
        layout/
            Navbar.tsx← logo, nav links, order CTA
            Footer.tsx← contact, address, map link
        menu/
            MenuGrid.tsx← item listing by category
            MenuCard.tsx← single item card
            CategoryFilter.tsx← tab or pill filter
            CartDrawer.tsx← slide-in cart summary
        order/
            OrderTypeCard.tsx← dine-in / takeaway / delivery card
            DineInForm.tsx← booking ref, date, name
            TakeawayForm.tsx← name, pickup time
            DeliveryForm.tsx← name, phone, address
            WhatsAppButton.tsx
            util← builds wa.me URL + fires it
        admin/
            Sidebar.tsx
            ItemForm.tsx← add/edit item modal
            SettingsForm.tsx← per-type WA number config
        lib/
            supabase.ts
            util← Supabase client (server + browser)
            whatsapp.ts
            util← wa.me message builder per type
            qrcode.ts
            util← QR code generation per order type
        store/
            cartStore.ts
            util← Zustand — items, qty, total
        types/
            index.ts← MenuItem, CartItem, OrderType...
.env.local
env← Supabase URL/key, WA numbers
next.config.ts
tailwind.config.ts
package.json