"use client";

import React from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export type AccordionItemProps = {
  title: string;
  description: string;
};

type AccordionProps = {
  accordionItems: AccordionItemProps[];
};

const Accordion: React.FC<AccordionProps> = ({ accordionItems }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-4xl">
        <dl className="space-y-6 divide-y divide-light-gray">
          {accordionItems.map((item) => (
            <Disclosure as="div" key={item.title} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left">
                      <span className="text-xl xl:text-3xl font-glancyr leading-7">
                        {item.title}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <Image
                            src="/close-accordion.svg"
                            width={24}
                            height={24}
                            alt=""
                          />
                        ) : (
                          <Image
                            src="/open-accordion.svg"
                            width={24}
                            height={24}
                            alt=""
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="leading-7">{item.description}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
};
export default Accordion;
