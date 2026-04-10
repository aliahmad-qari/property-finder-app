// Mock Data for EstateFlow Portfolio
// This ensures the application works perfectly without a backend.

export interface Property {
  _id: string;
  title: string;
  location: string;
  price: number;
  image: string[];
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  availability: string;
  description: string;
  amenities: string[];
  phone: string;
}

export const MOCK_USER = {
  _id: 'user_123',
  name: 'Portfolio Guest',
  email: 'guest@estateflow.com',
};

export const MOCK_PROPERTIES: Property[] = [
  {
    _id: '1',
    title: 'Skyline Penthouse - Sector 45',
    location: 'Gurugram, Haryana',
    price: 45000000,
    image: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'],
    beds: 4,
    baths: 4,
    sqft: 3200,
    type: 'Penthouse',
    availability: 'Buy',
    description: 'Ultra-luxurious sky-high living with a panoramic view of the city skyline. Features a private terrace garden and automated climate control.',
    amenities: ['Pool', 'Gym', 'Parking', 'Security', 'Private Terrace'],
    phone: '+91 98765 43210'
  },
  {
    _id: '2',
    title: 'Serene Villa by the Lake',
    location: 'Utopian Hills, Pune',
    price: 32500000,
    image: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'],
    beds: 3,
    baths: 3,
    sqft: 2400,
    type: 'Villa',
    availability: 'Buy',
    description: 'A peaceful retreat away from the city noise. This lake-facing villa offers tranquility and modern luxury with spacious gardens.',
    amenities: ['Garden', 'Lake View', 'Fireplace', 'Parking'],
    phone: '+91 98765 43211'
  },
  {
    _id: '3',
    title: 'Modern Minimalist Apartment',
    location: 'Koramangala, Bangalore',
    price: 75000,
    image: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80'],
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: 'Apartment',
    availability: 'Rent',
    description: 'Sleek, modern minimalist apartment in the heart of the tech hub. High-speed internet ready and fully furnished with premium brands.',
    amenities: ['Power Backup', 'Wi-Fi', 'Security', 'Elevator'],
    phone: '+91 98765 43212'
  },
  {
    _id: '4',
    title: 'Royal Heritage Mansion',
    location: 'Pink City, Jaipur',
    price: 89000000,
    image: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80'],
    beds: 6,
    baths: 7,
    sqft: 5500,
    type: 'Mansion',
    availability: 'Buy',
    description: 'Experience royalty in this extensively restored heritage mansion. Traditional architecture meets modern luxury in this one-of-a-kind property.',
    amenities: ['Swimming Pool', 'Home Theater', 'Wine Cellar', 'Guest House'],
    phone: '+91 98765 43213'
  },
  {
    _id: '5',
    title: 'Coastal Breeze Studio',
    location: 'Colaba, Mumbai',
    price: 45000,
    image: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'],
    beds: 1,
    baths: 1,
    sqft: 650,
    type: 'Studio',
    availability: 'Rent',
    description: 'Compact yet spacious studio with a direct view of the Arabian Sea. Perfect for young professionals seeking the island city life.',
    amenities: ['Sea View', 'AC', 'Security', 'Concierge'],
    phone: '+91 98765 43214'
  },
  {
    _id: '6',
    title: 'Eco-Friendly Smart Home',
    location: 'Whitefield, Bangalore',
    price: 18500000,
    image: ['https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80'],
    beds: 3,
    baths: 3,
    sqft: 1800,
    type: 'House',
    availability: 'Buy',
    description: 'A sustainable smart home featuring solar panels, rainwater harvesting, and fully voice-controlled gadgets for a green lifestyle.',
    amenities: ['Solar Power', 'Electric Car Charging', 'Gym', 'Park'],
    phone: '+91 98765 43215'
  }
];
