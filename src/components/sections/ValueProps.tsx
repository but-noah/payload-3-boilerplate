import React from 'react'
import { Phone, Clock, TrendingUp, Shield, Zap } from 'lucide-react'

interface ValueProp {
  icon: React.ReactNode
  title: string
  description: string
}

const defaultValueProps: ValueProp[] = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Never miss a lead',
    description: 'Every call is answered, even at 3am on a Sunday.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: '24/7 availability',
    description: 'Your AI receptionist works around the clock without breaks.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Increase conversions',
    description: 'Qualify leads instantly and book appointments on the spot.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Professional & consistent',
    description: 'Every caller gets the same high-quality experience.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Instant setup',
    description: 'Go live in minutes, not weeks. No technical skills required.',
  },
]

interface ValuePropsProps {
  title?: string
  items?: ValueProp[]
}

export const ValueProps: React.FC<ValuePropsProps> = ({
  title = 'Why businesses choose us',
  items = defaultValueProps,
}) => {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
