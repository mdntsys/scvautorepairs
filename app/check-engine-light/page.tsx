import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Check Engine Light, Santa Clarita CA",
  description:
    "Check engine light on? SCV Auto Repairs in Santa Clarita, CA uses pro scan tools to find the real cause on any make. ASE-certified. Call 661-251-2515.",
  alternates: { canonical: "/check-engine-light" },
};

export default function CheckEngineLightPage() {
  return (
    <ServicePageLayout
      subtitle="ASE-Certified · 3-Year/36,000-Mile Warranty"
      title="Check Engine Light Diagnosis in Santa Clarita, CA"
      description="A check engine light can mean anything from a loose gas cap to a failing catalytic converter, and guessing is expensive. SCV Auto Repairs uses professional diagnostic scan tools to read your vehicle's trouble codes and find the real cause, for all makes and models including hybrids, right here in Santa Clarita. Our ASE-certified technicians explain what we find before any work begins, and every repair is backed by our 3-year/36,000-mile nationwide warranty. Call 661-251-2515."
      services={[
        "Computerized diagnostic scan",
        "Trouble-code (OBD-II) reading and interpretation",
        "Sensor testing and diagnosis",
        "Emissions-related diagnostics",
        "Drivability and performance diagnosis",
        "Oxygen sensor and catalytic converter diagnosis",
        "Mass airflow sensor testing",
        "Ignition system (spark plug and coil) diagnosis",
      ]}
      sections={[
        {
          heading: "What a Check Engine Light Actually Means",
          body: [
            "Your check engine light means your vehicle's onboard computer has detected a problem. What it does not tell you is exactly what that problem is. The same light can point to something as minor as a loose gas cap or as serious as a failing catalytic converter, which is why reading the code correctly matters so much.",
            "Pay attention to how the light behaves. A steady light usually means an issue that should be checked soon but is not an emergency. A flashing check engine light is more serious: it typically signals an active engine misfire that can quickly damage your catalytic converter. If your light is flashing, stop driving as soon as it is safe and call us.",
            "Some of the most common causes we see include:",
          ],
          bullets: [
            "Loose, cracked, or missing gas cap",
            "Failing oxygen sensor",
            "Catalytic converter problems",
            "Faulty mass airflow sensor",
            "Worn spark plugs or ignition coils",
            "Vacuum or evaporative (EVAP) system leaks",
          ],
        },
        {
          heading: "How We Diagnose It at SCV Auto Repairs",
          body: [
            "A trouble code is a starting point, not a final answer. A single code can have several possible causes, and simply swapping in the first part the code names often means paying for a repair that does not fix the problem. That is not how we work.",
            "Our ASE-certified technicians connect professional diagnostic scan tools to your vehicle, read the stored trouble codes, and then test the sensors, circuits, and components involved to confirm the true cause. When a diagnosis points to a deeper mechanical problem, our full engine diagnostics and repair service covers the fix from tune-ups to major internal work. Whatever we find, we explain it in plain language and get your approval before any work begins.",
          ],
        },
        {
          heading: "Don't Ignore It",
          body: [
            "It is tempting to keep driving with the light on, especially when the car seems to run fine. But many check-engine issues get worse and more expensive the longer they are left alone. A failing oxygen sensor, for example, can lower your fuel economy and, if ignored, contribute to a damaged catalytic converter that costs far more to replace.",
            "Many problems that trigger a check engine light are also emissions-related, so a lit light often goes hand in hand with a failed emissions test. SCV Auto Repairs diagnoses and repairs the underlying issue so your engine runs cleanly again, and catching it early almost always means a smaller, simpler repair.",
          ],
        },
        {
          heading: "Backed by Our 3-Year/36,000-Mile Warranty",
          body: [
            "Every diagnosis and repair at SCV Auto Repairs is performed by ASE-certified technicians using OEM-quality parts and backed by our 3-year/36,000-mile nationwide warranty. We stand behind our work whether you are close to home or out on the road.",
            "We serve drivers throughout Santa Clarita, Canyon Country, Saugus, Newhall, Valencia, Stevenson Ranch, Castaic, Acton, and Agua Dulce from our shop at 20723 Soledad Canyon Rd, open Monday through Friday, 7:30 AM to 4:00 PM. If your check engine light is on, do not guess. Call 661-251-2515 and let the team at SCV Auto Repairs find the real cause.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Is it safe to drive with my check engine light on?",
          a: "If the light is steady and the car drives normally, it is usually safe to reach the shop, but have it checked soon. If the light is flashing, or you notice power loss, odd noises, or overheating, stop driving as soon as it is safe and call 661-251-2515.",
        },
        {
          q: "What's the difference between a flashing and a steady check engine light?",
          a: "A steady light means the computer has logged a problem that should be diagnosed soon. A flashing light usually means an active misfire that can quickly damage your catalytic converter, so it should be treated as urgent.",
        },
        {
          q: "Can a loose gas cap really trigger the check engine light?",
          a: "Yes. A loose, cracked, or missing gas cap is one of the most common causes, because it lets fuel vapor escape and trips the emissions system. Tightening or replacing the cap often clears it, but a proper scan confirms that is truly the cause.",
        },
        {
          q: "How long does it take to diagnose, and what will it cost?",
          a: "It varies with the symptoms. A straightforward code can be confirmed fairly quickly, while an intermittent problem takes more testing. Rather than quote a number sight unseen, the team will assess your vehicle and explain what is involved before any work begins.",
        },
        {
          q: "Can a check engine light be related to a failed emissions test?",
          a: "Often, yes. Many check-engine problems are emissions-related, so the same fault can cause a failed emissions test. We diagnose and repair the underlying issue so your engine runs cleanly again.",
        },
      ]}
    />
  );
}
