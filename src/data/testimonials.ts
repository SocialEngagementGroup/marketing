export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  category: 'lawyer' | 'restaurant' | 'doctor' | 'ecommerce';
  rating?: number;
  time?: string;
  stats?: string;
}

export const allTestimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Working with the Social Engagement Group allowed me to focus on my business instead of worrying about marketing. Their team truly understands what law firms need to grow their online presence.",
    author: "Michael F. Campopiano",
    role: "CEO at",
    company: "The MFC Law",
    image: "/assets/testimonial/Michael F. Campopiano.png",
    category: "lawyer",
    rating: 5
  },
  {
    id: 2,
    quote: "Social Engagement Group built our website from the ground up and gave us a real online presence. We finally started showing up in search and the results speak for themselves.",
    author: "Sharif Aref",
    role: "Owner at",
    company: "Aref Law Firm",
    image: "/assets/testimonial/Sharif Aref.png",
    category: "lawyer",
    rating: 5
  },
  {
    id: 3,
    quote: "SEG helped bring our vision to life. They took the time to listen to what we wanted & turned our ideas into a brand we’re proud of. We got brand guidelines, logo, menus & social media content. Highly recommend working with them.",
    author: "Zakia Sumi",
    role: "CEO at",
    company: "The Munch Yard",
    image: "/assets/testimonial/Zakia Sumi.png",
    category: "restaurant",
    rating: 5
  },
  {
    id: 4,
    quote: "Social Engagement Group has been exceptional at marketing our practice. Their strategic approach and consistent execution have helped us attract more patients and strengthen our online presence.",
    author: "Dr. Junior King",
    role: "Medical Director at",
    company: "North Island Podiatry Associates",
    image: "/assets/testimonial/Dr. Junior King.png",
    category: "doctor",
    rating: 5
  },
  {
    id: 5,
    quote: "Social Engagement Group helped us go from 'quiet weekdays' to steady bookings. Guests now find us easily and trust us before they even walk in.",
    author: "Mohammad Rifahtul Haque",
    role: "Owner",
    company: "Flame Japanese Hibachi",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600&h=600",
    category: "restaurant",
    rating: 5,
    stats: "+70% Visibility"
  }
];

