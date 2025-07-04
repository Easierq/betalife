import {
  BadgeDollarSign,
  Route,
  ShieldCheck,
  Truck,
  Undo2,
  UserRoundCheck,
} from "lucide-react";

const faq = [
  {
    icon: Undo2,
    question: "What kind of businesses do you work with?",
    answer:
      "I work with small businesses, startups, service providers, and eCommerce brands — both B2B and B2C.",
  },
  {
    icon: Route,
    question: "How much do your services cost?",
    answer:
      "Pricing depends on the scope and duration of the project. I offer both one-off packages and monthly retainers — let’s chat!",
  },
  {
    icon: Truck,
    question: "Do you offer one-time consultations?",
    answer:
      "Yes! If you need a one-off strategy session, audit, or campaign review, I’m happy to help.",
  },
  {
    icon: BadgeDollarSign,
    question: "Do you offer performance tracking and reporting?",
    answer:
      "Yes. I provide regular reports with clear metrics, insights, and recommendations so you always know how your campaigns are performing.",
  },
  {
    icon: ShieldCheck,
    question: "How long does it take to see results?",
    answer:
      "It depends on the service. For paid ads, results can start within days. SEO and organic growth strategies take longer — typically 2–3 months — but yield long-term benefits.",
  },
  {
    icon: UserRoundCheck,
    question:
      "Can you manage everything or just specific parts of my marketing?",
    answer:
      "I’m flexible. I can handle your full marketing strategy or focus on specific areas like ads, SEO, or content — whatever supports your goals best.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="min-h-screen flex items-center justify-center px-6 py-5 xs:py-20"
    >
      <div className="max-w-screen-lg">
        <h2 className="text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-brand-navy mt-2 sm:mt-4  text-center text-xl font-semibold">
          Quick answers to common questions about our products and services.
        </p>

        <div className="mt-12 grid md:grid-cols-2 bg-brand-gray rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="border p-6 -mt-px -ml-px">
              <div className="h-8 w-8 xs:h-10 xs:w-10 flex items-center justify-center rounded-full bg-accent">
                <Icon className="h-4 w-4 xs:h-6 xs:w-6" />
              </div>
              <div className="mt-3 mb-2 flex items-start gap-2 text-lg xs:text-[1.35rem] font-semibold tracking-tight">
                <span>{question}</span>
              </div>
              <p className="text-sm xs:text-base">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
