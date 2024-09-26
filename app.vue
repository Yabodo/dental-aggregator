<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Parimad hambaravi kliinikud Tartus.</h1>
    <p class="mb-6">Kõik hambaarstid ühest kohast!</p>
    <ul class="space-y-4">
      <li v-for="(clinic, i) in clinics" :key="i" class="bg-white shadow rounded-lg p-4">
        <a :href="clinic?.href" class="flex justify-between items-start" target="_blank">
          <div>
            <h2 class="text-xl font-semibold">{{ i+1 }}. {{ clinic.name }}</h2>
            <p class="text-gray-600">{{ clinic.address }}</p>
            <p class="text-sm text-gray-500 mt-2">{{ clinic.description }}</p>
          </div>
          <div v-if="clinic.isPremium" class="bg-yellow-400 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
            Premium
          </div>
        </a>
      </li>
    </ul>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from 'vue'

const clinics = ref([
  {
    name: 'Lumi Dental Tartu Hambakliinik',
    address: 'Ülikooli 2, 51003 Tartu',
    description: 'Esmaklassiline hambaravi, mille eesmärgiks on erakordne suutervis pikaks ajaks.',
    isPremium: true,
    href: 'https://lumidental.ee/'
  },
  {
    name: 'City Center Dental',
    address: 'Vabaduse pst 2, 51004 Tartu',
    description: '',
    isPremium: true,
  },
  {
    name: 'Dentales Hambaravi',
    address: 'Mõisavahe 34c, 50708 Tartu',
    description: 'Tõeline jõud peitub naeratuses. Terved hambad Dentalesest!',
    isPremium: true,
    href: 'https://dentales.ee/'
  },
  {
    name: 'Judent Dental Clinic',
    address: 'Sadama, 51004 Tartu',
    description: 'Nii ilus, et naeratad!',
    isPremium: false,
    href: 'http://www.judent.ee/'
  },
  {
    name: 'DentalPlanet Hambaravi',
    address: 'Jaama 56a, 50604 Tartu',
    description: 'Hoolime Teie hammastest!',
    isPremium: false,
    href: 'https://www.dentalplanet.ee/broneerimine'
  },
  {
    name: 'Eda Asser FIE',
    address: 'Riia 130, 51014 Tartu',
    description: '',
    isPremium: false,
  },
  {
    name: 'Dr Kaido Noormaa Hambaravi OÜ',
    address: 'Küütri 7, 51007 Tartu',
    description: '',
    isPremium: false,
    href: 'https://www.hambaarst.ee/register/10085'
  },
  {
    name: 'Dr. Noormetsa Hambaravi OÜ',
    address: 'Tähe 28, 50103 Tartu',
    description: '',
    isPremium: false,
    href: 'https://www.hambaarst.ee/register/10783'
  },
  {
    name: 'LiiDental Hambaravi',
    address: 'Paju 2-7.korrus, 50603 Tartu',
    description: 'Naeratus on Sinu visiitkaart!',
    isPremium: false,
    href: 'http://www.liidental.ee/'
  },
  {
    name: 'Med & Dent Ltd.',
    address: 'Sõpruse pst 2, 50703 Tartu',
    description: '',
    isPremium: false,
    href: 'http://www.meddent.ee/'
  },
  {
    name: 'Helberg Hambaravi',
    address: 'Raatuse 61, 50603 Tartu',
    description: 'Terved hambad terveks eluks!',
    isPremium: false,
    href: 'https://www.helberghambaravi.ee/'
  },
  {
    name: 'Maxilla Hambakliinik',
    address: 'Soola 8, 51004 Tartu',
    description: 'Üle 35 aasta kvaliteetset hambaravi',
    isPremium: false,
    href: 'http://www.maxilla.ee/'
  },
  {
    name: 'Björn Puna',
    address: 'Tigutorn, Väike-Turu 5, 51013 Tartu',
    description: '',
    isPremium: false,
    href: 'https://bluedent.ee/'
  },
  {
    name: 'DTK Hambaravi OÜ',
    address: 'Uus 13c, 50603 Tartu',
    description: 'Terved, tugevad ja ilusad hambad',
    isPremium: false,
    href: 'http://dtk.ee/kontakt/'
  },
  {
    name: 'Dr. Eve Jaska Hambaravi',
    address: 'Kalevi 74, 50104 Tartu',
    description: 'Aastast 1991 Tartus tegutsev erahambaravi.',
    isPremium: false,
    href: 'http://evehambaravi.eu/'
  },
  {
    name: 'Dental Hambaravi OÜ',
    address: 'Turu 3-19, 51004 Tartu',
    description: 'Kui Teil on hammaskonnaga probleeme, tulge vastuvõtule ja leiame Teile sobiva lahenduse!',
    isPremium: false,
    href: 'https://dental.ee/'
  },
  {
    name: 'Rätsep Hambaravi',
    address: 'Väike-Tähe 20, 51010 Tartu',
    description: 'Kvaliteet, mugavus, täpsus',
    isPremium: false,
    href: 'https://ratsephambaravi.ee/'
  },
  {
    name: 'BLENDENT Ltd.',
    address: 'Ropka tee 6, 50104 Tartu',
    description: '',
    isPremium: false,
    href: 'http://www.blendent.ee/tartu'
  },
  {
    name: 'Robert Luht OÜ',
    address: '9, B. G. Forseliuse tn 1, 50107 Tartu',
    description: 'Hambaravi ja suuhügieen',
    isPremium: false,
    href: 'http://robertluht.ee/'
  },
  {
    name: 'DentalPlanet Hambaravi',
    address: 'Jaama 56a, 50604 Tartu',
    description: 'Hoolime Teie hammastest!',
    isPremium: false,
    href: 'https://www.dentalplanet.ee/broneerimine'
  }
])
</script>