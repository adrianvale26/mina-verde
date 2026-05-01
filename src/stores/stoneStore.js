import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

export const useStoneStore = defineStore('stones', () => {
  const stones = ref([])
  const loading = ref(false)
  const selectedStone = ref(null)
  const filters = ref({
    caratMin: 0,
    caratMax: 10,
    priceMax: 20000,
    cuts: [],
    treatment: ''
  })

  const filteredStones = computed(() =>
    stones.value.filter(s => {
      if (s.carat < filters.value.caratMin) return false
      if (s.carat > filters.value.caratMax) return false
      if (s.listPrice > filters.value.priceMax) return false
      if (filters.value.cuts.length && !filters.value.cuts.includes(s.cut)) return false
      return true
    })
  )

  async function fetchStones() {
    loading.value = true
    try {
      const q = query(collection(db, 'stones'), where('status', '==', 'in_stock'))
      const snap = await getDocs(q)
      stones.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
    } catch (e) {
      stones.value = getDemoStones()
    }
    loading.value = false
  }

  async function fetchStoneById(id) {
    loading.value = true
    try {
      const { doc, getDoc } = await import('firebase/firestore')
      const snap = await getDoc(doc(db, 'stones', id))
      if (snap.exists()) selectedStone.value = { id: snap.id, ...snap.data() }
    } catch (e) {
      selectedStone.value = getDemoStones().find(s => s.id === id) || null
    }
    loading.value = false
  }

  return { stones, loading, selectedStone, filters, filteredStones, fetchStones, fetchStoneById }
})

function getDemoStones() {
  return [
    {
      id: 'stone-001',
      stoneName: '1.42ct Emerald Cut Colombian Emerald',
      carat: 1.42,
      cut: 'Emerald',
      color: 'Vivid Green',
      clarity: 'Type II, minor inclusions',
      origin: 'Colombian',
      treatment: 'Minor oil',
      certNumber: '2291478842',
      listPrice: 1850,
      status: 'in_stock',
      mineRegion: 'Coscuez',
      description: 'Cut from the Coscuez mine in Boyacá, Colombia. Purchased directly from a family dealer in Bogotá\'s Emerald Trade Center in June 2026.',
      photos: [],
      certScanUrl: ''
    },
    {
      id: 'stone-002',
      stoneName: '2.15ct Oval Cut Colombian Emerald',
      carat: 2.15,
      cut: 'Oval',
      color: 'Vivid Green',
      clarity: 'Type II, slight inclusions',
      origin: 'Colombian',
      treatment: 'Minor oil',
      certNumber: '2291478843',
      listPrice: 3200,
      status: 'in_stock',
      mineRegion: 'Muzo',
      description: 'From the legendary Muzo mine. Exceptional color saturation and clarity for its size.',
      photos: [],
      certScanUrl: ''
    },
    {
      id: 'stone-003',
      stoneName: '0.88ct Round Brilliant Colombian Emerald',
      carat: 0.88,
      cut: 'Round',
      color: 'Vivid Green',
      clarity: 'Type II, minor inclusions',
      origin: 'Colombian',
      treatment: 'Minor oil',
      certNumber: '2291478844',
      listPrice: 980,
      status: 'in_stock',
      mineRegion: 'Chivor',
      description: 'A rare round brilliant cut from the Chivor region. Exceptional luster for its size.',
      photos: [],
      certScanUrl: ''
    },
    {
      id: 'stone-004',
      stoneName: '3.20ct Cushion Cut Colombian Emerald',
      carat: 3.20,
      cut: 'Cushion',
      color: 'Vivid Green',
      clarity: 'Type II, moderate inclusions',
      origin: 'Colombian',
      treatment: 'Standard oil',
      certNumber: '2291478845',
      listPrice: 4800,
      status: 'in_stock',
      mineRegion: 'Coscuez',
      description: 'Statement-size cushion cut with deep Colombian green. Best in a pendant setting.',
      photos: [],
      certScanUrl: ''
    },
    {
      id: 'stone-005',
      stoneName: '1.05ct Pear Cut Colombian Emerald',
      carat: 1.05,
      cut: 'Pear',
      color: 'Vivid Green',
      clarity: 'Type II, minor inclusions',
      origin: 'Colombian',
      treatment: 'Minor oil',
      certNumber: '2291478846',
      listPrice: 1450,
      status: 'in_stock',
      mineRegion: 'Muzo',
      description: 'Elegant pear cut from Muzo. Perfect for drop earrings or a pendant.',
      photos: [],
      certScanUrl: ''
    },
    {
      id: 'stone-006',
      stoneName: '0.55ct Emerald Cut Colombian Emerald',
      carat: 0.55,
      cut: 'Emerald',
      color: 'Vivid Green',
      clarity: 'Type I, clean to eye',
      origin: 'Colombian',
      treatment: 'No oil',
      certNumber: '2291478847',
      listPrice: 620,
      status: 'in_stock',
      mineRegion: 'Chivor',
      description: 'A rare untreated emerald from Chivor. Clean to the eye — exceptional for its grade.',
      photos: [],
      certScanUrl: ''
    }
  ]
}