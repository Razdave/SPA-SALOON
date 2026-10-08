import heroImg from '../assets/images/manicure_nail_file_editorial_1791448441199.jpg';
import frenchImg from '../assets/images/gallery_french_micro_mani_1791448743098.jpg';
import chromeImg from '../assets/images/gallery_chrome_glaze_nails_1791448758324.jpg';
import pediImg from '../assets/images/gallery_pedicure_spa_ritual_1791448773423.jpg';
import interiorImg from '../assets/images/salon_interior_aesthetic_1791448788053.jpg';

export interface ServiceItem {
  id: string;
  category: 'manicures' | 'pedicures' | 'overlays' | 'nail-art';
  name: string;
  tagline: string;
  duration: string;
  price: string;
  description: string;
  includes: string[];
  popular?: boolean;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'precision-signature-mani',
    category: 'manicures',
    name: 'Precision Signature Manicure',
    tagline: 'Flawless dry technique & natural architecture',
    duration: '60 min',
    price: '$75',
    description: 'Our benchmark Russian/dry manicure technique. Deep non-invasive e-file cuticle detailing, custom nail shaping tailored to your hand anatomy, buffing, and high-shine non-toxic lacquer or nude treatment.',
    includes: ['Deep cuticle alignment', 'Precision almond or square shaping', 'Warm organic jojoba soak', 'High-shine keratin seal'],
    popular: true
  },
  {
    id: 'biab-overlay',
    category: 'overlays',
    name: 'BIAB™ Builder Gel Overlay',
    tagline: 'Natural nail strengthening with 4+ weeks durability',
    duration: '75 min',
    price: '$95',
    description: 'An architectural strengthening layer of flexible builder gel sculpted over natural nails. Reinforces weak, brittle nails allowing uninterrupted natural growth with zero chipping.',
    includes: ['Precision dry cuticle work', 'Apex sculpting & reinforcement', 'Nude/blush pigment matching', 'Diamond gloss top seal'],
    popular: true
  },
  {
    id: 'restorative-spa-pedi',
    category: 'pedicures',
    name: 'Restorative Botanical Pedicure',
    tagline: 'Sensory grounding & restorative foot wellness',
    duration: '65 min',
    price: '$85',
    description: 'A deeply restorative ritual featuring a warm epsom and magnesium foot bath, organic apricot seed exfoliation, precision heel resurfacing, massage with botanical oils, and natural buffing or lacquer.',
    includes: ['Magnesium & rose petal soak', 'AHA fruit enzyme heel treatment', 'Hot towel wrap', 'Reflexology massage']
  },
  {
    id: 'minimalist-nail-art',
    category: 'nail-art',
    name: 'Minimalist Editorial Nail Art',
    tagline: 'Subtle micro-french, chrome veil & negative space',
    duration: '90 min',
    price: '$115',
    description: 'Bespoke hand-painted fine line accents, glazed pearl finishes, micro-french tips, or organic geometric negative space designed to elevate your everyday wardrobe.',
    includes: ['Full signature manicure', 'Personalized design consultation', 'Double-coat gel hardening', 'Cuticle elixir massage']
  },
  {
    id: 'hard-gel-extensions',
    category: 'overlays',
    name: 'Sculpted Hard Gel Extensions',
    tagline: 'Weightless length with flawless structural integrity',
    duration: '110 min',
    price: '$140',
    description: 'Custom paper-form sculpted extensions crafted without plastic glued tips. Featherlight, crystal clear or soft nude tone, tailored to your ideal shape and proportion.',
    includes: ['Paper-form custom tailoring', 'Pinched c-curve structure', 'Custom length & shape tailoring', 'Non-wipe high gloss topcoat']
  },
  {
    id: 'the-nue-ritual',
    category: 'manicures',
    name: 'The Nue Signature Duo Ritual',
    tagline: 'Simultaneous luxury hands & feet restorative care',
    duration: '120 min',
    price: '$165',
    description: 'The ultimate salon experience combining our Precision Gel Manicure and Botanical Pedicure with sensory aromatherapy, heated basalt stones, and collagen hand masks.',
    includes: ['Full manicure & pedicure', 'Warm basalt stone massage', 'Ceramide hydration mask', 'Complementary organic herbal elixir'],
    popular: true
  }
];

export const GALLERY_ITEMS = [
  {
    id: '1',
    title: 'The Signature Almond File',
    category: 'Precision Manicure',
    image: heroImg,
    aspect: 'aspect-[4/3]',
    caption: 'Precision shaping and meticulous dry cuticle work on natural nail plates.'
  },
  {
    id: '2',
    title: 'Micro-French on Sheer Porcelain',
    category: 'Editorial Nail Art',
    image: frenchImg,
    aspect: 'aspect-[4/3]',
    caption: 'Ultra-thin white smile line painted over a sheer milky nude foundation.'
  },
  {
    id: '3',
    title: 'Glazed Pearl Chrome Shimmer',
    category: 'Builder Gel Overlay',
    image: chromeImg,
    aspect: 'aspect-[4/3]',
    caption: 'Soft golden-hour iridescence buffed over a semi-translucent pink apex.'
  },
  {
    id: '4',
    title: 'Botanical Pedicure Sanctuary',
    category: 'Spa Pedicure',
    image: pediImg,
    aspect: 'aspect-[4/3]',
    caption: 'Warm mineral waters with calming botanicals, smoothing stones, and linen towels.'
  },
  {
    id: '5',
    title: 'The Beverly Hills Lounge',
    category: 'Studio Space',
    image: interiorImg,
    aspect: 'aspect-[16/9]',
    caption: 'Curated travertine surfaces, organic curved architecture, and serene acoustic privacy.'
  }
];

export const TESTIMONIALS_DATA = [
  {
    quote: 'Nue Studio has completely transformed my natural nails. I used to suffer from constant peeling, but since starting BIAB here three months ago, my nails have never been stronger or looked more elegant.',
    author: 'Elena Vance',
    role: 'Architect & Interior Designer',
    treatment: 'BIAB™ Builder Gel Overlay',
    frequency: 'Client for 1.5 years'
  },
  {
    quote: 'The level of hygiene and precision is incomparable. There is no rushing, no abrasive filing, and the cuticle detail is genuinely hospital-grade perfection. It feels like an art consultation.',
    author: 'Camille Moreau',
    role: 'Fashion Editor',
    treatment: 'Precision Signature Manicure',
    frequency: 'Client for 2 years'
  },
  {
    quote: 'The most tranquil salon in Los Angeles. The warm travertine, peaceful acoustics, and the botanical pedicure are the highlight of my self-care routine every month.',
    author: 'Seraphina Lin',
    role: 'Creative Director',
    treatment: 'The Nue Signature Duo Ritual',
    frequency: 'Client for 8 months'
  }
];

export const JOURNAL_ARTICLES = [
  {
    id: 'art-of-dry-manicures',
    title: 'Why the Russian Dry Manicure Outlasts Traditional Water Soaks',
    snippet: 'Exploring how non-invasive e-file diamond bits protect nail plate hydration and double lacquer retention.',
    date: 'OCT 2026',
    readTime: '4 min read',
    content: `Traditional water-based manicures submerge your hands in warm water prior to cuticle removal. While pleasant, this causes natural nail plates to expand by absorbing moisture like a sponge. When lacquer is applied and the nails slowly contract as they dehydrate over subsequent hours, micro-fissures and premature chipping inevitably form.

At Nue Studio, our dry technique uses medical-grade diamond and ceramic bits to gently release non-living tissue from the eponychium while keeping the nail plate completely dry and stable. This creates a pristine, moisture-neutral canvas that bonds impeccably with base coats and builder gels, offering up to 4+ weeks of chip-free wear.`
  },
  {
    id: 'biab-builder-gel-guide',
    title: 'The Architectural Guide to BIAB (Builder in a Bottle)',
    snippet: 'How structural apex sculpting reinforces brittle nail plates without harsh acrylic monomers or gluing tips.',
    date: 'SEP 2026',
    readTime: '5 min read',
    content: `Natural nails require both strength and flexibility to endure daily mechanical stress—typing, lifting, and washing. Traditional acrylics provide rigid stiffness, but when struck, the shock transfers directly to the natural nail bed.

BIAB™ acts like a flexible shock absorber. By building a subtle apex at the nail’s stress point (the midpoint between cuticle and free edge), we shift tension away from the sensitive matrix. Clients who have struggled with brittle or peeling nails for years frequently achieve their goal length within 2-3 cycles of overlay infills.`
  },
  {
    id: 'quiet-luxury-palettes',
    title: 'The Neutral Aesthetic: Why Sheer Nudes Never Lose Their Charm',
    snippet: 'A study in porcelain washes, champagne pearls, and custom undertone skin-matching for modern hands.',
    date: 'AUG 2026',
    readTime: '3 min read',
    content: `True luxury in manicure design lies in custom undertone matching. Just as high-end bespoke cosmetics consider warm olive, cool pink, and neutral golden undertones, our nail treatments blend sheer pigments that elongate the fingers and harmonize with fine jewellery.

Whether you favor a glassy glazed finish reminiscent of morning dew or a velvety matte alabaster, neutral nails remain the definitive editorial hallmark of effortless sophistication.`
  }
];
