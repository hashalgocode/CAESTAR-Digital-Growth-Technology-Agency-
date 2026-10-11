import { z } from 'zod'

export const enquirySchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your full name.'),
  businessEmail: z.string().trim().email('Please enter a valid business email.'),
  serviceRequired: z.enum([
    'Digital Marketing',
    'Paid Advertising',
    'Social Media Marketing',
    'Marketplace Management',
    'Website Development',
    'App Development',
    'AI & Automation',
    'Branding & Creative',
    'Multiple Services',
    'Other',
  ]),
  projectDescription: z.string().trim().min(20, 'Please give a bit more detail about the project.'),
  privacyAcknowledged: z.preprocess(
    (value) => value === true || value === 'true' || value === 1,
    z.boolean().refine((value) => value === true, {
      message: 'Please confirm that you accept the privacy policy.',
    })
  ),
  companyName: z.string().trim().max(120).optional().or(z.literal('')),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  websiteUrl: z
    .string()
    .trim()
    .url('Please enter a valid website URL, including https://.')
    .optional()
    .or(z.literal('')),
  budget: z
    .enum([
      'Under ₹10,000',
      '₹10,000–₹25,000',
      '₹25,000–₹50,000',
      '₹50,000–₹1,00,000',
      'Above ₹1,00,000',
      'International/custom budget',
      'Not sure yet',
    ])
    .optional()
    .or(z.literal('')),
  preferredContactMethod: z.enum(['Email', 'Phone', 'WhatsApp', 'Not sure yet']).optional().or(z.literal('')),
  targetMarket: z.string().trim().max(100).optional().or(z.literal('')),
  desiredProjectTimeline: z.string().trim().max(100).optional().or(z.literal('')),
})

export type EnquiryInput = z.infer<typeof enquirySchema>
