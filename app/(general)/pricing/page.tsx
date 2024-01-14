import type {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Pricing page',
  description: 'Pricing page',
}

export default function pricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing page</span>
    </>
  )
}