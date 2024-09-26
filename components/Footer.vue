<template>
    <footer class="bg-gray-100 py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h2 class="text-2xl font-bold text-gray-800">Hambaravi Eestis</h2>
            <p class="mt-2 text-gray-600">Hea ülevaade hambaravi kliinikutest Eestis.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Meist</h3>
            <ul class="space-y-2">
              <li>kasparstoic@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Leia hambaarstiaeg ruttu!</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="tallinn" class="text-gray-600 hover:text-gray-800">Hambaravi Tallinnas</NuxtLink></li>
              <li><NuxtLink to="tartu" class="text-gray-600 hover:text-gray-800">Hambaravi Tartus</NuxtLink></li>
              <li><NuxtLink to="narva" class="text-gray-600 hover:text-gray-800">Hambaravi Narvas</NuxtLink></li>
              <li><NuxtLink to="pärnu" class="text-gray-600 hover:text-gray-800">Hambaravi Pärnus</NuxtLink></li>
              <li><NuxtLink to="kohtla-järve" class="text-gray-600 hover:text-gray-800">Hambaravi Kohtla-Järvel</NuxtLink></li>
            </ul>
          </div>
        </div>
  
        <div class="mt-8">
          <p class="text-sm text-gray-600">
            2024 - Õigused kaitstud! - Kaspar Stoic
          </p>
        </div>
      </div>
    </footer>
  </template>