 "use client"

 import { useEffect } from "react"

 declare global {
   interface Window {
     gtag?: (...args: unknown[]) => void
   }
 }

 export const metadata = {
   title: "Thank You | USA Lighting",
   description: "Thank you for submitting your request. We'll be in touch soon!",
 }

 export default function ThankYouPage() {
   useEffect(() => {
     if (typeof window === "undefined" || typeof window.gtag !== "function") return

     window.gtag("event", "conversion", {
       send_to: "AW-10993740389/_IPXCKTSksYbEOXUnPoo",
       value: 1.0,
       currency: "USD",
     })
   }, [])

   return (
     <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 text-slate-100">
       <h1 className="text-4xl font-semibold text-amber-300">Thank You!</h1>
       <p className="mt-4 max-w-xl text-center text-lg leading-relaxed">
         Your request for professional Christmas lighting has been received. One of our designers
         will reach out shortly to finalize the details.
       </p>
     </main>
   )
 }
