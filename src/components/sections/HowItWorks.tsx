import React from 'react'

interface Step {
  number: string
  title: string
  description: string
}

const defaultSteps: Step[] = [
  {
    number: '01',
    title: 'Tell us about your business',
    description:
      'Share your business details, common questions, and how you want calls handled.',
  },
  {
    number: '02',
    title: 'We configure your AI receptionist',
    description:
      'Our team sets up your custom voice AI with your branding and workflows.',
  },
  {
    number: '03',
    title: 'Go live and never miss a call',
    description:
      'Forward your calls and let AI handle the rest. Monitor everything from your dashboard.',
  },
]

interface HowItWorksProps {
  title?: string
  steps?: Step[]
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  title = 'How it works',
  steps = defaultSteps,
}) => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-muted-foreground/30 mb-4">
                {step.number}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
