-- Insert Travel Planning Service into Supabase
-- Run this SQL in your Supabase SQL Editor

INSERT INTO services (
  slug,
  title,
  name,
  description,
  short_description,
  sections,
  category,
  price,
  image,
  tags,
  features,
  active,
  show_on_homepage,
  created_at,
  updated_at
) VALUES (
  'travel-planning-services',
  '{"en": "Travel Planning Services from Dubai | Majestic Skyline", "ar": "خدمات تخطيط السفر من دبي | ماجستيك سكايلاين"}',
  '{"en": "Custom Travel Planning", "ar": "تخطيط السفر المخصص"}',
  '{"en": "Majestic Skyline offers complete travel planning services from our base in Dubai, helping travelers create unforgettable experiences across the globe. Whether you''re seeking a relaxing beach break, an adventurous mountain escape, or a culturally rich city tour, our Dubai-based travel planners manage every detail. We believe smart planning saves time, reduces stress, and allows you to focus on what really matters—your experience.", "ar": "تقدم ماجستيك سكايلاين خدمات تخطيط السفر الشاملة من قاعدتنا في دبي، مساعدة المسافرين على إنشاء تجارب لا تُنسى في جميع أنحاء العالم. سواء كنت تبحث عن استراحة شاطئية مريحة، أو هروب مغامر إلى الجبال، أو جولة ثقافية غنية في المدينة، فإن مخططي السفر لدينا في دبي يديرون كل التفاصيل. نحن نؤمن بأن التخطيط الذكي يوفر الوقت ويقلل التوتر ويسمح لك بالتركيز على ما يهم حقاً - تجربتك."}',
  '{"en": "Complete travel planning services from Dubai to worldwide destinations with personalized itineraries and expert consultation.", "ar": "خدمات تخطيط السفر الشاملة من دبي إلى وجهات عالمية مع برامج مخصصة واستشارة خبراء."}',
  '[
    {
      "id": 1,
      "type": "text",
      "content": {
        "en": "Why Choose Majestic Skyline for Your Travel Planning in Dubai?",
        "ar": "لماذا تختار ماجستيك سكايلاين لتخطيط سفرك في دبي؟"
      }
    },
    {
      "id": 2,
      "type": "paragraph",
      "content": {
        "en": "Travel planning can quickly become overwhelming. From flight schedules and hotel bookings to activity planning and daily budgeting, the process often feels more like work than vacation. Majestic Skyline simplifies this. As a Dubai-based travel agency with global reach, we combine local insight with international expertise to make your journey smooth from start to finish.",
        "ar": "يمكن أن يصبح تخطيط السفر مرهقاً بسرعة. من جداول الطيران وحجوزات الفنادق إلى تخطيط الأنشطة والميزانية اليومية، غالباً ما تبدو العملية أكثر كالعمل من العطلة. ماجستيك سكايلاين تبسط هذا الأمر. كوكالة سفر مقرها دبي ذات امتداد عالمي، نحن نجمع بين البصيرة المحلية والخبرة الدولية لجعل رحلتك سلسة من البداية إلى النهاية."
      }
    },
    {
      "id": 3,
      "type": "heading",
      "content": {
        "en": "Key Features of Our Travel Planning Services",
        "ar": "الميزات الرئيسية لخدمات تخطيط السفر لدينا"
      }
    },
    {
      "id": 4,
      "type": "list",
      "content": {
        "en": [
          "Personalized Itinerary Design - No two travelers are the same. We build custom itineraries for every client based on your preferences and travel style.",
          "Expert Destination Recommendations - Our team stays up to date with travel trends, visa regulations, and seasonal considerations to suggest ideal destinations.",
          "Real-Time Consultation from Dubai - Face-to-face or virtual consultations with personalized service and real-time updates throughout planning.",
          "Flexible Planning Options - We stay flexible with last-minute changes, cancellations, or upgrades, supporting you even while traveling.",
          "Budget Optimization - We help allocate your budget wisely across flights, stays, tours, and meals to get the best value."
        ],
        "ar": [
          "تصميم برنامج سفر شخصي - لا يوجد مسافران متشابهان. نحن نبني برامج سفر مخصصة لكل عميل بناءً على تفضيلاتك وأسلوب سفرك.",
          "توصيات الوجهات المتخصصة - فريقنا يواكب اتجاهات السفر ولوائح التأشيرات والاعتبارات الموسمية لاقتراح الوجهات المثالية.",
          "الاستشارة الفورية من دبي - استشارات وجهاً لوجه أو افتراضية مع خدمة شخصية وتحديثات فورية طوال التخطيط.",
          "خيارات التخطيط المرنة - نبقى مرنين مع التغييرات اللحظية والإلغاءات أو الترقيات، ندعمك حتى أثناء السفر.",
          "تحسين الميزانية - نساعدك في توزيع ميزانيتك بحكمة عبر الطيران والإقامة والجولات والوجبات للحصول على أفضل قيمة."
        ]
      }
    },
    {
      "id": 5,
      "type": "heading",
      "content": {
        "en": "How Our Travel Planning Process Works",
        "ar": "كيف تعمل عملية تخطيط السفر لدينا"
      }
    },
    {
      "id": 6,
      "type": "steps",
      "content": {
        "en": [
          "Consultation and Needs Analysis - We get to know you through calls, video chats, or in-person visits in Dubai to understand your preferences and requirements.",
          "Research and Proposal - We create a detailed travel proposal with destinations, itineraries, hotels, costs, and travel tips for your review.",
          "Finalize the Itinerary - Once approved, we confirm all elements and organize everything in an easy-to-follow digital or print document.",
          "Travel Support and Adjustments - We provide ongoing support before, during, and after your trip with 24/7 assistance."
        ],
        "ar": [
          "الاستشارة وتحليل الاحتياجات - نتعرف عليك من خلال المكالمات أو الدردشات المرئية أو الزيارات الشخصية في دبي لفهم تفضيلاتك ومتطلباتك.",
          "البحث والاقتراح - ننشئ اقتراح سفر مفصل مع الوجهات والبرامج والفنادق والتكاليف ونصائح السفر لمراجعتك.",
          "إنهاء البرنامج - بمجرد الموافقة، نؤكد جميع العناصر وننظم كل شيء في مستند رقمي أو مطبوع سهل المتابعة.",
          "دعم السفر والتعديلات - نقدم الدعم المستمر قبل وأثناء وبعد رحلتك مع المساعدة على مدار 24/7."
        ]
      }
    },
    {
      "id": 7,
      "type": "heading",
      "content": {
        "en": "Types of Trips We Plan",
        "ar": "أنواع الرحلات التي نخططها"
      }
    },
    {
      "id": 8,
      "type": "categories",
      "content": {
        "en": [
          "Leisure Holidays - From long weekends to three-week adventures, perfect for families, solo travelers, couples, and retirees.",
          "Luxury Escapes - Ultra-luxury getaways with private villas, yacht rentals, fine dining, and exclusive experiences.",
          "Adventure Travel - Hiking, diving, and adventure trips with logistics, permits, and gear recommendations handled.",
          "Family-Friendly Itineraries - Age-appropriate tours and kid-friendly accommodations for enjoyable family trips.",
          "Cultural and Historical Tours - Museum visits, architecture tours, ancient ruins, and religious site explorations."
        ],
        "ar": [
          "عطلات ترفيهية - من عطلات نهاية الأسبوع الطويلة إلى المغامرات التي تستمر ثلاثة أسابيع، مثالية للعائلات والمسافرين المنفردين والأزواج والمتقاعدين.",
          "هروب فاخر - رحلات فائقة الفخامة مع فيلات خاصة وتأجير يخوت وتناول طعام راقٍ وتجارب حصرية.",
          "سفر المغامرة - رحلات المشي لمسافات طويلة والغوص والمغامرة مع التعامل مع اللوجستيات والتصاريح وتوصيات المعدات.",
          "برامج ملائمة للعائلة - جولات مناسبة للعمر وأماكن إقامة صديقة للأطفال لرحلات عائلية ممتعة.",
          "الجولات الثقافية والتاريخية - زيارات المتاحف وجولات العمارة والآثار القديمة واستكشاف المواقع الدينية."
        ]
      }
    },
    {
      "id": 9,
      "type": "heading",
      "content": {
        "en": "Why UAE Travelers Trust Majestic Skyline",
        "ar": "لماذا يثق المسافرون في الإمارات بماجستيك سكايلاين"
      }
    },
    {
      "id": 10,
      "type": "benefits",
      "content": {
        "en": [
          "Located in Dubai - We understand the travel needs of UAE residents and citizens",
          "Multi-destination expertise - Handle complex itineraries across continents with ease",
          "Global network - Trusted suppliers, hotels, and operators in over 70 countries",
          "24/7 support - Emergency assistance and last-minute changes covered",
          "Personalized service - Respect for your time, budget, and preferences"
        ],
        "ar": [
          "موقع في دبي - نفهم احتياجات السفر لسكان ومواطني الإمارات",
          "خبرة متعددة الوجهات - التعامل مع البرامج المعقدة عبر القارات بسهولة",
          "شبكة عالمية - موردون وفنادق ومشغلون موثوقون في أكثر من 70 دولة",
          "دعم 24/7 - المساعدة في حالات الطوارئ والتغييرات اللحظية مغطاة",
          "خدمة شخصية - احترام لوقتك وميزانيتك وتفضيلاتك"
        ]
      }
    }
  ]',
  'travel-planning',
  '{"en": "Contact for custom quote", "ar": "تواصل للحصول على عرض مخصص"}',
  '',
  '{"en": ["travel planning", "dubai", "custom itinerary", "luxury travel", "adventure travel", "family travel"], "ar": ["تخطيط السفر", "دبي", "برنامج مخصص", "سفر فاخر", "سفر مغامرة", "سفر عائلي"]}',
  '{"en": ["Personalized itinerary design", "Expert destination recommendations", "24/7 travel support", "Budget optimization", "Flexible planning options", "Real-time consultation"], "ar": ["تصميم برنامج شخصي", "توصيات وجهات متخصصة", "دعم سفر 24/7", "تحسين الميزانية", "خيارات تخطيط مرنة", "استشارة فورية"]}',
  true,
  false,
  NOW(),
  NOW()
);