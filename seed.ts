// prisma/seed.ts
import { PrismaClient, Category } from '@prisma/client'

const prisma = new PrismaClient()

const products = [
  {
    slug: 'heaven-playground-hoodie-black',
    name: 'Heaven Playground Hoodie — Black',
    eyebrow: 'New Arrival · Hoodie',
    description: 'Angels don\'t just watch — they play. Heavyweight 400gsm hoodie',
    priceZAR: 490,
    category: Category.hoodies,
    material: 'Heavyweight 400gsm fleece · 80% cotton, 20% polyester',
    fit: 'Oversized / boxy drop-shoulder',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: ['/images/hoodie-black.jpg'],
  },
  {
    slug: 'heaven-playground-hoodie-white',
    name: 'Heaven Playground Hoodie — White',
    eyebrow: 'New Arrival · Hoodie',
    description: 'Angels don\'t just watch — they play. Heavyweight 400gsm  hoodie',
    priceZAR: 490,
    category: Category.hoodies,
    material: 'Heavyweight 400gsm fleece · 80% cotton, 20% polyester',
    fit: 'Oversized / boxy drop-shoulder',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: ['/images/hoodie-white.jpg'],
  },
  {
    slug: 'halo-court-hoodie-embroidered',
    name: 'Halo Court Hoodie',
    eyebrow: 'Limited · Hoodie',
    description: 'Heavyweight fleece, oversized fit. Sacred drip elevated to art.',
    priceZAR: 490,
    category: Category.hoodies,
    material: 'Heavyweight 400gsm fleece · embroidered threadwork',
    fit: 'Oversized / boxy drop-shoulder',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: ['/images/hoodie-embroidered.jpg'],
  },
  {
    slug: 'heaven-playground-tee-red',
    name: 'Heaven Playground Tee — Red',
    eyebrow: 'New Arrival · Tee',
    description: 'Oversized heavyweight tee featuring the iconic Heaven Playground angel basketball graphic.',
    priceZAR: 350,
    category: Category.tees,
    material: 'Heavyweight 260gsm 100% cotton · Garment dyed',
    fit: 'Oversized drop-shoulder',
    sizes: ['S', 'M', 'L', 'XL'],
    images: ['/images/tee-red.jpg'],
  },
  {
    slug: 'he-track-suit-black',
    name: 'HE Track Suit',
    eyebrow: 'New Arrival · Track Set',
    description: 'Zip-up track jacket and matching joggers with white piping and the HE monogram on chest and leg. Available in black. The everyday premium set.',
    priceZAR: 600,
    category: Category.tracksuits,
    material: 'Technical fleece · white TPU piping',
    fit: 'Relaxed straight-leg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: ['/images/tracksuit-studio.jpg', '/images/tracksuit-back.jpg', '/images/tracksuit-front.jpg'],
  },
  {
    slug: 'womens-two-piece-set',
    name: 'Women\'s Two-Piece Set',
    eyebrow: 'Coming Soon · Set',
    description: 'Cropped halo hoodie and matching joggers. Details dropping soon.',
    priceZAR: 60000,
    category: Category.sets,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [],
    available: false,
    comingSoon: true,
  },
]

async function main() {
  console.log('Seeding products...')
  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    })
    console.log(`  ✓ ${product.name}`)
  }
  console.log('Done.')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
