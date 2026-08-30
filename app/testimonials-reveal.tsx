"use client";

import {useEffect, useState} from 'react';

type Testimonial = {
  name: string;
  role: string;
  perspective: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Harish Vithan',
    role: 'UX Manager · Proficon Labs',
    perspective: 'UX leadership perspective',
    image: '/testimonials/harish-vithan.png',
    quote: 'I had the opportunity to work closely with Akshay at Proficon Labs. What stood out was his strong sense of ownership, clear UX thinking, and ability to tell the story behind his design decisions in a way that made complex problems easier to understand. He is dependable, collaborative, open to feedback, and genuinely cares about creating better user experiences. I would highly recommend Akshay to any team looking for a skilled UX/Product Designer who can take ownership and contribute meaningfully to a product.',
  },
  {
    name: 'Hooma Roy Choudhury',
    role: 'Founder · Travel Jaunts & LUXTJ',
    perspective: 'Client perspective',
    image: '/testimonials/hooma-roy.png',
    quote: 'Akshay has approached that process with patience, openness, and a genuine willingness to make the product better. With Akshay, you are dealing with a genuinely good human being—sincere, dependable and humble.',
  },
  {
    name: 'Palash Makhijja',
    role: 'Senior Software Engineer',
    perspective: 'Engineering perspective',
    image: '/testimonials/palash-makhijja.png',
    quote: 'He is a thoughtful UX Designer who understands user needs and works well with developers to turn ideas into practical solutions. Akshay was always easy to work with, open to feedback, and clear in communicating his design decisions.',
  },
  {
    name: 'Dhruvi Kapdi',
    role: 'Senior Flutter Developer',
    perspective: 'Development perspective',
    image: '/testimonials/dhruvi-kapdi.png',
    quote: 'Working with him was always smooth and collaborative. He communicated his ideas clearly, was open to feedback, and worked closely with the development team to make sure the designs were practical and delivered as intended.',
  },
];

export default function TestimonialsReveal() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="testimonial-reveal-grid" aria-label="Testimonials">
      {testimonials.map((item, index) => {
        const isOpen = active === index;
        return (
          <article
            className={`testimonial-reveal ${isOpen ? 'is-open' : ''}`}
            key={item.name}
            tabIndex={0}
            onFocus={() => setActive(index)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setActive(null);
            }}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            onClick={() => setActive(isOpen ? null : index)}
            aria-label={`${item.name}, ${item.role}`}
          >
            <div className="testimonial-reveal-photo" aria-hidden="true">
              <img src={item.image} alt="" loading="lazy" />
            </div>
            <div className="testimonial-reveal-front">
              <div className="testimonial-reveal-head">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <small>{item.perspective}</small>
              </div>
              <div className="testimonial-reveal-copy">
                <strong>{item.name}</strong>
                <span>{item.role}</span>
                <p>“{item.quote}”</p>
              </div>
              <div className="testimonial-reveal-hint">Hover to reveal</div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
