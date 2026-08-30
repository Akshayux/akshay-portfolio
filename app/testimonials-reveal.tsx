"use client";

import {useState} from 'react';

type Testimonial = {
  name: string;
  role: string;
  perspective: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Hooma Roy Choudhury',
    role: 'Founder · Travel Jaunts & LUXTJ',
    perspective: 'Client perspective',
    quote: 'Akshay has approached that process with patience, openness, and a genuine willingness to make the product better. With Akshay, you are dealing with a genuinely good human being—sincere, dependable and humble.',
  },
  {
    name: 'Harish Vithan',
    role: 'UX Lead · Proficon Labs',
    perspective: 'UX leadership perspective',
    quote: 'I had the opportunity to work closely with Akshay at Proficon Labs. What stood out was his strong sense of ownership, clear UX thinking, and ability to tell the story behind his design decisions in a way that made complex problems easier to understand. He is dependable, collaborative, open to feedback, and genuinely cares about creating better user experiences. I would highly recommend Akshay to any team looking for a skilled UX/Product Designer who can take ownership and contribute meaningfully to a product.',
  },
  {
    name: 'Palash Makhijja',
    role: 'Senior Software Engineer',
    perspective: 'Engineering perspective',
    quote: 'He is a thoughtful UX Designer who understands user needs and works well with developers to turn ideas into practical solutions. Akshay was always easy to work with, open to feedback, and clear in communicating his design decisions.',
  },
  {
    name: 'Dhruvi Kapdi',
    role: 'Senior Flutter Developer',
    perspective: 'Development perspective',
    quote: 'Working with him was always smooth and collaborative. He communicated his ideas clearly, was open to feedback, and worked closely with the development team to make sure the designs were practical and delivered as intended.',
  },
];

export default function TestimonialsReveal() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];
  const move = (direction: number) => {
    setActive((index) => (index + direction + testimonials.length) % testimonials.length);
  };
  const remaining = testimonials
    .map((item, index) => ({item, index}))
    .filter(({index}) => index !== active);

  return (
    <div className="testimonial-simple" aria-label="Testimonials">
      <article className="testimonial-featured" key={current.name} aria-live="polite">
        <header>
          <span>{String(active + 1).padStart(2, '0')} / 04</span>
          <small>{current.perspective}</small>
        </header>
        <blockquote>“{current.quote}”</blockquote>
        <footer>
          <div>
            <strong>{current.name}</strong>
            <span>{current.role}</span>
          </div>
          <div className="testimonial-controls">
            <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial" data-cursor-label="Back">←</button>
            <button type="button" onClick={() => move(1)} aria-label="Next testimonial" data-cursor-label="Next">→</button>
          </div>
        </footer>
      </article>

      <div className="testimonial-next-list" aria-label="Other testimonials">
        <span className="testimonial-next-label">Up next</span>
        {remaining.map(({item, index}) => (
          <button
            type="button"
            className="testimonial-next-card"
            key={item.name}
            onClick={() => setActive(index)}
            aria-label={`Read ${item.name}'s testimonial`}
            data-cursor-label="View"
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <strong>{item.name}</strong>
              <small>{item.role}</small>
              <p>“{item.quote}”</p>
            </div>
            <b aria-hidden="true">↗</b>
          </button>
        ))}
      </div>
    </div>
  );
}
