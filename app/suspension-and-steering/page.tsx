import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Suspension & Steering, Santa Clarita CA",
  description:
    "Suspension and steering repair in Santa Clarita, CA. Shocks, struts, ball joints, wheel alignment, and steering racks. Call 661-251-2515.",
  alternates: { canonical: "/suspension-and-steering" },
};

export default function SuspensionSteeringPage() {
  return (
    <ServicePageLayout
      subtitle="ASE-Certified · 3-Year/36,000-Mile Warranty"
      title="Suspension & Steering in Santa Clarita, CA"
      description="A worn suspension affects not just comfort — it affects safety. From rough roads to sharp corners, your vehicle's suspension and steering components work together to keep you in control. SCV Auto Repairs uses advanced equipment and OEM-quality parts to restore precision handling and ride quality on all vehicle makes and models."
      services={[
        "Shock absorber replacement",
        "Strut replacement",
        "Ball joint replacement",
        "Tie rod end replacement",
        "Power steering fluid flush",
        "Steering rack or gearbox repair",
        "Wheel alignment",
        "Control arm and bushing replacement",
        "Sway bar link and bushing replacement",
        "Steering pump repair and replacement",
      ]}
      sections={[
        {
          heading: "Signs You Need Suspension or Steering Repair in Santa Clarita",
          body: [
            "Suspension and steering problems rarely show up overnight. They build gradually, so it is easy to get used to a ride that has slowly gotten rougher or a steering wheel that no longer tracks straight. Catching the early warning signs keeps a small worn part from turning into a safety issue or an expensive chain of failures. If you notice any of the following while driving around Santa Clarita, it is worth having the system inspected.",
          ],
          bullets: [
            "Excessive bouncing or a floating feeling after you hit a bump or dip",
            "The vehicle pulling to one side even when the road is level",
            "Uneven or unusually fast tire wear on the inside or outside edges",
            "Clunking, knocking, or rattling noises when driving over rough pavement",
            "A steering wheel that feels loose, wanders, or needs constant correction",
            "Vibration through the steering wheel at freeway speeds",
            "The nose diving hard under braking or the body leaning heavily in corners",
            "Hard steering, a whining pump, or a low power steering fluid level",
          ],
        },
        {
          heading: "What to Expect at SCV Auto Repairs",
          body: [
            "Every suspension and steering job starts with a hands-on inspection. Our ASE-certified technicians check the shocks and struts, ball joints, tie rod ends, control arm bushings, sway bar links, and the steering rack or gearbox for play, leaks, and wear. We put the vehicle on a lift so we can see how the components move under load rather than guessing from the driver's seat.",
            "Once we know what is actually worn, we walk you through the findings before we do any work, so you can decide what to address now and what can safely wait. Repairs use OEM-quality parts, and any job that changes wheel position is followed by a wheel alignment check so your tires wear evenly and the car tracks straight. Because worn suspension and poor alignment are a common cause of premature tire wear, we will also flag anything you should know about your tires while we are in there. Every completed repair is backed by our 3-year/36,000-mile nationwide warranty.",
          ],
        },
        {
          heading: "How Santa Clarita Roads Wear Out Suspension",
          body: [
            "Suspension and steering parts take a real beating in the Santa Clarita Valley. Soledad Canyon Road and the older canyon routes toward Acton and Agua Dulce are full of uneven pavement, dips, and patched surfaces that hammer shocks, struts, and bushings mile after mile. Add the potholes that open up after winter storms and the constant stop-and-go on Soledad and Bouquet Canyon, and it is easy to see why local drivers wear these parts out faster than someone who only sees smooth freeway.",
            "Freeway miles matter too. Drivers commuting over the Newhall Pass grade on I-5 or running out Highway 14 spend a lot of time at speed, where a small alignment problem or a worn tie rod turns into steering-wheel vibration and uneven tire wear. Regular inspections catch these issues before they cost you a set of tires or leave you fighting the wheel on the freeway.",
          ],
        },
        {
          heading: "Backed by Our 3-Year/36,000-Mile Warranty",
          body: [
            "Whatever you drive, our team can help. SCV Auto Repairs services all makes and models, including hybrid and electric vehicles, and every completed suspension and steering repair is backed by our 3-year/36,000-mile nationwide warranty. Our ASE-certified technicians use OEM-quality parts and stand behind the work. To get your ride and handling back, call us at 661-251-2515 or book a visit online.",
          ],
        },
      ]}
      faqs={[
        {
          q: "How often should suspension be inspected?",
          a: "We recommend a suspension inspection every 12,000 miles or once per year, especially if you drive on rough roads or notice any changes in handling.",
        },
        {
          q: "What are signs of suspension problems?",
          a: "Signs include excessive bouncing, pulling to one side, uneven tire wear, clunking noises over bumps, or a drifting feeling when turning.",
        },
        {
          q: "How long does a suspension repair take?",
          a: "Simple repairs like shock or strut replacements typically take 1–2 hours. More complex jobs involving multiple components may take longer.",
        },
        {
          q: "Do you include wheel alignment with suspension repairs?",
          a: "Yes. Any steering or suspension repair that affects wheel position includes a wheel alignment check as part of the service.",
        },
        {
          q: "Can worn suspension cause my tires to wear out faster?",
          a: "Yes. Worn shocks, struts, and bushings let a tire bounce and scrub against the road instead of staying planted, which wears the tread unevenly and shortens tire life. Fixing the suspension and checking alignment protects your tire investment.",
        },
        {
          q: "Do I need a wheel alignment after suspension work?",
          a: "Any repair that changes the position of a wheel, such as replacing control arms, tie rods, or struts, should be followed by a wheel alignment so the car tracks straight and the tires wear evenly.",
        },
      ]}
    />
  );
}
