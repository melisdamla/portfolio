'use client';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate web developer creating beautiful and functional digital experiences</p>
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Get in Touch
        </button>
      </div>
    </section>
  );
}
