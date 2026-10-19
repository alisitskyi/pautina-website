export type Language = 'ua' | 'en';

export const translations = {
  ua: {
    // Header
    nav: {
      rooms: 'Кімнати',
      gallery: 'Галерея',
      birthday: 'Програми на ДЕНЬ НАРОДЖЕННЯ',
      certificates: 'Сертифікат',
      faq: 'FAQ',
      outdoor: 'Піші КВЕСТИ',
      contacts: 'Контакти',
      bookingPhones: 'Телефони для бронювання:',
      allQuestsCount: '39 квестів',
      turnkeyParty: 'Свято під ключ',
      fromPrice: 'від 1000 грн',
      locationsSubtitle: 'Торгова / Шевченка',
    },
    // Home Hero & Intro
    hero: {
      subtitle: 'Квест кімнати Одеси від PAUTINArooms!',
      description: 'Антуражні та атмосферні квест кімнати від PAUTINArooms! Більш 30 різноманітних квестів на різні сюжети.',
      questsTitle: 'КВЕСТИ',
    },
    // Filters & Search
    filters: {
      categories: {
        'ВСІ': 'ВСІ',
        'ХОРРОР': 'ХОРРОР',
        'МІСТИКА': 'МІСТИКА',
        'ФЕНТЕЗІ': 'ФЕНТЕЗІ',
        'ФАНТАСТИКА': 'ФАНТАСТИКА',
        'ДЕТЕКТИВ': 'ДЕТЕКТИВ',
        'ПРИГОДИ': 'ПРИГОДИ',
        'НА ДЕНЬ НАРОДЖЕННЯ': 'НА ДЕНЬ НАРОДЖЕННЯ',
        'ДЛЯ ПАРИ': 'ДЛЯ ПАРИ',
        'ДЛЯ 4+ ЛЮДЕЙ': 'ДЛЯ 4+ ЛЮДЕЙ',
      },
      searchPlaceholder: 'Шукати квест за назвою...',
      allAreas: 'Всі райони',
      center: 'Центр',
      primorsky: 'Приморський',
      questsCount: 'квестів',
      questSingle: 'квест',
      noQuestsFound: 'За обраними фільтрами квестів не знайдено.',
      resetFilters: 'Скинути фільтри',
    },
    // Card
    card: {
      players: 'ос.',
      duration: 'хв',
      from: 'від',
      currency: 'грн',
      bookNow: 'Забронювати',
      newBadge: 'NEW',
    },
    // Home Promo
    homePromo: {
      birthdayTag: 'Свято «під ключ»',
      birthdayTitle: 'ДНІ НАРОДЖЕННЯ ТА КОРПОРАТИВИ В PAUTINA',
      birthdayDesc: 'Шукаєте незабутній формат свята для дітей чи дорослих? Ми організуємо все: захопливі квести, затишні банкетні лаунж-зони для частування торта і піци, ведучих, аніматорів та привітання.',
      birthdayPoint1: 'Лаунж-кімнати для святкування та чаювання після гри',
      birthdayPoint2: 'Спеціальні дитячі адаптовані сценарії з аніматором-ведучим',
      birthdayPoint3: 'Одночасне проходження для великих компаній до 30 осіб',
      birthdayBtn: 'Дізнатися деталі та ціни',
      certTag: 'Найкращий подарунок',
      certTitle: 'ПОДАРУНКОВІ СЕРТИФІКАТИ НА КВЕСТ',
      certDesc: 'Даруйте емоції замість речей! Електронні та преміальні пластикові сертифікати діють на будь-який квест мережі протягом 6 місяців.',
      certBtn: 'Замовити сертифікат',
      locTag: 'Локації Одеси',
      locTitle: 'ДЕ НАС ЗНАЙТИ',
      locCenter: 'Локація «Центр»',
      locCenterAddr: 'м. Одеса, вул. Торгова, 2',
      locCenterQuests: 'Квести: Гаррі і Таємна Кімната, Дзвінок, Скарби Чорної Бороди, Лаунж-зона для свят.',
      locPrim: 'Локація «Приморський»',
      locPrimAddr: 'м. Одеса, пр-т Шевченка, 4д',
      locPrimQuests: 'Квести: Пила: Фінальна Гра, Втеча з Психлікарні, Шерлок Холмс.',
      openMap: 'Відкрити на карті Google →',
    },
    // Contacts Page
    contactsPage: {
      tag: "Зв'яжіться з нами",
      title: 'НАШІ КОНТАКТИ',
      desc: 'Ми працюємо щодня без вихідних з 10:00 до 22:30. Зателефонуйте або завітайте на будь-яку з наших локацій в Одесі!',
      loc1Badge: 'Центральна локація',
      loc1Addr: 'м. Одеса, вул. Торгова, 2',
      loc1Desc: 'Орієнтири: бульвар Жванецького, Шахський палац, Новий ринок. Зручний під’їзд та парковка біля входу.',
      loc1Schedule: 'Щодня з 10:00 до 22:30 (за попереднім записом)',
      loc1Quests: 'Квести: Гаррі і Таємна Кімната, Дзвінок, Скарби Чорної Бороди',
      loc2Badge: 'Приморська локація',
      loc2Addr: 'м. Одеса, пр-т Шевченка, 4д',
      loc2Desc: 'Орієнтири: парк Перемоги, Політехнічний університет, палац спорту. Окремий антуражний вхід.',
      loc2Schedule: 'Щодня з 10:00 до 22:30 (за попереднім записом)',
      loc2Quests: 'Квести: Пила: Фінальна Гра, Втеча з Психлікарні, Шерлок Холмс',
      googleMapBtn: 'Відкрити в Google Maps ↗',
      formTitle: 'Маєте запитання або пропозицію?',
      formDesc: 'Залиште повідомлення, і наш адміністратор зв’яжеться з вами протягом 15 хвилин.',
      namePlaceholder: 'Ваше ім’я',
      phonePlaceholder: '+380 (XX) XXX-XX-XX',
      messagePlaceholder: 'Ваше повідомлення або запитання...',
      sendBtn: 'Надіслати повідомлення',
      sentSuccess: 'Дякуємо! Ваше повідомлення надіслано. Ми зателефонуємо вам найближчим часом.',
    },
    // Birthday Page
    birthdayPage: {
      tag: 'Незабутнє свято в Одесі',
      title: 'ДЕНЬ НАРОДЖЕННЯ В PAUTINA ROOMS',
      desc: 'Подаруйте імениннику та друзям справжню пригоду! Захопливий квест, затишна зона для святкування, аніматори та яскраві враження, про які говоритимуть весь рік.',
      benefit1Title: 'Для будь-якої компанії',
      benefit1Desc: 'Приймаємо компанії від 4 до 30 дітей або дорослих одночасно в кількох кімнатах мережі.',
      benefit2Title: 'Затишні лаунж-зони',
      benefit2Desc: 'Окремі кімнати для відпочинку з диванами, столами, кулером та музикою для святкового торту й піци.',
      benefit3Title: 'Батьки відпочивають',
      benefit3Desc: 'Наші досвідчені аніматори та адміністратори проводять гру від початку до кінця під повним наглядом.',
      packagesTag: 'Готові рішення',
      packagesTitle: 'ПАКЕТИ СВЯТКУВАННЯ',
      consultTitle: 'Потрібна консультація щодо сценарію або розрахунку?',
      consultDesc: 'Зателефонуйте нашому менеджеру свят. Ми підберемо ідеальний квест за віком дітей та розрахуємо точний таймінг свята.',
      viewQuestsBtn: 'Дивитися всі квести',
    },
    // Certificates Page
    certPage: {
      tag: 'Подаруйте живі емоції',
      title: 'ПОДАРУНКОВІ СЕРТИФІКАТИ',
      desc: 'Найкращий подарунок на день народження, свято чи для колеги. Сертифікат діє на будь-який квест мережі PAUTINA в Одесі протягом 6 місяців.',
      elecTitle: '📧 Електронний сертифікат',
      elecDesc: 'Миттєве надсилання красивого PDF-сертифіката з персональним кодом на Viber, Telegram або Email за 5 хвилин.',
      elecBadge: '⚡ Швидко та без очікування',
      physTitle: '🎁 Фірмовий бокс',
      physDesc: 'Стильний подарунковий тубус або крафтовий конверт із пластиковою карткою-сертифікатом. Самовивіз або Нова Пошта.',
      physBadge: '✨ Преміальний вигляд',
      chooseNominal: '1. Оберіть номінал сертифіката:',
      fillDetails: '2. Ваші контактні дані для оформлення:',
      nameLabel: "Ім'я одержувача / замовника *",
      phoneLabel: 'Номер телефону *',
      emailLabel: 'Email (для електронного сертифіката)',
      addressLabel: 'Адреса доставки / відділення Нової Пошти',
      submitBtn: 'Оформити сертифікат на',
      successTitle: 'Сертифікат успішно замовлено!',
      successDesc: 'Дякуємо! Наш менеджер зв’яжеться з вами протягом 10 хвилин для підтвердження деталей.',
    },
    // FAQ Page
    faqPage: {
      tag: 'Довідка та правила',
      title: 'ЧАСТІ ЗАПИТАННЯ',
      desc: 'Усе, що потрібно знати перед першим візитом до квест-кімнат PAUTINA в Одесі.',
      stillHaveQuestions: 'Не знайшли відповіді на своє питання?',
      callUs: 'Зателефонуйте нам або напишіть у месенджер — адміністратор із радістю проконсультує вас!',
    },
    // Locations Page
    locationsPage: {
      tag: 'Наші філії',
      title: 'ЛОКАЦІЇ В ОДЕСІ',
      desc: '2 атмосферні локації у зручних районах міста з власними зонами відпочинку та паркінгом.',
      torgovaArea: 'Центральний район',
      torgovaTitle: 'м. Одеса, вул. Торгова, 2',
      torgovaLandmark: 'Орієнтир: бульвар Жванецького / Новий ринок',
      shevchenkoArea: 'Приморський район',
      shevchenkoTitle: 'м. Одеса, пр-т Шевченка, 4д',
      shevchenkoLandmark: 'Орієнтир: парк Перемоги / Політех',
      questsAtLoc: 'Квести на цій локації:',
      googleMapBtn: 'Карта Google ↗',
      playersLabel: 'гравців',
      bookBtn: 'Забронювати',
    },
    // Room Detail Page & Booking
    roomPage: {
      home: 'Головна',
      quests: 'Квести',
      difficulty: 'Складність',
      players: 'Гравці',
      duration: 'Час',
      age: 'Вік',
      safetyTitle: 'Безпека та комфорт:',
      safety1: '• Усі кімнати обладнані кнопками екстреного відкриття дверей.',
      safety2: '• Оператор веде відеонагляд і завжди готовий дати підказку.',
      safety3: '• Не вимагає спеціального фізичного одягу чи підготовки.',
      suitableFor: 'Чудово підходить для компаній друзів, сімейного відпочинку або святкування дня народження.',
      bookingTitle: 'ОНЛАЙН БРОНЮВАННЯ СЕАНСУ',
      selectDate: 'Оберіть дату гри:',
      availableSlots: 'Вільні сеанси:',
      busy: 'Зайнято',
      modalTitle: 'Бронювання квесту',
      dateLabel: 'Дата:',
      timeLabel: 'Час:',
      priceLabel: 'Вартість:',
      playersCountLabel: 'Кількість гравців:',
      nameInput: "Ваше ім'я *",
      phoneInput: 'Номер телефону *',
      commentInput: 'Коментар (день народження, вік дітей тощо)',
      confirmBtn: 'Підтвердити бронювання',
      bookingInProgress: 'Бронюємо...',
      successTitle: 'Бронювання успішно оформлено!',
      successMsg: 'Ми надіслали SMS-підтвердження. Чекаємо на вас за 10 хвилин до початку гри!',
      yourBookingId: 'Номер вашого бронювання:',
    },
    // Footer
    footer: {
      about: 'Мережа найкращих квест-кімнат в Одесі. Антуражні кімнати, актори, дні народження та свята «під ключ».',
      questsHeading: 'Квести Одеси',
      infoHeading: 'Інформація',
      contactsHeading: 'Контакти',
      allRooms: 'Всі квест-кімнати',
      kidsQuests: 'Квести для дітей',
      horrorActor: 'Хоррор з актором',
      mysteryAdv: 'Містика та пригоди',
      birthdays: 'Дні народження',
      giftCerts: 'Подарункові сертифікати',
      faq: 'Часті запитання (FAQ)',
      locations: 'Локації та квести',
      addressCenter: 'Одеса, вул. Торгова, 2 (Центр)',
      addressPrim: 'Одеса, пр-т Шевченка, 4д (Приморський)',
      rights: 'Всі права захищені.',
    }
  },
  en: {
    // Header
    nav: {
      rooms: 'Rooms',
      gallery: 'Gallery',
      birthday: 'BIRTHDAY Programs',
      certificates: 'Certificates',
      faq: 'FAQ',
      outdoor: 'Outdoor QUESTS',
      contacts: 'Contacts',
      bookingPhones: 'Booking phone lines:',
      allQuestsCount: '39 escape rooms',
      turnkeyParty: 'Turnkey Celebrations',
      fromPrice: 'from 1000 UAH',
      locationsSubtitle: 'Torgova / Shevchenko',
    },
    // Home Hero & Intro
    hero: {
      subtitle: 'Escape rooms of Odesa by PAUTINArooms!',
      description: 'Immersive and atmospheric escape rooms by PAUTINArooms! More than 30 unique quests with diverse storylines.',
      questsTitle: 'QUESTS',
    },
    // Filters & Search
    filters: {
      categories: {
        'ВСІ': 'ALL',
        'ХОРРОР': 'HORROR',
        'МІСТИКА': 'MYSTERY',
        'ФЕНТЕЗІ': 'FANTASY',
        'ФАНТАСТИКА': 'SCI-FI',
        'ДЕТЕКТИВ': 'DETECTIVE',
        'ПРИГОДИ': 'ADVENTURE',
        'НА ДЕНЬ НАРОДЖЕННЯ': 'FOR BIRTHDAYS',
        'ДЛЯ ПАРИ': 'FOR COUPLES',
        'ДЛЯ 4+ ЛЮДЕЙ': 'FOR 4+ PLAYERS',
      },
      searchPlaceholder: 'Search quest by title...',
      allAreas: 'All districts',
      center: 'Center',
      primorsky: 'Primorsky',
      questsCount: 'quests',
      questSingle: 'quest',
      noQuestsFound: 'No quests found matching your selected filters.',
      resetFilters: 'Reset filters',
    },
    // Card
    card: {
      players: 'pers.',
      duration: 'min',
      from: 'from',
      currency: 'UAH',
      bookNow: 'Book Now',
      newBadge: 'NEW',
    },
    // Home Promo
    homePromo: {
      birthdayTag: 'Turnkey Celebration',
      birthdayTitle: 'BIRTHDAYS & CORPORATE EVENTS AT PAUTINA',
      birthdayDesc: 'Looking for an unforgettable party for kids or adults? We organize everything: captivating escape rooms, cozy lounge banquet areas for cake and pizza, animators, and memorable celebrations.',
      birthdayPoint1: 'Private lounge rooms for cake and celebrations after the game',
      birthdayPoint2: 'Special children-adapted scenarios with dedicated party hosts',
      birthdayPoint3: 'Simultaneous multi-room games for large groups up to 30 people',
      birthdayBtn: 'View Details and Pricing',
      certTag: 'The Perfect Gift',
      certTitle: 'GIFT CERTIFICATES FOR ESCAPE ROOMS',
      certDesc: 'Gift unforgettable emotions instead of things! Digital and premium physical gift certificates are valid for any quest across our network for 6 months.',
      certBtn: 'Order a Certificate',
      locTag: 'Odesa Locations',
      locTitle: 'WHERE TO FIND US',
      locCenter: 'Location "Center"',
      locCenterAddr: 'Odesa, 2 Torgova St.',
      locCenterQuests: 'Quests: Harry & Secret Chamber, The Ring, Blackbeard Treasures, Party Lounge.',
      locPrim: 'Location "Primorsky"',
      locPrimAddr: 'Odesa, 4d Shevchenko Ave.',
      locPrimQuests: 'Quests: Saw: The Final Game, Asylum Escape, Sherlock Holmes.',
      openMap: 'Open in Google Maps →',
    },
    // Contacts Page
    contactsPage: {
      tag: 'Get in Touch',
      title: 'OUR CONTACTS',
      desc: 'We are open daily from 10:00 to 22:30. Give us a call or visit any of our locations in Odesa!',
      loc1Badge: 'Central Location',
      loc1Addr: 'Odesa, 2 Torgova St.',
      loc1Desc: 'Landmarks: Zhvanetsky Boulevard, Shah Palace, New Market. Convenient access and nearby parking.',
      loc1Schedule: 'Daily 10:00 to 22:30 (by appointment)',
      loc1Quests: 'Quests: Harry & Secret Chamber, The Ring, Blackbeard Treasures',
      loc2Badge: 'Primorska Location',
      loc2Addr: 'Odesa, 4d Shevchenko Ave.',
      loc2Desc: 'Landmarks: Victory Park, Polytechnic University, Sports Palace. Private themed entrance.',
      loc2Schedule: 'Daily 10:00 to 22:30 (by appointment)',
      loc2Quests: 'Quests: Saw: Final Game, Asylum Escape, Sherlock Holmes',
      googleMapBtn: 'Open in Google Maps ↗',
      formTitle: 'Have questions or a special request?',
      formDesc: 'Leave a message and our booking manager will contact you within 15 minutes.',
      namePlaceholder: 'Your Name',
      phonePlaceholder: '+380 (XX) XXX-XX-XX',
      messagePlaceholder: 'Your message or question...',
      sendBtn: 'Send Message',
      sentSuccess: 'Thank you! Your message has been sent. We will call you shortly.',
    },
    // Birthday Page
    birthdayPage: {
      tag: 'Unforgettable Parties in Odesa',
      title: 'BIRTHDAYS AT PAUTINA ROOMS',
      desc: 'Give the birthday hero and friends a real adventure! Captivating quests, comfortable party lounge areas, energetic hosts, and memories they will talk about all year.',
      benefit1Title: 'For Any Group Size',
      benefit1Desc: 'We host groups from 4 up to 30 kids or adults simultaneously across multiple rooms.',
      benefit2Title: 'Cozy Lounge Zones',
      benefit2Desc: 'Private celebration rooms with sofas, tables, water cooler, and audio system for cake and pizza.',
      benefit3Title: 'Parents Relax',
      benefit3Desc: 'Our experienced animators and administrators guide the games safely from start to finish.',
      packagesTag: 'Ready-Made Packages',
      packagesTitle: 'PARTY PACKAGES',
      consultTitle: 'Need advice on scenarios or timing?',
      consultDesc: 'Call our party manager. We will select the perfect escape quest based on children ages and calculate the exact schedule.',
      viewQuestsBtn: 'View All Escape Rooms',
    },
    // Certificates Page
    certPage: {
      tag: 'Gift True Emotions',
      title: 'GIFT CERTIFICATES',
      desc: 'The best gift for birthdays, holidays, or colleagues. Valid for any quest room across PAUTINA in Odesa for 6 months.',
      elecTitle: '📧 Digital Certificate',
      elecDesc: 'Instant delivery of a stylish PDF certificate with a personal code to Viber, Telegram, or Email in 5 minutes.',
      elecBadge: '⚡ Instant & Convenient',
      physTitle: '🎁 Branded Gift Box',
      physDesc: 'A stylish gift tube or kraft envelope with a premium plastic card certificate. Pickup in Odesa or Nova Poshta delivery.',
      physBadge: '✨ Premium Presentation',
      chooseNominal: '1. Choose Certificate Value:',
      fillDetails: '2. Your Contact Information:',
      nameLabel: 'Recipient / Buyer Name *',
      phoneLabel: 'Phone Number *',
      emailLabel: 'Email (for digital delivery)',
      addressLabel: 'Delivery Address / Nova Poshta Branch',
      submitBtn: 'Order Certificate for',
      successTitle: 'Certificate Ordered Successfully!',
      successDesc: 'Thank you! Our manager will call you within 10 minutes to confirm your order.',
    },
    // FAQ Page
    faqPage: {
      tag: 'Help & Guidelines',
      title: 'FREQUENTLY ASKED QUESTIONS',
      desc: 'Everything you need to know before your visit to PAUTINA escape rooms in Odesa.',
      stillHaveQuestions: 'Still have unanswered questions?',
      callUs: 'Call us or message us directly — our administrators will gladly assist you!',
    },
    // Locations Page
    locationsPage: {
      tag: 'Our Branches',
      title: 'LOCATIONS IN ODESA',
      desc: '2 atmospheric locations in convenient parts of Odesa with private lounge areas and parking.',
      torgovaArea: 'Central District',
      torgovaTitle: 'Odesa, 2 Torgova St.',
      torgovaLandmark: 'Landmark: Zhvanetsky Blvd / New Market',
      shevchenkoArea: 'Primorsky District',
      shevchenkoTitle: 'Odesa, 4d Shevchenko Ave.',
      shevchenkoLandmark: 'Landmark: Victory Park / Polytechnic',
      questsAtLoc: 'Quests at this branch:',
      googleMapBtn: 'Google Maps ↗',
      playersLabel: 'players',
      bookBtn: 'Book Now',
    },
    // Room Detail Page & Booking
    roomPage: {
      home: 'Home',
      quests: 'Quests',
      difficulty: 'Difficulty',
      players: 'Players',
      duration: 'Duration',
      age: 'Age',
      safetyTitle: 'Safety & Comfort:',
      safety1: '• All rooms are equipped with emergency door release buttons.',
      safety2: '• Operators provide video monitoring and instant clues on request.',
      safety3: '• No special physical clothing or athletic preparation required.',
      suitableFor: 'Perfect for groups of friends, family weekends, or birthday celebrations.',
      bookingTitle: 'ONLINE SESSION BOOKING',
      selectDate: 'Select game date:',
      availableSlots: 'Available sessions:',
      busy: 'Booked',
      modalTitle: 'Quest Booking',
      dateLabel: 'Date:',
      timeLabel: 'Time:',
      priceLabel: 'Price:',
      playersCountLabel: 'Number of players:',
      nameInput: 'Your Name *',
      phoneInput: 'Phone Number *',
      commentInput: 'Comment (birthday, kids ages, etc.)',
      confirmBtn: 'Confirm Booking',
      bookingInProgress: 'Processing...',
      successTitle: 'Booking Confirmed Successfully!',
      successMsg: 'We sent an SMS confirmation. Please arrive 10 minutes before your scheduled start time!',
      yourBookingId: 'Your Booking Reference:',
    },
    // Footer
    footer: {
      about: 'The leading escape room network in Odesa. Atmospheric thematic rooms, live actors, birthdays, and turnkey events.',
      questsHeading: 'Odesa Quests',
      infoHeading: 'Information',
      contactsHeading: 'Contacts',
      allRooms: 'All Escape Rooms',
      kidsQuests: 'Quests for Kids',
      horrorActor: 'Horror with Actor',
      mysteryAdv: 'Mystery & Adventure',
      birthdays: 'Birthday Celebrations',
      giftCerts: 'Gift Certificates',
      faq: 'FAQ & Rules',
      locations: 'Locations & Quests',
      addressCenter: 'Odesa, 2 Torgova St. (Center)',
      addressPrim: 'Odesa, 4d Shevchenko Ave. (Primorsky)',
      rights: 'All rights reserved.',
    }
  }
};

// Quest titles and descriptions in English
export const questTranslationsEn: Record<string, { title: string; shortDescription?: string; description?: string }> = {
  'hogvarts': {
    title: 'HOTEL HOGWARTS',
    shortDescription: 'Welcome to our hotel full of mysteries. For nearly a century, no guest has ever managed to leave...',
    description: 'Welcome to our hotel full of secrets and riddles — Hotel Hogwarts. For nearly a century, none of our guests could find their way out. Yet brave souls still try to stay for the night, for our hotel was once the residence of the great wizard Nigel Sylvester, creator of the Room of Requirement.'
  },
  'dracula': {
    title: 'DRACULA',
    shortDescription: 'In ancient times in Transylvania lived Prince Vlad Tepes, Dracula. His bloody heart still beats in the crypt...',
    description: 'In ancient times in Transylvania lived Prince Vlad Tepes, better known as Dracula. Feared and hated for his cruelty, he was thought to be a vampire and slain by church inquisitors. Yet legend says the destruction ritual was never finished and he merely sleeps in an ancient crypt.'
  },
  'pobeg': {
    title: 'PRISON ESCAPE',
    shortDescription: 'Imprisoned under false charges, you have only one hour to break free from the dungeon cells...',
    description: 'Trapped behind bars under false accusations, you have exactly one hour to break free into the open air. Cunning puzzles, hidden clues, and unexpected trials await to test your wits, logic, and teamwork.'
  },
  'mislyvtsi': {
    title: 'GHOSTBUSTERS',
    shortDescription: 'An old town hall is seized by paranormal forces. Put on your proton packs and capture the ghosts!',
    description: 'The city is under supernatural siege! Strange anomalies, moving objects, and mischievous phantoms have taken over the historic building. Only your team of Ghostbusters can decipher the paranormal gear and cleanse the facility.'
  },
  'vono': {
    title: 'IT',
    shortDescription: 'Every 27 years the ancient evil awakes in the sewers. Face your fears to survive...',
    description: 'Every 27 years, an ancient horror awakens beneath the quiet streets. Red balloons, eerie laughter, and sinister labyrinth sewers. Test your courage and face your deepest fears to escape Pennywise’s lair.'
  },
  'garri-potter-krestrag': {
    title: 'HARRY POTTER: HORCRUX MYSTERY',
    shortDescription: 'Voldemort’s darkest artifacts are concealed in the Chamber. Find and destroy them before midnight.',
    description: 'Dark magic is rising in the wizarding world. Lord Voldemort has concealed his most protected Horcrux deep within enchanted vaults. Brew potions, cast spells, and decipher ancient runes to save the realm.'
  },
  'golova-berlioza': {
    title: "BERLIOZ'S HEAD",
    shortDescription: 'Mystical Odesa encounters the supernatural atmosphere of Bulgakov’s Master and Margarita.',
    description: 'Annushka has already spilled the sunflower oil... Mystical happenings, talking black cats, and eerie riddles inspired by Mikhail Bulgakov’s legendary novel. Solve the enigma before the clock strikes midnight.'
  },
  'garri-potter-taemna-kimnata': {
    title: 'HARRY POTTER & THE CHAMBER OF SECRETS',
    shortDescription: 'The heir of Slytherin has opened the chamber. Enter the legendary catacombs and face the Basilisk.',
    description: 'The Chamber of Secrets has been opened once more. Enemies of the heir, beware! Explore the hidden corridors of Hogwarts, speak Parseltongue, brew reviving potions, and find the sword of Gryffindor.'
  },
  'ministerstvo-magii': {
    title: 'MINISTRY OF MAGIC',
    shortDescription: 'Infiltrate the Department of Mysteries to retrieve the Prophecy sphere before the Death Eaters arrive.',
    description: 'Under cover of Polyjuice potion, infiltrate the grand halls of the British Ministry of Magic. Bypass magical security, solve ministerial puzzles, and retrieve the glowing crystal prophecy.'
  },
  'vidma': {
    title: 'THE WITCH',
    shortDescription: 'Deep in the dark forest lies the hut of an ancient sorceress. Escape before she returns for the ritual.',
    description: 'Lost in the haunted woods at twilight, you stumble across a sinister hut made of ancient moss and bones. The witch’s brew is boiling, and you have sixty minutes before she returns to begin her midnight hex.'
  },
  'mumiya': {
    title: 'THE MUMMY',
    shortDescription: 'Ancient Egyptian tomb filled with sand traps, golden sarcophagi, and the Pharaoh’s curse.',
    description: 'An archaeological expedition in the Valley of the Kings unearths an unsealed tomb. Solve the hieroglyphic riddles, escape the moving stone traps, and reverse the ancient Pharaoh’s curse.'
  },
  'hobbit': {
    title: 'THE HOBBIT',
    shortDescription: 'Journey from the peaceful Shire to the Lonely Mountain to reclaim the Arkenstone.',
    description: 'Pack your walking stick and leave the comfort of Bag End! Journey through elven realms, dark dwarven caverns, and riddles in the dark to recover the legendary Arkenstone from the dragon’s hoard.'
  },
  'zagubleni-u-kosmosi': {
    title: 'LOST IN SPACE',
    shortDescription: 'A sci-fi research cruiser suffers a total system failure. Restore the reactor to initiate warp drive.',
    description: 'Emergency lights are flashing on the deep-space research vessel Odyssey. Oxygen levels are declining, navigation coordinates are corrupted, and the hyperdrive core must be manually recalibrated.'
  },
  'kniga-mertvyh': {
    title: 'BOOK OF THE DEAD',
    shortDescription: 'The Necronomicon was opened in an abandoned cabin. Seal the demonic portal before you are claimed.',
    description: 'An ancient grimoire bound in leathery parchment was read aloud in a secluded forest cabin. Sinister demonic whispers echo through the wooden floorboards. Perform the sealing rite before dawn breaks.'
  },
  'dzhumandzhi': {
    title: 'JUMANJI',
    shortDescription: 'The drums are beating! Enter the wild jungle board game and finish the dice roll to survive.',
    description: 'In the dusty attic, an antique wooden board game begins to beat like tribal drums. Each roll of the dice unleashes jungle perils, venomous vines, and wild puzzles. Complete the game and yell Jumanji!'
  },
  'chuzhi': {
    title: 'ALIENS',
    shortDescription: 'Investigate the derelict Weyland-Yutani outpost. The motion tracker is beeping...',
    description: 'You are a salvage squad boarding the silent mining outpost LV-426. Power is failing, steam hisses from rusted pipes, and the motion tracker blips with approaching life forms. Evacuate before the quarantine locks down.'
  },
  'dzhungli': {
    title: 'JUNGLE',
    shortDescription: 'Exotic ruins of an ancient temple hidden deep inside tropical rainforests.',
    description: 'Venture into the heart of an uncharted Amazonian rainforest. Discover forgotten Mayan mechanisms, cross rope bridges, and decode sacred stone totems to escape the temple collapse.'
  },
  'garri-potter-mahovik-chasu': {
    title: 'HARRY POTTER & THE TIME-TURNER',
    shortDescription: 'Travel through the hourglass of time to alter past events and save an innocent soul.',
    description: 'With Professor McGonagall’s enchanted golden Time-Turner, spin the clock backwards and relive past hours. Solve paradoxes, unlock locked doors, and alter the flow of magical history.'
  },
  'ritual': {
    title: 'THE RITUAL',
    shortDescription: 'An occult secret society performs midnight rites. Infiltrate their sanctuary and stop the summoning.',
    description: 'Behind heavy velvet drapes and candlelit altars, a clandestine occult order prepares an ancient sacrifice. Decipher dark symbols, unveil secret passages, and break the circle of summoning.'
  },
  'ostannya-ekskursiya': {
    title: 'THE LAST TOUR',
    shortDescription: 'A seemingly innocent historic city tour takes a chilling turn inside abandoned catacombs.',
    description: 'What started as a picturesque historical excursion beneath Odesa transforms into an adrenaline-charged fight for survival. Accommodates large groups up to 12 players simultaneously.'
  },
  'tsyrk-zhahiv': {
    title: 'CIRCUS OF HORRORS',
    shortDescription: 'The carnival came to town, but the laughing clowns have sinister intentions.',
    description: 'Behind the striped circus tent lies a twisted funhouse filled with distorted mirrors, eerie music boxes, and macabre clown performances. Find the exit before you become the main act.'
  },
  'syayvo': {
    title: 'THE SHINING',
    shortDescription: 'The Overlook Hotel is isolated by winter blizzards. Room 237 is unlocked...',
    description: 'Snowed in at the grand mountain resort, you hear whispers through the radiators and typewriter clicks in the ballroom. Unravel the chilling hotel secrets before madness takes hold.'
  },
  'vygnannya': {
    title: 'THE EXORCISM',
    shortDescription: 'A possessed mansion where gravity bends and unholy voices whisper in the dark.',
    description: 'Church authorities have failed, and the entity within the Victorian residence grows stronger with each hour. Uncover holy relics, read blessed inscriptions, and perform the cleansing ceremony.'
  },
  'poltergeist': {
    title: 'POLTERGEIST: HAUNTED HOUSE',
    shortDescription: 'Objects float and static glows on the television screen. Free the trapped child spirit.',
    description: 'They’re here! Strange television static, levitating kitchenware, and unexplained chills. Enter the haunted suburban home and venture into the spectral realm to rescue the trapped soul.'
  },
  'demony-domu-uorren': {
    title: 'THE DEMONS OF THE WARREN HOUSE',
    shortDescription: 'Explore the occult artifact museum of Ed and Lorraine Warren. Do not touch anything!',
    description: 'Deep in the basement of paranormal investigators Ed and Lorraine Warren rests the world’s most dangerous collection of cursed relics. An evil presence has awakened — can you seal the vault?'
  },
  'povorot-ne-tuda': {
    title: 'WRONG TURN',
    shortDescription: 'Your car broke down on a deserted Appalachian trail. An isolated cabin looms ahead.',
    description: 'Flat tire in the deep backwoods, no cellular signal, and the shadows are closing in. A rundown shack offers shelter, but its monstrous inhabitants are returning from the hunt.'
  },
  'annabel': {
    title: 'ANNABELLE',
    shortDescription: 'The locked glass case in the occult room is shattered. The doll is waiting for you.',
    description: 'Warning: Positively Do Not Open. The infamous porcelain doll with braided hair and porcelain smile is free from her glass prison. Survive the haunting in this thrilling horror room for up to 8 players.'
  },
  'taro': {
    title: 'TAROT: CARD OF DEATH',
    shortDescription: 'The fortune teller drew the Death card. Break the curse before fate catches up.',
    description: 'An esoteric parlor scented with incense and lit by burning sage. The cards were dealt, and the ominous Death arcana appeared. Alter the predetermined prophecy before the final candle burns out.'
  },
  'tehasska-rizanyna': {
    title: 'TEXAS CHAINSAW MASSACRE',
    shortDescription: 'The chainsaw motor roars in the distance. Escape the slaughterhouse basement.',
    description: 'Chained to cold metal hooks in a dark underground meat locker, the deafening roar of a chainsaw echoes down the hallway. Work together under pure adrenaline to cut your bonds and run.'
  },
  'nadpryrodne': {
    title: 'SUPERNATURAL',
    shortDescription: 'Join the Winchester brothers on a hunt for demons, wendigos, and vengeful spirits.',
    description: 'The iconic 1967 Impala is parked outside. Arm yourselves with salt, silver, and the hunter’s journal to identify the nocturnal monster stalking the abandoned motel.'
  },
  'ekzortsysty': {
    title: 'THE EXORCISTS',
    shortDescription: 'An elite team of spiritual specialists sent to cleanse an ancient cathedral crypt.',
    description: 'Centuries of dark enchantments have breached the sacred ground of an old cathedral crypt. Use ancient psalms, holy water, and teamwork to banish the demonic presence back to the abyss.'
  },
  'astral': {
    title: 'INSIDIOUS / ASTRAL',
    shortDescription: 'Cross into The Further, the dark astral plane of tormented wandering spirits.',
    description: 'Tread softly into the realm of shadows known as The Further. Cold red doors, smiling specters, and a ticking clock. Find your way back to the physical world before your silver cord is severed.'
  },
  '9-krugov-ada': {
    title: '9 CIRCLES OF HELL',
    shortDescription: 'Dante’s journey through the infernal gates. Pass the tests of Limbo to the frozen depths.',
    description: 'Abandon all hope, ye who enter here! A breathtaking visual quest taking your team through the mythic circles of the Inferno. Ideal for groups of up to 6 players.'
  },
  'krovava-meri': {
    title: 'BLOODY MARY',
    shortDescription: 'Chant her name three times in front of the mirror. Dare you look into the glass?',
    description: 'A dark bathroom, flickering candles, and a gilded Victorian mirror. Say her name three times and the folklore legend awakens. Unravel the truth behind Mary’s death to break the reflection curse.'
  },
  'proklyattya-monahini': {
    title: "THE NUN'S CURSE",
    shortDescription: 'A secluded Romanian cloister sealed by the Vatican. The demonic entity Valak lurks within.',
    description: 'Sent by the Vatican to investigate an ancient cloister in Romania, you uncover unholy blasphemies and catacomb tunnels. Face the sinister visage of the demon Nun and escape with your soul.'
  },
  'zagrobnyj-svit': {
    title: 'THE UNDERWORLD',
    shortDescription: 'Cross the river Styx and appease Charon to navigate the realm of forgotten souls.',
    description: 'Greek mythology comes alive in this atmospheric journey through Hades. Pay the ferryman Charon his coin, solve Cerberus’s trials, and return from the realm of the dead.'
  },
  'semejka-addams': {
    title: 'THE ADDAMS FAMILY',
    shortDescription: 'Creepy, kooky, mysterious and spooky! Visit Wednesday and Gomez in their gothic manor.',
    description: 'Thing is knocking on the table, cousin Itt is hiding in the closet, and Morticia’s carnivorous plants are hungry! A hilarious, atmospheric quest for up to 10 players of all ages.'
  },
  'spadok': {
    title: 'THE INHERITANCE',
    shortDescription: 'An eccentric millionaire left a fortune in his mansion safe, but only to those worthy.',
    description: 'The eccentric uncle was notoriously fond of complex ciphers and hidden safes. Prove your intellect and claim the multi-million dollar inheritance before the greedy lawyers contest the will.'
  },
  'birthday-program': {
    title: 'BIRTHDAY PROGRAMS',
    shortDescription: 'Special celebratory quest packages with animators, private lounge rooms, and custom games.',
    description: 'All-inclusive turnkey birthday celebration packages for kids, teens, and adults. Includes dedicated party host, customized game difficulty, private banquet lounge, music, and photo ops.'
  }
};
