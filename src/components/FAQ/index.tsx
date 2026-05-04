"use client";

import { useState } from "react";

import { faqSections } from "@/data/faqData";

const FAQ = () => {
  const firstId = faqSections[0]?.items[0]?.id ?? null;
  const [activeId, setActiveId] = useState<string | null>(firstId);

  return (
    <section className="mx-auto py-8 md:max-w-2/3">
      <div className="container">
        <div className="space-y-10">
          {faqSections.map((section) => (
            <div key={section.id}>
              <div className="mb-4">
                <h2 className="text-dark text-xl font-bold md:text-2xl dark:text-white">
                  {section.title}
                </h2>
                {section.description && (
                  <p className="text-body-color dark:text-body-color-dark mt-1 max-w-3xl text-base">
                    {section.description}
                  </p>
                )}
              </div>

              <div className="overflow-hidden rounded-xl border border-[#e6eaef]">
                {section.items.map((item) => {
                  const isActive = activeId === item.id;

                  return (
                    <div
                      key={item.id}
                      className="border-b border-[#e6eaef] last:border-b-0"
                    >
                      <button
                        type="button"
                        className={`flex w-full items-center justify-between px-5 py-4 text-left`}
                        onClick={() =>
                          setActiveId((prev) =>
                            prev === item.id ? null : item.id,
                          )
                        }
                      >
                        <span
                          className={`text-base font-medium md:text-lg ${
                            isActive && "font-bold!"
                          }`}
                        >
                          {item.question}
                        </span>
                        <span className="text-primary ml-4 shrink-0 text-xl leading-none">
                          {isActive ? "-" : "+"}
                        </span>
                      </button>

                      {isActive && (
                        <div className="px-8 pt-1 pb-4">
                          <p className="text-base leading-relaxed text-black dark:text-white">
                            - {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
