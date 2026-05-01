<template>
  <div class="quiz-view">
    <div class="mv-container">
      <!-- Quiz Intro (step 0) -->
      <div v-if="currentStep === 0" class="quiz-intro">
        <span class="mv-label">Find Your Emerald</span>
        <h1 class="quiz-intro__headline">Not sure where to start?</h1>
        <p class="quiz-intro__sub">
          Answer 5 quick questions and we'll match you with the right emerald for your budget, style, and goals. Takes under 2 minutes.
        </p>
        <div class="quiz-intro__visual">
          <div class="quiz-intro__gem">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M12 8L8 10.5V15.5L12 18L16 15.5V10.5L12 8Z" fill="currentColor"/>
              <path d="M3 7L12 12M21 7L12 12M12 12V18" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
        <div class="quiz-intro__features">
          <div class="quiz-intro__feature">
            <span class="quiz-intro__feature-num">01</span>
            <h3>Tell us your style</h3>
            <p>Classic solitaire or modern halo? We'll tailor recommendations to your taste.</p>
          </div>
          <div class="quiz-intro__feature">
            <span class="quiz-intro__feature-num">02</span>
            <h3>Set your budget</h3>
            <p>From $500 to $10,000+. We'll show you what's realistic at every price point.</p>
          </div>
          <div class="quiz-intro__feature">
            <span class="quiz-intro__feature-num">03</span>
            <h3>Get your match</h3>
            <p>A curated selection of stones that fit your criteria — with full GIA specs.</p>
          </div>
        </div>
        <button class="mv-btn mv-btn--primary mv-btn--lg" @click="startQuiz">Start the Quiz</button>
      </div>

      <!-- Quiz Steps (1-5) -->
      <div v-else-if="currentStep <= 5" class="quiz-step">
        <!-- Progress bar -->
        <div class="quiz-progress">
          <div class="quiz-progress__bar" :style="{ width: ((currentStep - 1) / 5) * 100 + '%' }"></div>
        </div>
        <div class="quiz-progress__label">
          <span>Step {{ currentStep }} of 5</span>
        </div>

        <!-- Question -->
        <div class="quiz-question">
          <h2 class="quiz-question__text">{{ currentQuestion.text }}</h2>
          <div class="quiz-question__options">
            <button
              v-for="opt in currentQuestion.options"
              :key="opt.value"
              class="quiz-option"
              :class="{ 'quiz-option--selected': answers[currentQuestion.key] === opt.value }"
              @click="selectAnswer(opt.value)"
            >
              <span class="quiz-option__label">{{ opt.label }}</span>
            </button>
          </div>
        </div>

        <!-- Navigation -->
        <div class="quiz-nav">
          <button
            v-if="currentStep > 1"
            class="mv-btn mv-btn--ghost"
            @click="prevStep"
          >
            ← Back
          </button>
          <button
            class="mv-btn mv-btn--primary"
            :disabled="!answers[currentQuestion.key]"
            @click="currentStep < 5 ? nextStep() : submitQuiz()"
          >
            <span v-if="currentStep < 5">Next →</span>
            <span v-else>See My Results →</span>
          </button>
        </div>
      </div>

      <!-- Result Screen -->
      <div v-else-if="currentStep === 'result'" class="quiz-result">
        <span class="mv-label">Your Recommendation</span>
        <h1 class="quiz-result__headline">Your Profile: The {{ resultProfile }} Collector</h1>

        <div class="quiz-result__text">
          <p>{{ resultText.p1 }}</p>
          <p>{{ resultText.p2 }}</p>
          <p>{{ resultText.p3 }}</p>
        </div>

        <div class="quiz-result__stones">
          <h2 class="quiz-result__stones-title">Here are matching stones from our collection</h2>
          <div class="stones-grid">
            <article
              v-for="stone in recommendedStones"
              :key="stone.id"
              class="stone-card"
              @click="navigateToStone(stone.id)"
            >
              <div class="stone-card__image">
                <span class="mv-badge mv-badge--green">GIA Certified</span>
                <div class="stone-card__placeholder">
                  <span>EMERALD</span>
                </div>
              </div>
              <div class="stone-card__body">
                <h3 class="stone-card__title">{{ stone.name }}</h3>
                <p class="stone-card__specs">{{ stone.specs }}</p>
                <div class="stone-card__footer">
                  <span class="stone-card__price">{{ stone.price }}</span>
                  <span class="stone-card__link">View Details →</span>
                </div>
              </div>
            </article>
          </div>
        </div>

        <!-- Email Gate -->
        <div class="quiz-email-gate">
          <h3 class="quiz-email-gate__headline">Send me my full recommendation</h3>
          <p class="quiz-email-gate__sub">Get a detailed write-up of your emerald profile, including specific stones and buying tips — delivered to your inbox.</p>
          <form class="quiz-email-gate__form" @submit.prevent="handleEmailSubmit">
            <div class="quiz-email-gate__input-row">
              <input
                v-model="emailInput"
                type="email"
                placeholder="Your email address"
                class="mv-input"
                required
                :disabled="emailStatus === 'loading' || emailStatus === 'success'"
              />
              <button
                type="submit"
                class="mv-btn mv-btn--primary"
                :disabled="emailStatus === 'loading' || emailStatus === 'success'"
              >
                <span v-if="emailStatus === 'loading'">Sending...</span>
                <span v-else-if="emailStatus === 'success'">Sent ✓</span>
                <span v-else>Send Recommendation</span>
              </button>
            </div>
            <p v-if="emailStatus === 'success'" class="quiz-email-gate__success">
              Check your inbox — your full recommendation is on the way.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useRouteSEO } from '../composables/useRouteSEO'
import { submitQuizAnswers } from '../services/quizService'
import { subscribeToNewsletter } from '../services/newsletterService'

useRouteSEO()

const router = useRouter()
const currentStep = ref(0) // 0=intro, 1-5=steps, 'result'=results
const emailInput = ref('')
const emailStatus = ref('idle') // 'idle' | 'loading' | 'success' | 'error'

const answers = ref({
  budget: null,
  jewelryType: null,
  stoneSize: null,
  color: null,
  occasion: null
})

const questions = [
  {
    key: 'budget',
    text: "What's your budget range?",
    options: [
      { value: 'under500', label: 'Under $500' },
      { value: '500to1500', label: '$500 – $1,500' },
      { value: '1500to3000', label: '$1,500 – $3,000' },
      { value: '3000plus', label: '$3,000+' }
    ]
  },
  {
    key: 'jewelryType',
    text: 'What are you looking to set?',
    options: [
      { value: 'ring', label: 'Ring' },
      { value: 'earrings', label: 'Earrings' },
      { value: 'pendant', label: 'Pendant' },
      { value: 'loose', label: 'Loose Stone' }
    ]
  },
  {
    key: 'stoneSize',
    text: 'What stone size are you aiming for?',
    options: [
      { value: 'under1', label: 'Under 1ct' },
      { value: '1to2', label: '1 – 2ct' },
      { value: '2to3', label: '2 – 3ct' },
      { value: '3plus', label: '3ct+' }
    ]
  },
  {
    key: 'color',
    text: 'Which emerald color speaks to you?',
    options: [
      { value: 'deep', label: 'Deep forest green' },
      { value: 'bright', label: 'Bright vivid green' },
      { value: 'yellowish', label: 'Yellowish green' },
      { value: 'bluegreen', label: 'Blue-green' }
    ]
  },
  {
    key: 'occasion',
    text: "What's the occasion?",
    options: [
      { value: 'yourself', label: 'For Myself' },
      { value: 'anniversary', label: 'Anniversary Gift' },
      { value: 'engagement', label: 'Engagement' }
    ]
  }
]

const currentQuestion = computed(() => questions[currentStep.value - 1])

const startQuiz = () => { currentStep.value = 1 }

const selectAnswer = (value) => {
  answers.value[currentQuestion.value.key] = value
}

const nextStep = () => {
  if (currentStep.value < 5) currentStep.value++
}

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--
}

const submitQuiz = () => {
  currentStep.value = 'result'
}

// Compute result profile label based on budget + size
const resultProfile = computed(() => {
  const b = answers.value.budget
  const s = answers.value.stoneSize
  if (b === '3000plus' || s === '3plus') return '3-Carat'
  if (b === '1500to3000' || s === '2to3') return '2-Carat'
  if (b === '500to1500' || s === '1to2') return '1-Carat'
  return 'Collector'
})

const resultText = computed(() => {
  const o = answers.value.occasion
  const j = answers.value.jewelryType
  if (o === 'engagement') {
    return {
      p1: `An engagement-quality emerald is a statement choice — and we respect that. Colombian emeralds have a depth and fire that no other gem matches. For an engagement ring, we recommend prioritizing clarity and color consistency over carat weight alone.`,
      p2: `Look for a stone with minimal treatment (Minor Oil or better), a deep green hue with no brownish modifier, and a cut that maximizes brilliance. An emerald cut or cushion cut in a platinum or white gold setting is classic, but we also love modern halo designs that protect the stone.`,
      p3: `We'll send over a curated selection of engagement-ready stones with full GIA reports — along with our setting recommendations and what to ask a jeweler if you're having it set locally.`
    }
  }
  if (o === 'anniversary') {
    return {
      p1: `Anniversary emeralds are about marking something meaningful with a stone that has its own story. Colombian emeralds are perfect for this — each one carries the geology of the Andes, the hands of the miners, and the judgment of GIA.`,
      p2: `Based on your preferences, we'd recommend a stone in the ${answers.value.stoneSize === 'under1' ? 'under-1ct' : answers.value.stoneSize === '1to2' ? '1–2ct' : answers.value.stoneSize === '2to3' ? '2–3ct' : '3ct+'} range, set as a ${j === 'loose' ? 'loose stone you can design around' : j === 'ring' ? 'ring' : j === 'earrings' ? 'pair of earrings' : 'pendant'}. The color profile you're drawn to suggests you value saturation and depth.`,
      p3: `We'll put together a shortlist of stones that match your criteria, with GIA specs, treatment disclosures, and direct-from-source pricing.`
    }
  }
  return {
    p1: `You've got good taste. Colombian emeralds are the benchmark for quality in the gem world — and buying direct from source means you're getting better value than you'd find at a traditional jeweler.`,
    p2: `Based on your budget of ${answers.value.budget === 'under500' ? 'under $500' : answers.value.budget === '500to1500' ? '$500–$1,500' : answers.value.budget === '1500to3000' ? '$1,500–$3,000' : '$3,000+'} and preference for ${answers.value.stoneSize === 'under1' ? 'smaller, quality-focused stones' : answers.value.stoneSize === '1to2' ? 'a solid mid-range stone' : answers.value.stoneSize === '2to3' ? 'a substantial stone with presence' : 'a significant collector-grade stone'}, we'll match you with options that maximize every dollar.`,
    p3: `Browse our recommended stones below, or reach out if you want to talk through options before committing.`
  }
})

const catalogStones = [
  { id: 1, name: '1.5ct Emerald Cut Colombian Emerald', specs: 'Emerald Cut · VVS1 · Minor Oil · Muzo Valley', price: '$1,850' },
  { id: 2, name: '2.1ct Oval Colombian Emerald', specs: 'Oval · VS2 · No Treatment · Chivor', price: '$3,200' },
  { id: 3, name: '0.95ct Cushion Colombian Emerald', specs: 'Cushion · SI1 · Standard Oil · Muzo', price: '$1,175' }
]

const recommendedStones = computed(() => catalogStones.slice(0, 3))

const navigateToStone = (id) => {
  router.push(`/stones/${id}`)
}

const handleEmailSubmit = async () => {
  if (!emailInput.value) return
  emailStatus.value = 'loading'
  // Submit quiz answers
  await submitQuizAnswers(answers.value, resultProfile.value)
  // Also subscribe to newsletter
  await subscribeToNewsletter(emailInput.value)
  emailStatus.value = 'success'
  emailInput.value = ''
}
</script>

<style scoped>
.quiz-view {
  padding: 3rem 0 6rem;
  min-height: calc(100vh - 64px);
}

/* Intro */
.quiz-intro {
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
  padding-top: 2rem;
}

.quiz-intro__headline {
  margin: 0.75rem 0 1.25rem;
}

.quiz-intro__sub {
  font-size: 1.05rem;
  color: var(--mv-muted);
  line-height: 1.7;
  max-width: 52ch;
  margin: 0 auto 2.5rem;
}

.quiz-intro__visual {
  margin: 2.5rem 0 3rem;
}

.quiz-intro__gem {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  color: var(--mv-green);
  opacity: 0.2;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.quiz-intro__gem svg {
  width: 100%;
  height: 100%;
}

.quiz-intro__features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  text-align: center;
}

.quiz-intro__feature {
  position: relative;
}

.quiz-intro__feature-num {
  display: block;
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--mv-green);
  opacity: 0.15;
  margin-bottom: 0.75rem;
}

.quiz-intro__feature h3 {
  font-size: 1rem;
  margin-bottom: 0.4rem;
}

.quiz-intro__feature p {
  font-size: 0.85rem;
  color: var(--mv-muted);
  line-height: 1.5;
  max-width: 24ch;
  margin: 0 auto;
}

/* Quiz Step */
.quiz-step {
  max-width: 600px;
  margin: 0 auto;
  padding-top: 1rem;
}

.quiz-progress {
  height: 4px;
  background: var(--mv-border);
  border-radius: 2px;
  margin-bottom: 0.5rem;
  overflow: hidden;
}

.quiz-progress__bar {
  height: 100%;
  background: var(--mv-green);
  border-radius: 2px;
  transition: width 0.4s ease;
}

.quiz-progress__label {
  font-size: 0.75rem;
  color: var(--mv-muted);
  text-align: right;
  margin-bottom: 3rem;
}

.quiz-question {
  margin-bottom: 3rem;
}

.quiz-question__text {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: 2rem;
  text-align: center;
}

.quiz-question__options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.quiz-option {
  padding: 1.25rem 1.5rem;
  background: var(--mv-white);
  border: 1.5px solid var(--mv-border);
  border-radius: var(--r-md);
  cursor: pointer;
  text-align: left;
  transition: all var(--tr-fast);
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--mv-charcoal);
}

.quiz-option:hover {
  border-color: var(--mv-green);
  background: rgba(27,67,50,0.04);
}

.quiz-option--selected {
  border-color: var(--mv-green);
  background: var(--mv-green);
  color: var(--mv-cream);
}

.quiz-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--mv-border);
}

.quiz-nav .mv-btn--primary {
  margin-left: auto;
}

/* Result */
.quiz-result {
  max-width: 900px;
  margin: 0 auto;
  padding-top: 2rem;
}

.quiz-result__headline {
  margin: 0.75rem 0 2rem;
}

.quiz-result__text p {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--mv-charcoal);
  margin-bottom: 1rem;
  max-width: 68ch;
}

.quiz-result__stones {
  margin-top: 3.5rem;
  padding-top: 3.5rem;
  border-top: 1px solid var(--mv-border);
}

.quiz-result__stones-title {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.stones-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.stone-card {
  background: var(--mv-white);
  border: 1px solid var(--mv-border);
  border-radius: var(--r-md);
  overflow: hidden;
  cursor: pointer;
  transition: transform var(--tr-base), box-shadow var(--tr-base);
}

.stone-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--sh-lg);
}

.stone-card__image {
  position: relative;
  height: 200px;
}

.stone-card__image .mv-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1;
}

.stone-card__placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--mv-green) 0%, var(--mv-green-deep) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mv-cream);
  font-family: var(--font-heading);
  font-size: 0.9rem;
  letter-spacing: 0.2em;
  opacity: 0.3;
}

.stone-card__body {
  padding: 1.25rem;
}

.stone-card__title {
  font-size: 1rem;
  margin-bottom: 0.35rem;
}

.stone-card__specs {
  font-size: 0.8rem;
  color: var(--mv-muted);
  margin-bottom: 0.875rem;
}

.stone-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stone-card__price {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--mv-charcoal);
}

.stone-card__link {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--mv-green);
}

/* Email Gate */
.quiz-email-gate {
  margin-top: 3.5rem;
  padding: 3rem;
  background: var(--mv-cream);
  border: 1px solid var(--mv-border);
  border-radius: var(--r-lg);
  text-align: center;
}

.quiz-email-gate__headline {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.quiz-email-gate__sub {
  font-size: 0.9rem;
  color: var(--mv-muted);
  max-width: 48ch;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.quiz-email-gate__input-row {
  display: flex;
  gap: 0.75rem;
  max-width: 440px;
  margin: 0 auto;
}

.quiz-email-gate__input-row .mv-input {
  flex: 1;
}

.quiz-email-gate__success {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--mv-green);
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .quiz-intro__features {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .quiz-question__options {
    grid-template-columns: 1fr;
  }

  .stones-grid {
    grid-template-columns: 1fr;
  }

  .quiz-email-gate__input-row {
    flex-direction: column;
  }
}

@media (max-width: 600px) {
  .stones-grid {
    grid-template-columns: 1fr;
  }

  .quiz-nav {
    flex-direction: column-reverse;
    gap: 1rem;
  }

  .quiz-nav .mv-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>