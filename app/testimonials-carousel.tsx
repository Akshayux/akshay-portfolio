"use client";

import {useCallback, useEffect, useState, type CSSProperties} from 'react';

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

function ringSlot(index: number, active: number) {
  const raw = (index - active + testimonials.length) % testimonials.length;
  return raw > testimonials.length / 2 ? raw - testimonials.length : raw;
}

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const move = useCallback((direction: number) => {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => move(1), 7600);
    return () => window.clearInterval(timer);
  }, [move]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') move(1);
      if (event.key === 'ArrowLeft') move(-1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [move]);

  const current = testimonials[active];

  return (
    <div className="crescent-quote" aria-label="Testimonials carousel">
      <div className="crescent-stage" aria-live="polite">
        {testimonials.map((item, index) => {
          const slot = ringSlot(index, active);
          const distance = Math.abs(slot);
          const style = {
            '--slot': slot,
            '--slot-y': `${distance * distance * 28}px`,
            '--slot-rotate': `${slot * 6}deg`,
            '--slot-scale': `${1 - distance * 0.13}`,
            '--slot-opacity': `${distance > 2 ? 0 : 1 - distance * 0.2}`,
            '--slot-z': `${10 - distance}`,
          } as CSSProperties;

          return (
            <button
              className={`crescent-plate ${slot === 0 ? 'is-active' : ''}`}
              key={item.name}
              type="button"
              style={style}
              onClick={() => setActive(index)}
              aria-label={`Show testimonial from ${item.name}`}
              aria-current={slot === 0 ? 'true' : undefined}
              data-cursor-label="View"
            >
              <span className="crescent-frame">
                <img src={item.image} alt="" loading="lazy" />
                <span className="crescent-image-scrim" />
                <span className="crescent-plate-meta">
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="crescent-copy">
        <div className="crescent-copy-topline">
          <span>{String(active + 1).padStart(2, '0')} / 04</span>
          <span>{current.perspective}</span>
        </div>
        <blockquote>“{current.quote}”</blockquote>
        <div className="crescent-copy-footer">
          <div>
            <strong>{current.name}</strong>
            <span>{current.role}</span>
          </div>
          <div className="crescent-controls">
            <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial" data-cursor-label="Back">←</button>
            <div className="crescent-dots" role="tablist" aria-label="Choose a testimonial">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-label={`Show ${item.name}`}
                  aria-selected={active === index}
                  className={active === index ? 'is-active' : ''}
                  onClick={() => setActive(index)}
                  data-cursor-label="Pick"
                />
              ))}
            </div>
            <button type="button" onClick={() => move(1)} aria-label="Next testimonial" data-cursor-label="Next">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}
