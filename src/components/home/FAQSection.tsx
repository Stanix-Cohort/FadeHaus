import Container from "../global/Container";

import { BiHelpCircle } from "react-icons/bi";

import FAQItem from "../shared/FAQItem";

import { faqs } from "../../assets/data";

export default function FAQSection() {
  return (
    <section
      className="
        bg-neutral-800

        py-12
        lg:py-10
      "
    >
      <Container>
        <div
          className="
            flex
            flex-col

            gap-10
          "
        >
          {/* Header */}

          <div
            className="
              flex
              flex-col

              items-center

              gap-4
            "
          >
            <div
              className="
                flex
                items-center

                gap-2
              "
            >
              <BiHelpCircle size={18} color="#DCC9A1" />

              <span
                className="
                  text-med-sm

                  text-(--color-brand-300)
                "
              >
                FAQs
              </span>

              <BiHelpCircle size={18} color="#DCC9A1" />
            </div>

            <p
              className="
                text-med-sm

                text-center

                text-white

                max-w-155
              "
            >
              Have questions? Here are answers to some of the things clients ask
              before booking with FadeHaus.
            </p>
          </div>

          {/* FAQ Grid */}

          <div
            className="
              grid

              gap-y-4
              gap-x-16

              lg:grid-cols-2
            "
          >
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          {/* Divider */}

          <div
            className="
              w-full
              h-px

              bg-neutral-700
            "
          />
        </div>
      </Container>
    </section>
  );
}
