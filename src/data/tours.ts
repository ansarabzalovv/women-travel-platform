import { Tour } from '../types';

export const tours: Tour[] = [
  {
    id: '1',
    title: 'Explore Japan: Photography Tour',
    location: 'Japan',
    date: 'April 15-28, 2023',
    duration: '14 days',
    price: '$3,499',
    format: 'Group Tour',
    description: 'Join us for a photography-focused tour of Japan during the beautiful cherry blossom season. This tour is designed for women who love photography and want to capture the stunning landscapes, ancient temples, and vibrant city life of Japan. Our experienced female guide will take you to both iconic locations and hidden gems, perfect for creating amazing photographs.',
    program: [
      'Day 1-3: Tokyo exploration and urban photography',
      'Day 4-6: Kyoto temples and traditional culture',
      'Day 7-8: Mount Fuji and natural landscapes',
      'Day 9-11: Hiroshima and historical sites',
      'Day 12-14: Osaka food and street photography'
    ],
    images: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1792&q=80',
      'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80'
    ],
    featured: true
  },
  {
    id: '2',
    title: 'Moroccan Cultural Immersion',
    location: 'Morocco',
    date: 'September 5-15, 2023',
    duration: '11 days',
    price: '$2,899',
    format: 'Small Group',
    description: 'Immerse yourself in the rich culture of Morocco on this women-only tour. From the bustling medinas of Marrakech to the peaceful blue streets of Chefchaouen, you\'ll experience the diverse landscapes and traditions of Morocco. Connect with local women artisans, learn about traditional crafts, and enjoy authentic Moroccan cuisine.',
    program: [
      'Day 1-2: Marrakech exploration and souk shopping',
      'Day 3-4: Atlas Mountains and Berber villages',
      'Day 5-6: Sahara Desert camping and stargazing',
      'Day 7-8: Fes medina and cultural workshops',
      'Day 9-11: Chefchaouen and coastal Essaouira'
    ],
    images: [
      'https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1734&q=80',
      'https://images.unsplash.com/photo-1559064699-989d5ecba6fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80',
      'https://images.unsplash.com/photo-1548018560-c7196548e1a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
      'https://images.unsplash.com/photo-1545167496-c1e5017d8645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1732&q=80'
    ],
    featured: true
  },
  {
    id: '3',
    title: 'Bali Yoga & Wellness Retreat',
    location: 'Bali, Indonesia',
    date: 'October 10-19, 2023',
    duration: '10 days',
    price: '$2,199',
    format: 'Retreat',
    description: 'Rejuvenate your mind, body, and spirit on our women-only yoga retreat in beautiful Bali. Surrounded by lush rice terraces and tropical forests, you\'ll practice daily yoga, learn meditation techniques, and enjoy wholesome, nutritious meals. This retreat is perfect for women of all yoga levels looking for a transformative experience.',
    program: [
      'Daily morning and evening yoga sessions',
      'Guided meditation and mindfulness practices',
      'Traditional Balinese healing ceremonies',
      'Cooking classes featuring local plant-based cuisine',
      'Cultural excursions to temples and local villages',
      'Free time for spa treatments and personal exploration'
    ],
    images: [
      'https://images.unsplash.com/photo-1592364395653-83e648b20cc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1820&q=80',
      'https://images.unsplash.com/photo-1604838677917-2a4194d3acd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80'
    ],
    featured: true
  },
  {
    id: '4',
    title: 'Peruvian Adventure: Inca Trail & Machu Picchu',
    location: 'Peru',
    date: 'June 7-18, 2023',
    duration: '12 days',
    price: '$2,999',
    format: 'Hiking Tour',
    description: 'Challenge yourself on this women-only hiking adventure in Peru. Trek the famous Inca Trail to Machu Picchu, explore the Sacred Valley, and experience the vibrant culture of Cusco. Our experienced female guides will ensure your safety and comfort while providing insights into the rich history and culture of the region.',
    program: [
      'Day 1-2: Acclimatization in Cusco and city exploration',
      'Day 3-4: Sacred Valley tour and local communities',
      'Day 5-8: Inca Trail trek (4 days/3 nights camping)',
      'Day 9: Machu Picchu exploration',
      'Day 10-12: Rainbow Mountain and return to Cusco'
    ],
    images: [
      'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80',
      'https://images.unsplash.com/photo-1565516490205-ab03fcdba45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1493912127002-0431757a5c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    ],
    featured: false
  },
  {
    id: '5',
    title: 'Greek Island Hopping',
    location: 'Greece',
    date: 'May 18-29, 2023',
    duration: '12 days',
    price: '$3,199',
    format: 'Island Tour',
    description: 'Explore the stunning Greek islands on this women-only tour. From the iconic whitewashed buildings of Santorini to the historic sites of Crete, you\'ll experience the beauty, history, and culture of Greece. Enjoy delicious Mediterranean cuisine, swim in crystal-clear waters, and make connections with like-minded women travelers.',
    program: [
      'Day 1-3: Athens and Acropolis exploration',
      'Day 4-6: Mykonos beaches and town exploration',
      'Day 7-9: Santorini caldera views and wine tasting',
      'Day 10-12: Crete historical sites and local culture'
    ],
    images: [
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1515861525581-cb3aa7071f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
      'https://images.unsplash.com/photo-1601581087511-7b9015ebe6c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
      'https://images.unsplash.com/photo-1504512485920-aae30b1c7f52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1804&q=80'
    ],
    featured: false
  },
  {
    id: '6',
    title: 'Safari Adventure: Tanzania & Zanzibar',
    location: 'Tanzania',
    date: 'July 10-22, 2023',
    duration: '13 days',
    price: '$4,299',
    format: 'Safari & Beach',
    description: 'Experience the ultimate African adventure on this women-only safari in Tanzania, followed by a relaxing beach stay in Zanzibar. Witness the incredible wildlife of the Serengeti and Ngorongoro Crater, connect with local Maasai women, and then unwind on the pristine beaches of Zanzibar. This tour offers the perfect balance of adventure and relaxation.',
    program: [
      'Day 1-2: Arusha arrival and cultural experiences',
      'Day 3-5: Serengeti National Park safari drives',
      'Day 6-7: Ngorongoro Crater and conservation area',
      'Day 8-10: Zanzibar beach relaxation',
      'Day 11-13: Stone Town exploration and spice tour'
    ],
    images: [
      'https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1741&q=80',
      'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
      'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
      'https://images.unsplash.com/photo-1568381207562-9b0aa2c3ad2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80'
    ],
    featured: false
  }
]; 