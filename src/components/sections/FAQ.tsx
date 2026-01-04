'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'

interface FAQItem {
  question: string
  answer: string
}

const defaultFAQs: FAQItem[] = [
  {
    question: 'How does the AI voice receptionist work?',
    answer:
      'Our AI uses advanced speech recognition and natural language processing to understand callers and respond naturally. It can answer questions, schedule appointments, qualify leads, and transfer calls when needed.',
  },
  {
    question: 'Will callers know they are talking to an AI?',
    answer:
      'Our AI sounds natural and professional. Most callers appreciate the instant response and efficient service. You can choose to disclose it is an AI assistant or not.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most businesses are live within 24-48 hours. We handle all the technical setup and train the AI on your specific business needs.',
  },
  {
    question: 'Can I customize what the AI says?',
    answer:
      'Yes. We work with you to create custom scripts, answers to FAQs, and workflows that match your brand voice and business processes.',
  },
  {
    question: 'What happens if the AI cannot handle a call?',
    answer:
      'The AI can seamlessly transfer calls to you or your team when needed. You set the rules for when transfers should happen.',
  },
]

interface FAQProps {
  title?: string
  items?: FAQItem[]
}

export const FAQ: React.FC<FAQProps> = ({
  title = 'Frequently asked questions',
  items = defaultFAQs,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          {title}
        </h2>
        <div className="max-w-2xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="border-b border-border">
              <button
                className="w-full py-4 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium pr-4">{item.question}</span>
                <ChevronDown
                  className={clsx(
                    'w-5 h-5 flex-shrink-0 transition-transform',
                    openIndex === index && 'rotate-180',
                  )}
                />
              </button>
              <div
                className={clsx(
                  'overflow-hidden transition-all',
                  openIndex === index ? 'max-h-96 pb-4' : 'max-h-0',
                )}
              >
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
